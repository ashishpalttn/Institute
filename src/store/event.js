const EVENT_URL = `${process.env.REACT_APP_API_URL}/api/events`;

export const getEventData = () => {
  return fetch(EVENT_URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      return data;  // This will return the data to wherever this function is called
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return null;  // Handle errors as needed
    });
};
