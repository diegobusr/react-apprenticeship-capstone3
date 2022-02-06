import React from 'react';
import { MessageDiv, StyledMessage } from './Message.styles';
const Message = ({ message }) => {
  return (
    <MessageDiv>
      <StyledMessage> {message} </StyledMessage>
    </MessageDiv>
  );
};

export default Message;
