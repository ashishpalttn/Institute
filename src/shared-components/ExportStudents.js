import axios from 'axios';

const LiveEvents = ({ event }) => {
  const downloadExcel = async (eventName) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/export-students/${eventName}`, {
        responseType: 'blob', // Important for downloading files
      });
      
      // Create a URL for the Excel file and trigger a download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Students_${eventName}.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  return (
    <button onClick={() => downloadExcel(event.eventName)} className="mt-4 bg-primary-700 text-white px-4 py-2 rounded hover:bg-primary-600">
      Export Students
    </button>
  );
};
