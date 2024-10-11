import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <strong>Salesforce as an OIDC IdP</strong> - Get started
        </p>
        <div>
          <a
            href="https://www.salesforce.com/ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sf_logo.svg"
              alt="Salesforce Logo"
              className={styles.vercelLogo}
              width={200}
              height={60}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/goc_logo.svg"
          alt="Government of Canada logo"
          width={360}
          height={80}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://openid.net/developers/how-connect-works/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find information about OpenID Connect.</p>
        </a>

        <a
          href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-oidc-idp.html#cognito-user-pools-oidc-idp-step-2"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>How to configure Cognito user pools for OIDC.</p>
        </a>

        <a href="./signin" className={styles.card} rel="noopener noreferrer">
          <h2>
            Proof of concept <span>-&gt;</span>
          </h2>
          <p>Explore starter template for using Salesforce OIDC.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
