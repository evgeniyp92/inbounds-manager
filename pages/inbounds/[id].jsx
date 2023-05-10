import React from 'react';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { InboundView } from '@/components/inboundView/InboundView';

async function getOneInbound(id) {
  return fetch('http://localhost:3000/api/inbounds/' + id).then(res =>
    res.json()
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['inbound', params.id], () =>
    getOneInbound(params.id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function InboundPage(props) {
  const router = useRouter();
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['inbound', router.query.id],
    () => getOneInbound(router.query.id)
  );

  return (
    <div className='mx-auto flex min-w-full max-w-6xl items-center justify-center'>
      <InboundView inbound={data.inbound} />
    </div>
  );
}
