import axios from 'axios';

export const fetchTickets = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_HOST_API}tickets`);
        return response.data
    } catch (error) {
        console.error('Error fetching tickets:', error);
    } 
};

export const handleStatusChange = async (id: string, status: string) => {
    try {
      await axios.patch(`${import.meta.env.VITE_HOST_API}tickets/${id}/status`, {
        status: status === 'Aberto' ? 'Fechado' : 'Aberto',
      });
    } catch (error) {
      console.error('Error updating ticket status:', error);
    }
  };