import React from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <h3 style={{color:`#F2ED66`,fontSize:`1.2rem`}}>Upload your RFP</h3>
        <div className="has-text-centered">
        	<p>Drag and drop files here or</p>
			<button className="upload-btn button is-default" type="button" onClick={open}>UPLOAD</button>
		</div>
        <aside>
        	<ul>{files}</ul>
		</aside>
    </div>
  );
}

export default Dropzone