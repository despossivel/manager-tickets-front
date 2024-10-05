import React from 'react';

const Modal = ({ ticket, onClose, onUpdateStatus }) => {
  const handleStatusChange = (newStatus) => {
    onUpdateStatus(ticket.id, newStatus);
    onClose();
  };

  const StatusButton = ({ label, status, color }) => (
    <button
      className={`${color} text-white px-4 py-2 rounded hover:${color === 'bg-gray-300' ? 'bg-gray-400' : `${color}-600`}`}
      onClick={() => handleStatusChange(status)}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg font-bold mb-4">{ticket.cliente}</h2>
        <p className="mb-2">Última Mensagem: {ticket.ultimaMensagem}</p>
        <p className="mb-4">Status Atual: {ticket.status}</p>
        <div className="flex justify-between">
          <StatusButton label="Abrir" status="Aberto" color="bg-green-500" />
          <StatusButton label="Fechar" status="Fechado" color="bg-red-500" />
          <StatusButton label="Cancelar" status="" color="bg-gray-300" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
