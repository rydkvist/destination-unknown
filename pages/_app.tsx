import "../styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <footer className="flex items-center justify-center w-full p-4 bg-gray-50">
        <a
          href="https://rydkvist.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 font-semibold hover:underline"
        >
          Niklas Rydkvist © {new Date().getFullYear().toString()}
        </a>
      </footer>
    </>
  );
};

export default App;
