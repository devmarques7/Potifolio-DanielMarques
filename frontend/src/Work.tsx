import WorkPage from "./styles/workPage";
import Footer from "./components/Pages/Footer";
import SubFooter from "./components/Pages/SubFooter";
import Container from "./components/Utils/Container";
import Nav from "./components/Utils/NavBar";

const Work = () => {
  return (
    <>
      <Nav color="white" title />
      <Container backgroundType="color" backgroundSrc="white" size="100vh">
        <WorkPage>
          <h3>Coming Soon</h3>
          <h5>A look at our Agency work from around the network.</h5>
        </WorkPage>
        <Footer />
        <SubFooter />
      </Container>
    </>
  );
};

export default Work;
