import React from 'react';

const TableHeader = () => <thead className="bg-gray-100">
  <tr>
    {['Cliente', 'Última Mensagem', 'Status'].map((header) => (
      <th
        key={header}
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {header}
      </th>
    ))}
  </tr>
</thead>

export default TableHeader;
