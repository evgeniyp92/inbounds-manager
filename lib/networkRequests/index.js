import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const res = await fetch('/api/hello');
  return res.json();
};

export default function Home() {
  const [data, setData] = useState(null);

  const postData = useCallback(async () => {
    const formData = { name: 'testUser', email: 'test@test.com' };
    const res = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setData(await res.json());
  }, []);

  const usersQuery = useQuery(['users'], () => fetchData());

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-zinc-200 font-sans'>
      <div className='container max-w-6xl'>
        <div>
          <button
            onClick={postData}
            className='rounded border-4 border-zinc-900 bg-slate-500 px-4 py-2 text-white'>
            Do the thing
          </button>
          {data && <pre>{JSON.stringify(data, 0, 2)}</pre>}
        </div>
        <div
          className='rounded border-4 border-zinc-900 p-4 hover:cursor-pointer'
          onClick={() => console.log(usersQuery.data.data)}>
          {usersQuery.isLoading && <span>Loading...</span>}
          {usersQuery.isError && <span>Error</span>}
          {usersQuery.isSuccess && (
            <ul>
              {usersQuery.data.data.map(el => (
                <li key={el._id}>
                  <p>{el.name}</p>
                  <p>{el.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// Notification date
// Name, AFSC, Marital Status
// Assigned sponsor
// Travel status
