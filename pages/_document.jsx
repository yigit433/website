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
        <body className="transition-colors duration-150 ease-linear bg-blue-gray-100 dark:(bg-cool-gray-900 text-gray-50)">
          <div className="bg-emerald-300 dark:bg-emerald-500 w-full py-1" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
