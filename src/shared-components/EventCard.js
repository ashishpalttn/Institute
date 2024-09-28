// src/components/EventCard.js
import React from 'react';

const GetStatusWithColor = ({event, isLive, isUpcomming, isClosed})=>{
  return(
    <div className="flex items-center">
  <span className="mr-2">Event Status:</span>
  <div className="flex items-center">
    <div
      className={`w-4 h-4 rounded-full mx-1 ${
        isLive
        ? 'bg-green-700 '
        : isUpcomming
        ? 'bg-yellow-500'
        : isClosed
        ? 'bg-red-700'
        : 'bg-gray-400'
      }`}
      aria-label={`Event status is ${event.eventStatus}`} // Accessibility improvement
    ></div>
    <span
      className={`text-gray-600 px-1 font-bold rounded-sm ${
          isLive
          ? 'text-green-700 '
          : isUpcomming
          ? 'text-yellow-500'
          : isClosed
          ? 'text-red-700'
          : 'text-gray-400' // Default text color if status is neither
      }`}
    >
      {isLive ? 'Live...' : isUpcomming ? 'Coming soon...' : isClosed? 'Closed' :'Unknown Status'}
    </span>
  </div>
</div>

  )
}

const EventCard = ({ event, onRegister }) => {

  const currentDate = new Date();
  const startDate = new Date(event.startDate);
  const newStartDate = new Date(startDate.getTime() - (5 * 60 * 60 * 1000) - (30 * 60 * 1000));


  const endDate = new Date(event.endDate);
  const newEndDate = new Date(endDate.getTime() + (18 * 60 * 60 * 1000) + (30 * 60 * 1000));

  const isLive = event.eventStatus==='live' && currentDate >= startDate && currentDate <= newEndDate;
  const isUpcomming = currentDate <= newStartDate;
  const isClosed = currentDate > newEndDate;

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-start">
      <img src={event.eventLogo} alt={event.eventName} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{event.eventName}</h3>
      <p className="text-gray-700">{event.eventType}</p> 
      <p className="text-gray-500">From: {new Date(event.startDate).toLocaleDateString()}</p>
      <p className="text-gray-500">To: {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Event Head: {event.eventHead}</p>
      <p className="text-gray-600">Phone: {event.phoneNumber}</p>
      <p className="text-gray-600">Contact: {event.contactEmail}</p>
      <p className="text-gray-600">Fee: {event.fee?event.fee:0}</p>

      <GetStatusWithColor event={event} isLive={isLive} isUpcomming={isUpcomming} isClosed={isClosed}/>
      <button
          onClick={() => isLive && onRegister(event)}
          className={`mt-4 px-4 py-2 rounded text-white ${
            isLive
              ? 'bg-primary-700 hover:bg-primary-600 cursor-pointer' // Enabled styles
              : 'bg-gray-400 cursor-not-allowed' // Disabled styles
          }`}
          disabled={isUpcomming} // Disable when status is 'upcomming'
        >
          Register Event
        </button>   
    </div>
  );
};
export default EventCard;
