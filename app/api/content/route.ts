const posts = [
  {
    title: "Lorem Ipsum 1",
    slug: "lorem-ipsum-1",
    content: "Contenu de Lorem Ipsum 1",
  },
  {
    title: "Lorem Ipsum 2",
    slug: "lorem-ipsum-2",
    content: "Contenu de Lorem Ipsum 2",
  },
  {
    title: "Lorem Ipsum 3",
    slug: "lorem-ipsum-3",
    content: "Contenu de Lorem Ipsum 3",
  },
  {
    title: "Lorem Ipsum 4",
    slug: "lorem-ipsum-4",
    content: "Contenu de Lorem Ipsum 4",
  },
  {
    title: "Lorem Ipsum 5",
    slug: "lorem-ipsum-5",
    content: "Contenu de Lorem Ipsum 5",
  },
];

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(posts);
}
