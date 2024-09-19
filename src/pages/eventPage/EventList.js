// src/pages/EventList.js
import React, { useEffect, useState } from "react";
import { getSheetDBData } from "../../dummyData/sheetDb/sheetDb";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import CircularProgressIndicator from "../../shared-components/CircularProgressIndicator";
import { eventsData } from "../../dummyData/eventData";
import { CustomCard } from "../../shared-components/CustomCard";
import { getEventData } from '../../store/event';
import { useNavigate } from 'react-router-dom';
import EventCard from "../../shared-components/EventCard";


const EventList = () => {
    const [sheetData, setSheetData] = useState(null);
    const [backendData, setBackendData] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const data = await getEventData();
            // console.log(data);
            if (Array.isArray(data)) {
                setSheetData(data);
            } else {
                setBackendData(true)
                setSheetData(eventsData);
            }
        };
        fetchData();
    }, []);

    const handleOnClick = (formUrl) => {
        if (backendData) {
            window.location.href = formUrl;
        }
       else{
            navigate('/event-form')
       }
    };

    const handleRegister = (event) => {
        if (backendData) {
            window.location.href = event.formUrl;
        }
       else{
            navigate('/event-form')
       }
      };

    const viewPortHeight = window.innerHeight;
    console.log(viewPortHeight);

    return (
        <div className=" container min-h-screen-minus-50px  mx-auto p-4">
            {!sheetData ? (
                <CircularProgressIndicator />
            ) : (
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Live Events</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sheetData?.map((event) => (
                        <CustomCard>
                         <EventCard key={event.id} event={event} onRegister={handleRegister} />
                         </CustomCard>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default EventList;
