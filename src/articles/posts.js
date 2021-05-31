import A1 from "../articles/11-april-2021.mdx";
import A2 from "../articles/26-may-2021.mdx";
export const readTime = async (path) => {
  const res = await fetch(path)
    .then((response) => response.text())
    .then((text) => {
      return Math.ceil(text.length / 800).toString();
    });

  return res;
};

export const posts = [
  // {
  //   number: "1",
  //   title: "UseState, UseEffect - Most popular hooks?",
  //   description: "Personal thoughts on react hooks.",
  //   path: A1,
  //   tags: ["react", "react-hooks"],
  //   date: "18 June, 2020",
  // },
  // {
  //   number: "2",
  //   title: "Quick steps for Quicksort",
  //   description: "Small and clean notes on quick sort.",
  //   path: A2,
  //   tags: ["data-structures", "algorithms"],
  //   date: "25 September, 2020",
  // },
  {
    number: "1",
    title: "2 years with JavaScript: What I learned?",
    description: "My personal experiences with the programming language.",
    path: A1,
    tags: ["programming", "javascript"],
    date: "11 April, 2021",
  },
  {
    number: "2",
    title: "Which tech-stack do we use at Educulture?",
    description: "Sharing my experience in building Educulture server-side.",
    path: A2,
    tags: ["business", "startups", "experiences"],
    date: "26 May, 2021",
  },
];
