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
                const filteredData = data.filter(item=>item.eventStatus ==='live')
                const sortedData = getSortedData(filteredData);
                setSheetData(sortedData);
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
            navigate('/event-form',{state:{event}})
       }
      };

    const getSortedData = (data) => {
        const currentDate = new Date();

        const filteredData = data.sort((a, b) => {
            // Calculate start and end dates with time adjustments for event 'a'
            const startDateA = new Date(a.startDate);
            const newStartDateA = new Date(startDateA.getTime() - (5 * 60 * 60 * 1000) - (30 * 60 * 1000));
            const endDateA = new Date(a.endDate);
            const newEndDateA = new Date(endDateA.getTime() + (18 * 60 * 60 * 1000) + (30 * 60 * 1000));

            const isLiveA = a.eventStatus === 'live' && currentDate >= startDateA && currentDate <= newEndDateA;
            const isUpcomingA = currentDate <= newStartDateA;
            const isClosedA = currentDate > newEndDateA;

            // Calculate start and end dates with time adjustments for event 'b'
            const startDateB = new Date(b.startDate);
            const newStartDateB = new Date(startDateB.getTime() - (5 * 60 * 60 * 1000) - (30 * 60 * 1000));
            const endDateB = new Date(b.endDate);
            const newEndDateB = new Date(endDateB.getTime() + (18 * 60 * 60 * 1000) + (30 * 60 * 1000));

            const isLiveB = b.eventStatus === 'live' && currentDate >= startDateB && currentDate <= newEndDateB;
            const isUpcomingB = currentDate <= newStartDateB;
            const isClosedB = currentDate > newEndDateB;

            // Sorting logic
            if (isLiveA && !isLiveB) return -1;
            if (!isLiveA && isLiveB) return 1;
            if (isUpcomingA && !isUpcomingB) return -1;
            if (!isUpcomingA && isUpcomingB) return 1;
            if (isClosedA && !isClosedB) return -1;
            if (!isClosedA && isClosedB) return 1;

            return 0; 
        });
        return filteredData
    }

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
