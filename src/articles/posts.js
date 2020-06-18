import A1 from "../articles/18-june-2020.mdx";

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
];
