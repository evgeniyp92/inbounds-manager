import React from 'react';

const CHUNK_SIZE = 25000; // 25kb

function UploadBox() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadFile = async () => {
    const url = '/api/upload';
    const fileData = new Blob([selectedFile, { type: selectedFile.type }]);
    const response = await fetch(url, { method: 'POST', body: fileData });
    console.log(response);
  };

  return (
    <div>
      <input type='file' onChange={handleFileInput} />
      <button onClick={handleUploadFile}>Upload</button>
    </div>
  );

  // const [highlight, setHighlight] = React.useState(false);
  // const [files, setFiles] = React.useState([]);
  // const [upload, setUpload] = React.useState(false);
  // const fileRef = React.useRef();

  // const handleUpload = async () => {
  //   const file = fileRef.current?.files[0];
  //   const fileBuffer = await file.arrayBuffer();
  //   const numChunks = Math.ceil(fileBuffer.byteLength / CHUNK_SIZE);
  //   const fileName = Math.random().toString(36).slice(-10) + '_' + file.name;

  //   for (let chunk = 0; chunk < numChunks; chunk++) {
  //     let CHUNK = fileBuffer.slice(
  //       chunk * CHUNK_SIZE,
  //       (chunk + 1) * CHUNK_SIZE
  //     );
  //     await fetch(`/api/upload?fileName=${fileName}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/octet-stream',
  //         'content-length': CHUNK.byteLength,
  //       },
  //       body: CHUNK,
  //     });
  //   }

  //   // const formData = new FormData();
  //   // formData.append('fileName', files[0]);
  //   // console.log(formData.get('fileName'));
  //   // const res = await fetch(`/api/upload?fileName=${fileName}`, {
  //   //   method: 'POST',
  //   //   body: formData,
  //   // });
  //   // console.log(res);
  // };

  //   return (
  //     <div className='flex flex-col items-center justify-center space-y-4'>
  //       <div
  //         onDragEnter={handleDragEnter}
  //         onDragLeave={handleDragLeave}
  //         onDragOver={handleDragEnter}
  //         onDrop={handleDrop}
  //         className={`mx-auto flex h-72 w-96 flex-col items-center justify-between rounded-lg border-4 py-4 ${
  //           highlight
  //             ? `border-zinc-700 bg-zinc-100`
  //             : `border-zinc-500 bg-zinc-50`
  //         }`}>
  //         <p className='text-center'>Upload file by dragging and dropping</p>
  //         {files.length === 0 && (
  //           <svg
  //             xmlns='http://www.w3.org/2000/svg'
  //             fill='none'
  //             viewBox='0 0 24 24'
  //             strokeWidth={1.5}
  //             stroke='currentColor'
  //             className='h-32 w-32 text-zinc-500/25'>
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
  //             />
  //           </svg>
  //         )}
  //         {files.length !== 0 && upload === false && (
  //           <ul className='text-center'>
  //             {files.map((el, i) => (
  //               <li key={i}>
  //                 <span>{el.name}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         )}
  //         {upload && (
  //           <div className='flex items-center space-x-2'>
  //             <svg
  //               viewBox='0 0 120 30'
  //               xmlns='http://www.w3.org/2000/svg'
  //               fill='none'
  //               strokeWidth={1.5}
  //               stroke='currentColor'
  //               className='w-8 text-zinc-500'>
  //               <circle cx='15' cy='15' r='15'>
  //                 <animate
  //                   attributeName='r'
  //                   from='15'
  //                   to='15'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='15;9;15'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //                 <animate
  //                   attributeName='fill-opacity'
  //                   from='1'
  //                   to='1'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='1;.5;1'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //               </circle>
  //               <circle cx='60' cy='15' r='9' fill-opacity='0.3'>
  //                 <animate
  //                   attributeName='r'
  //                   from='9'
  //                   to='9'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='9;15;9'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //                 <animate
  //                   attributeName='fill-opacity'
  //                   from='0.5'
  //                   to='0.5'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='.5;1;.5'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //               </circle>
  //               <circle cx='105' cy='15' r='15'>
  //                 <animate
  //                   attributeName='r'
  //                   from='15'
  //                   to='15'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='15;9;15'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //                 <animate
  //                   attributeName='fill-opacity'
  //                   from='1'
  //                   to='1'
  //                   begin='0s'
  //                   dur='0.8s'
  //                   values='1;.5;1'
  //                   calcMode='linear'
  //                   repeatCount='indefinite'
  //                 />
  //               </circle>
  //             </svg>
  //             <span>Processing...</span>
  //           </div>
  //         )}
  //         <input
  //           type='file'
  //           accept='.xlsx'
  //           className='flex w-full px-4 text-sm file:rounded-lg file:border-0 file:bg-zinc-300 file:text-zinc-900 file:hover:bg-zinc-400 file:active:bg-zinc-500'
  //           onChange={handleFileInput}
  //           ref={fileRef}
  //         />
  //       </div>
  //       <button
  //         onClick={handleUpload}
  //         className='flex w-full max-w-xs items-center justify-center space-x-2 rounded-lg border-2 border-zinc-500 bg-zinc-500 p-2 px-4 text-white duration-150 hover:border-zinc-700 hover:bg-zinc-700 md:w-auto'>
  //         Upload
  //       </button>
  //     </div>
  //   );
}

export default function Home() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-zinc-200 font-sans'>
      <div className='container max-w-6xl'>
        <UploadBox />
      </div>
    </div>
  );
}
