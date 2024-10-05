import React from 'react';
import TicketDetail from '../TicketDetail';
import Loader from '../Loader';
import { useMain } from "../../context";
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

const TicketList = () => {
  const { tickets, selectedTicket, setSelectedTicket, loading } = useMain();

  if (loading) return <Loader />;

  const handleTicketClick = (ticket) => setSelectedTicket(ticket);
  const handleCloseDetail = () => setSelectedTicket(null);

  return (
    <div className="max-w-12xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <TableRow key={ticket.id} ticket={ticket} onClick={handleTicketClick} />
            ))}
          </tbody>
        </table>
      </div>
      {selectedTicket && <TicketDetail ticket={selectedTicket} onClose={handleCloseDetail} />}
    </div>
  );
};

export default TicketList;
