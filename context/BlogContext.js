"use client";

import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getDataFromApi = async () => {
      const data = await axios.get(process.env.API_URL);
      setBlogData(data.data);
      console.log(data.data);
    };

    getDataFromApi();
  }, []);

  return (
    <BlogContext.Provider value={{ blogData }}>{children}</BlogContext.Provider>
  );
};

export const BlogData = () => {
  return useContext(BlogContext);
};
