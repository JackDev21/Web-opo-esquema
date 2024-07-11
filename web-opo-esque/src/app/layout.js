import "./globals.css";

import Header from "./components/Header"
import Article from "./components/Article"
import Section from "./components/Section"
import Footer from "./components/Footer";


export const metadata = {
  title: "Oposositiones esquemas",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="View">

          <Section>
            <Article />
            <Article />
            <Article />
            <Article />
          </Section>

        </div>
        <Footer />
      </body>
    </html>
  );
}
