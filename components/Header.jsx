import React from 'react';
import { generateRandomString } from '@/lib/generateRandomString';
import Link from 'next/link';

export default function Header() {
  const [uploadState, setUploadState] = React.useState({
    success: null,
    uploading: false,
    isVisible: false,
  });
  const fileRef = React.useRef();

  const handleUploadFile = async () => {
    const file = fileRef.current?.files[0];
    if (file) {
      setUploadState({ ...uploadState, uploading: true });
      const fileBuffer = await file.arrayBuffer();
      const fileName = generateRandomString(16) + file.name;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'content-length': fileBuffer.byteLength,
        },
        body: fileBuffer,
      };
      const res = await fetch(`/api/uploadSheet?fileName=${fileName}`, options);
      const data = await res.json();
      if (data.success) {
        setUploadState({ ...uploadState, success: true });
      } else {
        setUploadState({ ...uploadState, success: false });
      }
    }
  };

  // todo: write click-away listener, there should be one in this project alreadys

  return (
    <div className='fixed flex h-20 w-screen items-center justify-between bg-zinc-100 p-4 shadow-sm'>
      <h1 className='w-56 text-xl font-bold'>
        <Link href={'/'}>Inbounds Manager</Link>
      </h1>
      <div id='menu-links'></div>
      <div className='flex w-56 justify-end'>
        <div
          className={`box-border h-10 w-10 rounded-lg border-4 ${
            uploadState.isVisible
              ? `border-zinc-400 bg-zinc-300`
              : `border-zinc-300 bg-zinc-200`
          }  p-1 hover:cursor-pointer`}
          onClick={() =>
            setUploadState({
              ...uploadState,
              isVisible: !uploadState.isVisible,
            })
          }>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-full w-full text-zinc-500'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
        </div>
      </div>
      <div
        className={`absolute right-2 top-20 w-fit space-y-2 rounded-lg bg-zinc-100 p-4 ${
          uploadState.isVisible ? '' : 'hidden'
        }`}>
        <div>
          <p className='text-right'>
            Database last synced more than a month ago
          </p>
          {uploadState.uploading && (
            <p className='text-right'>Uploading, please wait...</p>
          )}
          {uploadState.success && (
            <p className='text-right text-green-500'>
              Upload successful. Refresh the page to see new data
            </p>
          )}
          {!uploadState.success ?? (
            <p className='text-right text-red-500'>
              Something went wrong. If this persists, please contact the
              developer
            </p>
          )}
        </div>
        <div className='flex justify-between'>
          <input
            type='file'
            ref={fileRef}
            className='text-sm file:rounded-lg file:border-0 file:bg-zinc-500 file:p-2 file:px-4 file:text-white file:hover:cursor-pointer file:hover:bg-zinc-700 file:active:bg-zinc-500'
          />
          <button
            onClick={handleUploadFile}
            className={`rounded-lg border-0 border-zinc-500 bg-zinc-500 p-2 px-4 text-white duration-150 hover:border-zinc-700 hover:bg-zinc-700  md:w-auto`}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
