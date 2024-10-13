import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { holidays } from '../dummyData/holidaysData';

const Holidays = () => {
//   const [holidays, setHolidays] = useState([]);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Public Holidays</h1>
      <ul className="list-disc list-inside">
        {holidays.map(holiday => (
          <li key={holiday.id}>
            <span className="font-semibold">{holiday.name}</span> - {holiday.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Holidays;
