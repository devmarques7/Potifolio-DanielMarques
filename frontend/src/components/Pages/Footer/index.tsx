import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Container from "../../Utils/Container";
import { Styled } from "./style";
import Link from "../../Utils/Link";

const Footer = (): JSX.Element => {
  const { webContent } = useContext(AppContext);
  const { links } = webContent.FOOTER;
  return (
    <Container
      size="250px"
      backgroundType="color"
      backgroundSrc={`var(--whitelish-grey)`}
    >
      <Styled>
        {links.map((link) => {
          return (
            <div key={link.title} className="footer container">
              <h4 key={`${link.title} h4`} className="footer text title">
                {link.title}
              </h4>
              {link.href.map((href, index) => {
                return (
                  <Link
                    key={`${index}${href}`}
                    href={href}
                    className="text links"
                  >
                    {href}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </Styled>
    </Container>
  );
};

export default Footer;
