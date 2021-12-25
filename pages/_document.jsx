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
        <body className="bg-blue-gray-100 dark:(bg-cool-gray-900 text-gray-50)">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
