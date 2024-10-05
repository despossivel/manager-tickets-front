import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
  fetchTickets
} from "../../services/api"


const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true);


  const getTickets = async () => {
    const response = await fetchTickets()
    setTickets(response);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await getTickets())()
  }, []);


  return (
    <InteractionContext.Provider value={{
      tickets,
      selectedTicket,
      setSelectedTicket,
      loading,
      getTickets
    }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);

export const useMain = () => {
  return {
    ...useInteraction(),
  };
};

export const MainProvider = ({ children }) => {
  return <InteractionProvider>
    {children}
  </InteractionProvider>;
};
