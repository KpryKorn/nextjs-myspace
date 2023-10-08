import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className={styles.main}>
      <h1>Welcome to my blog website</h1>
    </main>
  );
}
