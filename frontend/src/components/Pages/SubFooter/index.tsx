import { useContext } from "react";

import { Styled } from "./style";
import Container from "../../Utils/Container";
import { AppContext } from "../../../contexts/AppContext";

import Link from "../../Utils/Link";
const logo = "./logo/productions.svg";

const SubFooter = (): JSX.Element => {
  const { webContent } = useContext(AppContext);
  const { terms, policy } = webContent.SUBFOOTER;

  const handleSwitch = () => {};

  return (
    <Container
      size="
    93px"
      logo={logo}
      backgroundType="image"
      logoWidth="100px"
      logoMinWidth="100px"
    >
      <Styled>
        <div className="links">
          <Link href={terms.href} className="text terms">
            {terms.description}
          </Link>
          <Link href={policy.href} className="text policy">
            {policy.description}
          </Link>
        </div>
      </Styled>
    </Container>
  );
};

export default SubFooter;
