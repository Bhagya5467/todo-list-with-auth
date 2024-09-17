import { createContext, useState } from 'react';

const MessageContext = createContext({
  message: undefined,
  setMessage: () => {},
});

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(undefined);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
