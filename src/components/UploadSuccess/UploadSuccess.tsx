import React from 'react';

import {
  Container,
  Icon,
  MessageSuccess,
  Img,
  LinkImg,
  Url,
  CopyButton,
} from './UploadSuccess.styles';

const UploadSuccess: React.FC<{ url: string }> = ({ url }) => {
  const handleClick = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <Container>
      <Icon className='material-icons'>check_circle</Icon>
      <MessageSuccess>Upload Successfully!</MessageSuccess>
      <Img src={url} />
      <LinkImg>
        <Url>{url}</Url>
        <CopyButton onClick={handleClick}>
          <p>Copy Link</p>
        </CopyButton>
      </LinkImg>
    </Container>
  );
};

export default UploadSuccess;
