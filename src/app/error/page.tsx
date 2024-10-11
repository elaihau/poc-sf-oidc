import styles from "@/app/page.module.css";

export default function Page() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.profile}>
        <p>Failed to retrieve user profile</p>
      </div>
    </main>
  );
}