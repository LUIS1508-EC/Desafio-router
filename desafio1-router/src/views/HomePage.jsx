import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="container-fluid text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Hapy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img className='m-auto d-block' src='../src/assets/happyCake.png' height="200px" />
    </Container>
  );
};
export default HomePage;
