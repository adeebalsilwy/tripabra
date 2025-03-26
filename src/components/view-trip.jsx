import React from 'react';

const ViewTrip = ({ tripData }) => {
  if (!tripData) {
    return (
      <div>
        <h1>No Trip Data Available</h1>
        <p>Please create a trip first.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>View Trip</h1>
      <p><strong>Destination:</strong> {tripData.destination}</p>
      <p><strong>Start Date:</strong> {tripData.startDate}</p>
      <p><strong>End Date:</strong> {tripData.endDate}</p>
      <p><strong>Activities:</strong> {tripData.activities.join(', ')}</p>
    </div>
  );
};

export default ViewTrip;
