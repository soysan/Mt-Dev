import Document, {
  DocumentContext,
  Html,
  NextScript,
  Head,
  Main,
  DocumentInitialProps,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='icon' href='/hatching-chick.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const materialUiSheets = new ServerStyleSheets();
  const styledComponentsSheets = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheets.collectStyles(materialUiSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheets.getStyleElement()}
          {materialUiSheets.getStyleElement()}
        </>
      ),
    };
  } finally {
    styledComponentsSheets.seal();
  }
};

export default MyDocument;
