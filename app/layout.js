import { Montserrat } from "next/font/google";
import NavigationBar from "@/components/custom/NavigationBar";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Depublic",
  description:
    "Platform ini merupakan tempat jual-beli tiket konser ataupun event. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan buyer. Dalam hal ini, pengguna diharapkan dapat dengan mudah menemukan jadwal konser yang sesuai dengan kebutuhan mereka dan membayar tiket secara online. Selain itu, website ini juga diharapkan dapat menyediakan informasi yang akurat dan terkini tentang event yang sedang berlangsung",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavigationBar />
        <div className="m-auto flex justify-center items-center">{children}</div>
      </body>
    </html>
  );
}
