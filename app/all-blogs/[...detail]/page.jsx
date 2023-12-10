import NavigationBar from "@/components/custom/NavigationBar";
import DetailBlogs from "@/components/detailBlogs/DetailBlogs";
import React from "react";

export const metadata = {
  title: "Depublic | Detail Blog",
  description:
    "Platform ini merupakan tempat jual-beli tiket konser ataupun event. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan buyer. Dalam hal ini, pengguna diharapkan dapat dengan mudah menemukan jadwal konser yang sesuai dengan kebutuhan mereka dan membayar tiket secara online. Selain itu, website ini juga diharapkan dapat menyediakan informasi yang akurat dan terkini tentang event yang sedang berlangsung",
  openGraph: {
    title: "Depublic | Detail Blog",
    description:
      "Platform ini merupakan tempat jual-beli tiket konser ataupun event. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan buyer. Dalam hal ini, pengguna diharapkan dapat dengan mudah menemukan jadwal konser yang sesuai dengan kebutuhan mereka dan membayar tiket secara online. Selain itu, website ini juga diharapkan dapat menyediakan informasi yang akurat dan terkini tentang event yang sedang berlangsung",
  },
};

export default function DetailBlogsPage({ params }) {
  return (
    <div className="homepage-container">
      <NavigationBar />
      <DetailBlogs id={params.detail[1]} />
    </div>
  );
}
