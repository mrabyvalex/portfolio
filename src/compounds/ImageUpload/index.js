import React from 'react';
import get from 'lodash.get';
import { PButton } from '../../atoms';

export default (props) => {
  const { variant = 'primary' } = props;
  const { REACT_APP_CLOUDINARY_BUCKET_PRESET, REACT_APP_CLOUDINARY_BUCKET_NAME } = process.env;
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_BUCKET_NAME, upload_preset: REACT_APP_CLOUDINARY_BUCKET_PRESET, tags: ['xmas'], theme: 'minimal' }, function(error, result) {
      console.log(result);
    });
  };
  return (
    <PButton variant={variant} {...props} onClick={uploadWidget}>
      UPLOAD IMAGE
    </PButton>
  );
};
