import { useContext, useEffect, useState } from "react";

import { Container, MenuMobile, NavIcon, NavList } from "./style";
import NavBarButton from "../NavBarButton";
import { AppContext } from "../../../contexts/AppContext";
import Link from "../Link";

interface INav {
  color?: "white" | "black" | any;
  title?: boolean;
}

const Nav = ({ color = "black", title = false }: INav): JSX.Element => {
  const { handleLanguage, webContent } = useContext(AppContext);
  const { NAME, ICON, NAVBAR, LANGUAGES } = webContent.HEADER;
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  useEffect(() => {
    menu
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "scroll");
  }, [menu]);

  const conditionalRender = (link: string) => {
    switch (link) {
      case "Work":
        return (
          <Link key={link} id="links" href={`/${link}`}>
            {`${link}.`}
          </Link>
        );
      case "Home":
        return (
          <Link key={link} id="links" href={`/`}>
            {`${link}.`}
          </Link>
        );
      default:
        return (
          <Link key={link} id="links" href={`/#${link}`}>
            {`${link}.`}
          </Link>
        );
    }
  };

  return (
    <>
      <Container color={color} menu={menu}>
        {ICON && <NavIcon src={ICON} alt="Seven-Icon" />}
        {NAME && <NavIcon src={NAME} alt="Seven-Icon" />}

        <div className="container links">
          <NavList>{NAVBAR.map((link) => conditionalRender(link))}</NavList>
          {title && <h2>seven</h2>}
          <NavList>
            {LANGUAGES.map((link) => {
              return (
                <Link
                  key={link}
                  id="languages"
                  className={link}
                  href={`#${link}`}
                  onClick={handleLanguage}
                >
                  {link}
                </Link>
              );
            })}
          </NavList>
        </div>
        <NavBarButton
          className="navBarButton"
          isOpen={menu}
          onClick={handleMenu}
          strokeWidth="5"
          color={color === "white" ? "var(--blacklish-grey)" : "white"}
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="20"
          height="20"
          cursor="pointer"
        />
      </Container>
      {menu && (
        <MenuMobile color={color}>
          <NavList id="container_mobile-links">
            {NAVBAR.map((link) => conditionalRender(link))}
          </NavList>
          <NavList>
            {LANGUAGES.map((link) => {
              return (
                <Link
                  key={link}
                  id="languages"
                  className={link}
                  href={`#${link}`}
                  onClick={handleLanguage}
                >
                  {link}
                </Link>
              );
            })}
          </NavList>
        </MenuMobile>
      )}
    </>
  );
};

export default Nav;
