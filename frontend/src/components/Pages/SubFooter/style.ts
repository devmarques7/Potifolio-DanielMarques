import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .links {
    display: flex;
    gap: 10px;

    position: relative;

    bottom: 30px;

    .text {
      font: var(--ROBOTO-10px);
      color: var(--whitelish-grey);
    }
  }
`;
