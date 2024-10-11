import styles from '../page.module.css';
import { redirect } from 'next/navigation';

// import { CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity-provider';

export default function Page() {
  const base =
    'https://salesforce-idp.auth.ca-central-1.amazoncognito.com/oauth2';
  const responseType = 'response_type=code';
  const clientId = 'client_id=3jt7ho404llkrnl1roi6hujch1';
  const redirectUri = 'redirect_uri=http://localhost:3000/dashboard';

  const url = `${base}/authorize?${responseType}&${clientId}&${redirectUri}`;
  redirect(url);
  return <></>;
}
