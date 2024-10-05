import React from 'react';

const TableRow = ({ ticket, onClick }) => <tr
  key={ticket.id}
  onClick={() => onClick(ticket)}
  className="hover:bg-gray-100 cursor-pointer"
>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-medium text-gray-900">{ticket.customer}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-700">{ticket.historic[ticket.historic.length - 1]?.msg}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <span className={`text-sm font-medium ${ticket.status === 'Aberto' ? 'text-green-500' : 'text-red-500'}`}>
      {ticket.status}
    </span>
  </td>
</tr>;

export default TableRow;
