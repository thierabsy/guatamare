import React from 'react';
import Dropzone from 'react-dropzone'

const FileUpload = ({children, dz}) => {
    return(
        <Dropzone className="ignore" onDrop={(files) => dz(files)} >
            {children}
        </Dropzone>
    )
}

export default FileUpload;