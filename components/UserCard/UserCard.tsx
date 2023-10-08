import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={image ?? "default-avatar.wepb"}
        alt={`${name}'s profile`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p>{age}</p>
        <Link href={`/users/${id}`}>View Profile</Link>
      </div>
    </div>
  );
}
