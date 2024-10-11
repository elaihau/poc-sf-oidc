import { Suspense } from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";
import User from "./user";

export default function Page() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/user-avatar.svg"
          alt="User avatar"
          width={200}
          height={200}
          priority
        />
      </div>
      <Suspense>
        <div className={styles.profile}>
          <User></User>
        </div>
      </Suspense>
    </main>
  );
}