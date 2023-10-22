import "@/styles/globals.css";
import type { AppProps } from "next/app";
import mailgo from "mailgo";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

const mailgoConfig = {
  dark: true,
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
