import Header from "./_components/Header";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_context/ReservationContext";

//How to load a lib from google from our own server, faster and safer
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located somewhere and sorrounded by something and whatever.",
};

//Inside the layout, the children will be always the content of the page were at
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {/* Since the components passed as children inside our Provider(client
            component) are passed as props, they still are Server components and
            do not re-render */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
