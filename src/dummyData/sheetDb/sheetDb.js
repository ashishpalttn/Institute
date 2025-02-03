const URL = 'https://sheetdb.io/api/v1/izktzdgb3mkkz?sheet=svmSheet1';

export const getSheetDBData = () => {
  return fetch(URL)
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
