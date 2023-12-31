import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "./AuthCheck";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src="/next.svg" width={216} height={30} alt="Next.js Logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <AuthCheck>
          <li>
            <SignOutButton />
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
}
