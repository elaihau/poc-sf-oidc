/* eslint @next/next/no-async-client-component: 0 */
'use client';

import { useSearchParams } from 'next/navigation';
import { Buffer } from 'buffer';
import useStorage from '@/app/lib/storage';
import styles from '@/app/page.module.css';

export default async function User() {
  const searchParams = useSearchParams();
  const hasError = !!searchParams.get('error');
  const codeParam = searchParams.get('code');
  console.log('hasError ', hasError);
  console.log('codeParam ', codeParam);

  const { getItem, setItem } = useStorage();

  const url =
    'https://salesforce-idp.auth.ca-central-1.amazoncognito.com/oauth2/token';
  let decoded = getItem('decodedToken');
  if (!decoded) {
    const grantType = 'grant_type=authorization_code';
    const clientId = 'client_id=3jt7ho404llkrnl1roi6hujch1';
    const redirect = 'redirect_uri=http://localhost:3000/dashboard';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `code=${codeParam}&${grantType}&${clientId}&${redirect}`,
    });

    if (res.status === 200) {
      const jsonRes = await res.json();
      const idToken = jsonRes.id_token;
      console.log('------token response-------', idToken);
      const profile = (idToken as string).split('.')[1];
      decoded = Buffer.from(profile, 'base64').toString('binary');
      console.log('------decoded-------', decoded);
      setItem('decodedToken', decoded);
    } else {
      console.log('!!!!Error!!!! token endpoint');
      console.log(res);
    }
  }

  return (
    <>
      {hasError && <p>Authentication failed</p>}
      {!hasError && (
        <>
          <h3>User Profile</h3>
          <br />
          <p>Decoded ID: </p>
          <br />
          <p className={styles.decoded}>{decoded}</p>
        </>
      )}
    </>
  );
}
