

import { Navbar } from "./_components/navbar";
import "./styles/global_style/globals.css";
import { Rubik, Inter } from "next/font/google";
import { AppProvider } from "./_context/AppContext";
const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Naped App - Bem Vindo",
  description: "Em desenvolvimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <AppProvider>



     <html lang="en">
       <body className={rubik.className}>
         <Navbar />
         <div className="contentGlobal">{children}</div>
         <footer className={inter.className}>
           <span className="left">
           Copyright © 2022 iuricode.com / viniciosragazzi.com Todos os direitos reservados.
           </span>
           <span className="right">
           Powered by

           </span>
         </footer>
       </body>
     </html>
   </AppProvider>
  );
}
