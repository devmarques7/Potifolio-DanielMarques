import Container from "../../Utils/Container";

const Galery = (): JSX.Element => {
  return (
    <Container
      backgroundSrc="./background-photo/Galery.JPG"
      backgroundType="image"
    >
      <a className="title" href="Work">
        EVENTS
      </a>
    </Container>
  );
};

export default Galery;
