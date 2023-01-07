import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="transition-colors duration-150 ease-linear bg-cool-gray-900 text-gray-50">
          <div className="backdrop-blur-md absolute top-0 h-[500px] bg-gradient-to-b opacity-[25%] w-full from-emerald-600 to-transparent" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
