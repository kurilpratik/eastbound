export type Post = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
};

export const posts: Post[] = [
  {
    id: "rajasthan-palace-hotels",
    category: "India",
    title: "The last of the great palace hotels",
    excerpt:
      "Where the maharajas once entertained emperors, a new generation of hoteliers is quietly rewriting the rules of hospitality.",
    date: "July 2026",
    readTime: "8 min read",
    image: "/images/newsletters/n1.jpg",
    link: "https://eastboundgroup.aflip.in/6e929abfd8.html",
  },
  {
    id: "bhutan-slow-travel",
    category: "Bhutan",
    title: "A slow week in the Paro Valley",
    excerpt:
      "Notes on tea, silence and the peculiar arithmetic of Gross National Happiness — from a fortnight spent walking in Bhutan.",
    date: "June 2026",
    readTime: "6 min read",
    image: "/images/newsletters/n2.jpg",
    link: "https://eastboundgroup.aflip.in/ec39dafae7.html",
  },
  {
    id: "maldives-private-atolls",
    category: "Maldives",
    title: "The atolls only a charter will show you",
    excerpt:
      "Beyond the well-known resorts lies a quieter Maldives — reached only by private yacht, and worth every nautical mile.",
    date: "May 2026",
    readTime: "5 min read",
    image: "/images/newsletters/n3.jpg",
    link: "https://eastboundgroup.aflip.in/dfbd49f502.html",
  },
];
