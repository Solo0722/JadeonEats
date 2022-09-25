import { Button, Input } from "antd";
import React, { useState } from "react";

import MapPicker from "react-google-map-picker";
import styled from "styled-components";

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const LocationPicker = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <>
      <LocationDetails>
        <h2>Pick Your Delivery location</h2>
        <Button type="primary" onClick={handleResetLocation}>
          Reset Location
        </Button>
        <label>Latitute:</label>
        <Input type="text" value={location.lat} disabled />
        <label>Longitute:</label>
        <Input type="text" value={location.lng} disabled />
        <label>Zoom:</label>
        <Input type="text" value={zoom} disabled />
      </LocationDetails>

      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        mapTypeId="roadmap"
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </>
  );
};

const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 60%;
  margin: 0 auto;

  label {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default LocationPicker;
