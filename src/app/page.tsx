import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import Middle from '@/components/Middle';
import BottomMenu from '@/components/BottomMenu';

const Home = () => (
  <main>
    <Container fluid id="footer">
      <Middle />
    </Container>
  </main>
);

export default Home;
