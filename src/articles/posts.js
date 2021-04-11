import A1 from "../articles/18-june-2020.mdx";
import A2 from "../articles/25-september-2020.mdx";
import A3 from "../articles/11-april-2021.mdx";

export const readTime = async (path) => {
  const res = await fetch(path)
    .then((response) => response.text())
    .then((text) => {
      return Math.ceil(text.length / 600).toString();
    });

  return res;
};

export const posts = [
  {
    number: "1",
    title: "UseState, UseEffect - Most popular hooks?",
    description: "Personal thoughts on react hooks.",
    path: A1,
    tags: ["react", "react-hooks"],
    date: "18 June, 2020",
  },
  {
    number: "2",
    title: "Quick steps for Quicksort",
    description: "Small and clean notes on quick sort.",
    path: A2,
    tags: ["data-structures", "algorithms"],
    date: "25 September, 2020",
  },
  {
    number: "3",
    title: "3 years with JavaScript: What I learned?",
    description: "My personal experiences with the programming language.",
    path: A3,
    tags: ["programming"],
    date: "11 April, 2021",
  },
];
