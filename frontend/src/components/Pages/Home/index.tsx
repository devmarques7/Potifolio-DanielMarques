import Nav from "../../Utils/NavBar";
import Container from "../../Utils/Container";

const logo = "./logo_2.svg";

const HomePage = (): JSX.Element => {
  return (
    <Container
      backgroundSrc="./background-photo/home.JPG"
      backgroundType="image"
      // logo={logo}
    >
      <Nav color={"var(--nav-background)"} />
      <div className="container"></div>
    </Container>
  );
};

export default HomePage;
