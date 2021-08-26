import Document, {
  DocumentContext,
  Html,
  NextScript,
  Head,
  Main,
  DocumentInitialProps,
} from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
