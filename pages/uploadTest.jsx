import React from 'react';

const generateRandomString = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

const Home = () => {
  const [uploaded, setUploaded] = React.useState(false);
  const fileRef = React.useRef();

  async function handleUpload(e) {
    const file = fileRef.current?.files[0];
    const fileBuffer = await file.arrayBuffer();
    const fileName = generateRandomString(32) + file.name;

    const res = await fetch(`/api/uploadTest?fileName=${fileName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'content-length': fileBuffer.byteLength,
      },
      body: fileBuffer,
    });

    const { data } = await res.json();
    if (data === 'success') {
      setUploaded(true);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <form>
        <input type='file' name='file' ref={fileRef} />
        <input type='button' defaultValue={'Send'} onClick={handleUpload} />
      </form>
      <pre>{JSON.stringify(uploaded, 0, 2)}</pre>
    </div>
  );
};

export default Home;
