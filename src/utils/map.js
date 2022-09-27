import { Button, Input } from "antd";
import axios from "axios";
import React, { useState, useContext } from "react";
import MapPicker from "react-google-map-picker";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/Context";

const DefaultLocation = { lat: 6.69662, lng: -1.68095 };
const DefaultZoom = 16;

const LocationPicker = () => {
  const navigate = useNavigate();

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [locationName, setLocationName] = useState("");
  const [zoom, setZoom] = useState(DefaultZoom);

  const { deliveryAddress, setDeliveryAddress } = useContext(AppContext);

  const getLocationName = async (lat, long) => {
    const data = await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8`
      )
      .catch((err) => console.log(err));

    console.log(data);
  };

  function handleChangeLocation(lat, lng) {
    setDeliveryAddress({ lat: lat, lng: lng });
    // console.log(deliveryAddress);
    // getLocationName(deliveryAddress.lat, deliveryAddress.lng);
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
        <Input
          type="text"
          disabled
          defaultValue={locationName}
          placeholder="Pick your Delivery location"
        />
        <Button type="ghost" onClick={handleResetLocation}>
          Reset Location
        </Button>
        <Button type="primary" onClick={() => navigate("/menu")}>
          Confirm Location
        </Button>
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

  button {
    margin: 10px 0;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default LocationPicker;
