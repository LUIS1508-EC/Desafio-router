import { Container } from "react-bootstrap";
import happyCake from '../../../assets/img/happyCake.png'

const HomePage = () => {
  return (
    <Container className="container-fluid text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Hapy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src={happyCake} height="200px" />
    </Container>
  );
};
export default HomePage;
