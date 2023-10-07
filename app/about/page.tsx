import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our company",
};

export default async function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>We are a social media company</p>
    </main>
  );
}
