import GlobalStyles, { Container } from './assets/styles/GlobalStyles';
import { Home, Uploading, UploadSuccess } from './components';

function App() {
  return (
    <Container>
      {/* <Home /> */}
      {/* <Uploading /> */}
      <UploadSuccess />
      <GlobalStyles />
    </Container>
  );
}

export default App;
