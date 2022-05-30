import { useEffect } from 'react';

import GlobalStyles, { Container } from './assets/styles/GlobalStyles';
import { Home, Uploading, UploadSuccess } from './components';

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <Container>
      <Home />
      {/* <Uploading /> */}
      {/* <UploadSuccess /> */}
      <GlobalStyles />
    </Container>
  );
}

export default App;
