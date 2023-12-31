import AllBlogs from "@/components/allBlogs/AllBlogs";
import NavigationBar from "@/components/custom/NavigationBar";
import React from "react";

export const metadata = {
  title: "Depublic | All Blogs",
  description:
    "Platform ini merupakan tempat jual-beli tiket konser ataupun event. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan buyer. Dalam hal ini, pengguna diharapkan dapat dengan mudah menemukan jadwal konser yang sesuai dengan kebutuhan mereka dan membayar tiket secara online. Selain itu, website ini juga diharapkan dapat menyediakan informasi yang akurat dan terkini tentang event yang sedang berlangsung",
};

const AllBlogsPage = () => {
  return (
    <div className="homepage-container">
      <NavigationBar whatPage="detailBlogs" />
      <AllBlogs />
    </div>
  );
};

export default AllBlogsPage;
