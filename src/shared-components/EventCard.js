// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, onRegister }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-start">
      <img src={event.eventLogo} alt={event.eventName} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{event.eventName}</h3>
      <p className="text-gray-700">{event.eventType}</p>
      <p className="text-gray-500">From: {new Date(event.startDate).toLocaleDateString()}</p>
      <p className="text-gray-500">To: {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Head: {event.eventHead}</p>
      <p className="text-gray-600">Phone: {event.phoneNumber}</p>
      <p className="text-gray-600">Contact: {event.contactEmail}</p>
      <button
        onClick={() => onRegister(event)}
        className="mt-4 bg-primary-700 text-white px-4 py-2 rounded hover:bg-primary-600"
      >
        Register Event
      </button>
    </div>
  );
};

export default EventCard;
