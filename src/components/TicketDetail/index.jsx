import React, { useState } from 'react';
import { handleStatusChange } from "../../services/api";
import { useMain } from "../../context";

const TicketDetail = ({ ticket, onClose }) => {
  const [status, setStatus] = useState(ticket.status);
  const { getTickets } = useMain();

  const toggleStatus = async () => {
    const newStatus = status === 'Aberto' ? 'Fechado' : 'Aberto';
    await handleStatusChange(ticket.id, newStatus);
    await getTickets();
    setStatus(newStatus);
  };

  const StatusBadge = ({ status }) => (
    <span className={`font-medium ${status === 'Aberto' ? 'text-green-500' : 'text-red-500'}`}>
      {status}
    </span>
  );

  const MessageHistory = ({ history }) => (
    <ul className="space-y-2 mt-3">
      {history.map((item, index) => (
        <li key={index} className="border-b border-gray-200 pb-2">
          <p className="text-sm">
            <strong>{item.from}: </strong>{item.msg}
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Detalhes do Ticket</h2>

        <p className="mb-2">
          <strong>Cliente:</strong> {ticket.customer}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg">Histórico de Mensagens</h3>
          <MessageHistory history={ticket.historic} />
        </div>

        <p className="mb-2">
          <strong>Última Mensagem:</strong> {ticket.historic[ticket.historic.length - 1]?.msg}
        </p>

        <p className="mb-4">
          <strong>Status: </strong>
          <StatusBadge status={status} />
        </p>

        <div className="flex justify-between">
          <button
            onClick={toggleStatus}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            {status === 'Aberto' ? 'Fechar Ticket' : 'Reabrir Ticket'}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
