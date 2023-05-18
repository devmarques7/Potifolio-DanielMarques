import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Container from "../../Utils/Container";

import { Styled } from "./style";
import TypeWriter from "../../Utils/TypeWriter";

interface IMessage {
  message: string;
  divisor?: string;
}

const Messages = ({ message, divisor }: IMessage): JSX.Element => {
  return (
    <Container
      size="
    93px"
    >
      <Styled>
        <TypeWriter className="sentence" phrase={message} divisor={divisor} />
      </Styled>
    </Container>
  );
};

export default Messages;
