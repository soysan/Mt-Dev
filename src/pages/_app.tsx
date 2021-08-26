import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
import { StylesProvider } from '@material-ui/core'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import CssBaseLine from '@material-ui/core/CssBaseline'
import {theme} from '@/styles/colorTheme'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side')
    if(jssStyles){
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, [])

  return (
    <>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseLine />
            <Head>
              <meta
                name="viewpoint"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              {/* <link ref='icon' href='/hatching-chick.png' /> */}
            </Head>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </>
  )
}
export default MyApp
