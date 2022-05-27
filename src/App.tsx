import GlobalStyles, { Container } from './assets/styles/GlobalStyles';
import { Home, Uploading } from './components';

function App() {
  return (
    <Container>
      {/* <Home /> */}
      <Uploading />
      <GlobalStyles />
    </Container>
  );
}

export default App;
