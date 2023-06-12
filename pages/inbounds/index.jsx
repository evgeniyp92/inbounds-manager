import React from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import ListItem from '@/components/modulars/ListItem';

async function getInbounds() {
  return fetch('http://localhost:3000/api/inbounds').then(res => res.json());
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['inbounds'], getInbounds);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1 * 24 * 60 * 60, // 1 day
  };
}

export default function Home() {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['inbounds'],
    getInbounds
  );

  return (
    <div className='container mx-auto max-w-6xl p-4'>
      {isSuccess &&
        data.inboundsList.length !== 0 &&
        data.inboundsList.map(inbound => (
          <ListItem key={inbound._id} inbound={inbound} />
        ))}
    </div>
  );
}
