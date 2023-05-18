import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 3vw;

  margin: 0 auto;

  width: 100%;

  .footer.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10.39px;
    height: 206.39px;

    .footer.text.title {
      font: var(--ROBOTO-14px_21px-BOLD);
      font-size: 70%;
    }

    .text.links {
      font: var(--ROBOTO-12px);
      color: var(--blacklish-grey);
      font-size: 60%;
    }
  }

  @media (min-width: 2560px) {
    .title {
      font-size: 30px;
    }

    .description {
      font-size: 17px;
      line-height: 26px;
    }
  }
  @media (min-width: 800px) {
    width: 700px;
  }
`;
