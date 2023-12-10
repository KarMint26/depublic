"use client"

import { useContext, createContext } from "react";

const BlogContext = createContext();

const blogData = [
  {
    id: 1,
    titleBlog: "Musik Itu Sahabat",
    shortDesc:
      "Musik adalah sahabat yang selalu ada untuk kita dalam setiap momen kebahagiaan dan kesedihan.",
    imagePath: "/assets/blogs/blog-images.png",
    alt: "upcoming-event",
    tgl: "Rabu, Maret 27",
  },
  {
    id: 2,
    titleBlog: "Konser Bahagia",
    shortDesc:
      "Konser adalah pengalaman yang luar biasa di mana kita dapat merasakan kebahagiaan melalui musik.",
    imagePath: "/assets/blogs/blog-images-2.png",
    alt: "upcoming-event-2",
    tgl: "Kamis, Juli 12",
  },
  {
    id: 3,
    titleBlog: "Menonton Konser",
    shortDesc:
      "Menonton konser adalah pengalaman yang tidak dapat digantikan. Saat kita semangat.",
    imagePath: "/assets/blogs/blog-images-3.png",
    alt: "upcoming-event-3",
    tgl: "Kamis, Agustus 19",
  },
  {
    id: 4,
    titleBlog: "Penyanyi Favorit",
    shortDesc:
      "Setiap orang memiliki penyanyi favorit yang lagu-lagu mereka adalah pengiring setiap hidup.",
    imagePath: "/assets/blogs/blog-images-4.png",
    alt: "upcoming-event-4",
    tgl: "Selasa, April 16",
  },
];

export const BlogContextProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={{ blogData }}>{children}</BlogContext.Provider>
  );
};

export const BlogData = () => {
  return useContext(BlogContext);
};
