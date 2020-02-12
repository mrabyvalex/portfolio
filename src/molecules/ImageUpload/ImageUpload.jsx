import React from 'react';
import get from 'lodash.get';
import { PButton } from '../../atoms';

export default (props) => {
  const { variant = 'primary', addNewImage } = props;
  const { REACT_APP_CLOUDINARY_BUCKET_PRESET, REACT_APP_CLOUDINARY_BUCKET_NAME } = process.env;
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_BUCKET_NAME, upload_preset: REACT_APP_CLOUDINARY_BUCKET_PRESET, tags: ['xmas'], theme: 'minimal' }, (error, result) => {
      console.log(result);
      const [{ public_id: imageId, url }] = result;
      addNewImage({
        request: {
          imageId,
          url
        }
      });
    });
  };
  return (
    <PButton variant={variant} {...props} onClick={uploadWidget}>
      UPLOAD IMAGE
    </PButton>
  );
};
