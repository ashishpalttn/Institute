// src/pages/EventsPage.js
import React, { useEffect, useState } from "react";
import { getSheetDBData } from "../../dummyData/sheetDb/sheetDb";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import CircularProgressIndicator from "../../shared-components/CircularProgressIndicator";
import { eventsData } from "../../dummyData/eventData";
import { CustomCard } from "../../shared-components/CustomCard";



const EventsPage = () => {
    const [sheetData, setSheetData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getSheetDBData();
            console.log(data);
            if (Array.isArray(data)) {
                setSheetData(data);
            } else {
                setSheetData(eventsData);
            }
        };
        fetchData();
    }, []);

    const handleOnClick = (formUrl) => {
        window.location.href = formUrl;
    };
    const viewPortHeight = window.innerHeight;
    console.log(viewPortHeight);

    return (
        <div className="container min-h-screen-minus-50px mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Open Events</h1>
            {!sheetData ? (
                <CircularProgressIndicator />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sheetData?.map((event) => (
                        <CustomCard>
                        <div
                            onClick={() => handleOnClick(event.formUrl)}
                            key={event.id}
                            className="bg-white shadow-lg rounded-lg p-4"
                        >
                            <h2 className="text-xl font-semibold mb-2">{event.eventName}</h2>
                            <p className="text-gray-600">Start Date: {event.startDate}</p>
                            <p className="text-gray-600">End Date: {event.endDate}</p>
                            <div className="flex  mt-2 gap-2">
                                <p className="text-green-600 flex gap-2 font-bold">
                                  Event Status:
                                    {event.eventStatus === "open" ? <div className="flex gap-2"> 
                                    <div className="bg-green-700 w-3 h-3 mt-1.5 rounded-full"></div>
                                    <p className="text-green-700">Active</p>
                                    </div>
                                      :<p className="text-red-700">Closed</p>
                                    }
                                </p>
                              
                            </div>
                        </div>
                        </CustomCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventsPage;
