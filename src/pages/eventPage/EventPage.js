// src/pages/EventsPage.js
import React, { useEffect, useState } from "react";
import { getSheetDBData } from "../../dummyData/sheetDb/sheetDb";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import CircularProgressIndicator from "../../shared-components/CircularProgressIndicator";
import { eventsData } from "../../dummyData/eventData";
import { CustomCard } from "../../shared-components/CustomCard";
import EventList from "./EventList";
import EventRegister from "./EventRegister";



const EventsPage = () => {
    const [state, setState] = useState(true)
    return (
        <div className="container min-h-screen-minus-50px mx-auto p-4">
            <div className="cursor-pointer">
                <span onClick={()=>setState(true)} className={`${state ? `text-white-700 bg-primary-700` : `text-black-700 bg-white-700`} ml-4 p-2 px-4` }>Event List</span> 
                <span onClick={()=>setState(false)}  className={`${!state ? `text-white-700 bg-primary-700` : `text-black-700 bg-white-700`} ml-4 p-2 px-4`}>Holidays</span></div>
            {state ? <EventList /> :
                <EventRegister />

            }
        </div>
    );
};

export default EventsPage;
