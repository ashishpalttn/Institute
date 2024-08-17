// src/pages/EventsPage.js
import React, { useEffect, useState } from 'react';
import { getSheetDBData } from '../../dummyData/sheetDb/sheetDb';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const eventsData = [
    {
        "id": "1",
        "eventName": "Magic Show",
        "startDate": "28/08/2024",
        "endDate": "29/08/2024",
        "eventStatus": "open"
    },
    {
        "id": "2",
        "eventName": "Music Concert",
        "startDate": "30/08/2024",
        "endDate": "31/08/2024",
        "eventStatus": "open"
    }
];

const EventsPage = () => {
    const [sheetData , setSheetData] = useState()
    useEffect(() => {
        const fetchData = async () => {
          const data = await getSheetDBData();
          console.log(data);
          setSheetData(data); // Set the fetched data to state
        };
    
        fetchData();
      }, []);

    const handleOnClick = (formUrl) => {
    //    const formUrl = 'https://docs.google.com/forms/d/1jLR9L2pLJXYepb4ffC0iSKibM6mmnU8Pj64ZODs7ab8/edit'
       window.location.href= formUrl
    }
    //   if(sheetData){
    //     return (
    //         <Box sx={{ display: 'flex' }}>
    //           <CircularProgress />
    //         </Box>
    //       );
    //   }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Open Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sheetData?.map(event => (
                    <div onClick={()=>handleOnClick(event.formUrl)} key={event.id} className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">{event.eventName}</h2>
                        <p className="text-gray-600">Start Date: {event.startDate}</p>
                        <p className="text-gray-600">End Date: {event.endDate}</p>
                        <p className="text-green-600 font-bold mt-2">{event.eventStatus === 'open' && "Event Status: Open"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventsPage;
