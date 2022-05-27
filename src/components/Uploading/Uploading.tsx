import React from 'react';

import { Container, Title, LoadingBar } from './Uploading.styles';

const Uploading: React.FC = () => (
  <Container>
    <Title>Uploading...</Title>
    <LoadingBar />
  </Container>
);

export default Uploading;
