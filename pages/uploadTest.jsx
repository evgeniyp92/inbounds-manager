import React from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const inputFileRef = React.useRef();

  const handleClick = async e => {
    // Prevent default behavior on form
    e.preventDefault();

    // If no file can be detected, prompt the user they need to add a file
    if (!inputFileRef.current?.files?.length) {
      alert('Please select the file you wish to upload');
      return;
    }

    setIsLoading(true);

    // Add files to formData
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach(file => {
      formData.append('file', file);
    });

    const response = await fetch('/api/uploadTest', {
      method: 'POST',
      body: formData,
    });

    const body = await response.json();

    alert(body.message);

    if (body.status === 'ok') {
      inputFileRef.current.value = '';
    } else {
      console.log('error');
    }

    setIsLoading(false);
  };

  return (
    <form>
      <div>
        <input type='file' name='myfile' ref={inputFileRef} />
      </div>
      <div>
        <input
          type='submit'
          value='Upload'
          disabled={isLoading}
          onClick={handleClick}
        />
        {isLoading && ` Wait, please...`}
      </div>
    </form>
  );
};

export default Home;
