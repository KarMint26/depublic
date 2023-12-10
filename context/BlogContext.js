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
    alt: "blog",
    tgl: "Rabu, Maret 27",
    longDesc:
      "Musik adalah bahasa universal yang mengikat kita semua. Dalam kebahagiaan dan kesedihan, ia menjadi pelipur lara. Melalui melodi yang mengalun, kita bisa merasakan emosi yang sulit diungkapkan. Setiap catatan membangkitkan kenangan, mengusir kesepian, atau sekadar membuat hari-hari kita lebih bersemangat. Musik adalah teman setia di setiap perjalanan hidup. Bahkan saat hening, ia hadir dalam keheningan untuk menemani pikiran kita. Begitu indahnya kekuatan musik yang bisa mengubah suasana hati dan menyatukan jiwa-jiwa yang berbeda menjadi satu. Melalui alunan nada, kita menemukan arti yang tak terucapkan, mengalir bersama irama yang membawa kedamaian."
  },
  {
    id: 2,
    titleBlog: "Konser Bahagia",
    shortDesc:
      "Konser adalah pengalaman yang luar biasa di mana kita dapat merasakan kebahagiaan melalui musik.",
    imagePath: "/assets/blogs/blog-images-2.png",
    alt: "blog-2",
    tgl: "Kamis, Juli 12",
    longDesc:
      "Konser adalah pesta kebahagiaan di mana alunan musik menjadi jembatan yang menghubungkan ribuan jiwa. Suasana yang penuh semangat dan kegembiraan mengalir dari panggung ke setiap penonton. Rasa euforia saat melihat penyanyi favorit atau band kesayangan tampil hidup, begitu mempesona. Tidak hanya tentang musik, tapi juga tentang bagaimana pengalaman itu menggetarkan hati dan merangsang indra. Sensasi riuh rendah dari kerumunan yang bersatu, bersama-sama menyanyikan lagu-lagu yang telah menjadi bagian dari kehidupan. Konser adalah momen di mana waktu terasa berhenti dan hanya ada kebahagiaan bersama irama yang mengalun."
  },
  {
    id: 3,
    titleBlog: "Menonton Konser",
    shortDesc:
      "Menonton konser adalah pengalaman yang tidak dapat digantikan. Saat kita semangat.",
    imagePath: "/assets/blogs/blog-images-3.png",
    alt: "blog-3",
    tgl: "Kamis, Agustus 19",
    longDesc:
      "Menonton konser adalah lebih dari sekadar menyaksikan pertunjukan musik. Ia adalah pengalaman yang menggugah jiwa. Terpesona oleh kepiawaian musisi, kita terbawa dalam alunan ritme yang memukau. Energinya menular, membangkitkan semangat yang terpendam. Bersama-sama di antara kerumunan yang bersemangat, ada rasa persatuan dalam keberagaman. Momennya tak terlupakan: riuh rendah dari tepuk tangan, sorak sorai penonton, dan teriakan kegembiraan. Setiap detik berharga, mengabadikan kenangan tak terlupakan dari konser yang telah menyentuh jiwa dan memberi inspirasi."
  },
  {
    id: 4,
    titleBlog: "Penyanyi Favorit",
    shortDesc:
      "Setiap orang memiliki penyanyi favorit yang lagu-lagu mereka adalah pengiring setiap hidup.",
    imagePath: "/assets/blogs/blog-images-4.png",
    alt: "blog-4",
    tgl: "Selasa, April 16",
    longDesc:
      "Penyanyi favorit adalah lebih dari sekadar musisi yang lagunya menyentuh hati. Mereka adalah teman dalam kesendirian dan pengiring setia di setiap momen. Suara mereka menjadi bagian dari kenangan indah dan pengalaman hidup. Lagu-lagu yang dinyanyikan terasa seperti menceritakan kisah hidup sendiri. Setiap lirik menggambarkan perasaan yang sulit diungkapkan. Musik mereka menyelami jiwa, mengiringi kebahagiaan dan menghapus kesedihan. Tak heran jika lagu-lagu dari penyanyi favorit selalu menjadi soundtrack yang mengiringi langkah-langkah dalam perjalanan hidup."
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
