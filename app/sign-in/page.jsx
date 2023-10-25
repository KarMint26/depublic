import SignInForm from "@/components/signin/SignInForm";

export const metadata = {
  title: "Depublic | Sign In",
  description:
    "Platform ini merupakan tempat jual-beli tiket konser ataupun event. Platform ini membuka dan menyediakan berbagai jenis kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan buyer. Dalam hal ini, pengguna diharapkan dapat dengan mudah menemukan jadwal konser yang sesuai dengan kebutuhan mereka dan membayar tiket secara online. Selain itu, website ini juga diharapkan dapat menyediakan informasi yang akurat dan terkini tentang event yang sedang berlangsung",
};

export default function SignIn() {
  return (
    <>
      <SignInForm />
    </>
  )
}
