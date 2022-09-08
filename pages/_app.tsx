import type { AppProps } from 'next/app';
import theme from 'styles/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseLine from '@/components/CssBaseLine';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseLine />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
