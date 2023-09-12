// components/FileUpload.js
import React, { useState } from 'react';

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Files uploaded successfully');
      } else {
        console.error('Error uploading files');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className='mx-auto max-w-md rounded-lg bg-white px-4 py-8 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold'>File Upload</h2>
      <div className='space-y-2'>
        <input
          type='file'
          multiple
          className='w-full rounded-lg border px-3 py-2'
          onChange={handleFileChange}
        />
        <button
          className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
