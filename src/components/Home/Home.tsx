import React from 'react';

import {
  Container,
  Title,
  Description,
  DragDrop,
  Icon,
  Text,
  ChooseFile,
} from './Home.styles';
import landscapeImg from '../../assets/svg/landscape.svg';

const Home: React.FC = () => (
  <Container>
    <Title>Upload your image</Title>
    <Description>File should be Jpeg, Png...</Description>
    <DragDrop>
      <Icon src={landscapeImg} />
      <Text>Drag & Drop your image here</Text>
    </DragDrop>
    <Text>Or</Text>
    <ChooseFile>
      <input type='file' id='img' name='img' accept='image/*' />
      <span>Choose a file</span>
    </ChooseFile>
  </Container>
);

export default Home;
