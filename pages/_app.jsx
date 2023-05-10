import '@/styles/globals.css';
import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  // return <Component {...pageProps} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <div className='flex h-full min-h-screen w-screen justify-center bg-zinc-200 pt-20 font-sans'>
            <Component {...pageProps} />
          </div>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
