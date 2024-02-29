import { Html, Head, Main, NextScript } from "next/document";
import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footers/page";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
