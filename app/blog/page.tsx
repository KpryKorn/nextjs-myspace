import Link from "next/link";
import { Post } from "./[slug]/page";
import styles from "./blog.module.css";

export default async function BlogPage() {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );

  return (
    <main>
      <h1>Blog</h1>
      <div className={styles.blogGrid}>
        {posts.map((post: Post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={styles.blogItem}
          >
            <h2 className={styles.blogTitle}>{post.title}</h2>
            <p className={styles.blogContent}>{post.content}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
