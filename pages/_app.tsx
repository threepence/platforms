import { MathJaxContext } from "better-react-mathjax";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <PlausibleProvider domain="demo.vercel.pub">
      <SessionProvider session={session}>
        <MathJaxContext version={3} config={config}>
          <Component {...pageProps} />
        </MathJaxContext>
      </SessionProvider>
    </PlausibleProvider>
  );
}
