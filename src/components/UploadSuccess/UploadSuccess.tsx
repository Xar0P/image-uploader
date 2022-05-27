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

const UploadSuccess: React.FC = () => (
  <Container>
    <Icon className='material-icons'>check_circle</Icon>
    <MessageSuccess>Upload Successfully!</MessageSuccess>
    <Img src='https://cdn.discordapp.com/attachments/833777374445174807/979520880554172426/unknown.png' />
    <LinkImg>
      <Url>
        https://cdn.discordapp.com/attachments/833777374445174807/979520880554172426/unknown.png
      </Url>
      <CopyButton>
        <p>Copy Link</p>
      </CopyButton>
    </LinkImg>
  </Container>
);

export default UploadSuccess;
