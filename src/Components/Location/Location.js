import React from "react";
import "./Location.scss";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Location() {
  const position = { lat: 1.0900871974360196, lng: 104.03362323056103 };
  const [open, setOpen] = useState(false);

  return (
    <div className="containerLocation">
      <APIProvider apiKey="AIzaSyBfLwvY9WrZs7ZL8wqsEUV9484B-0q26TA">
        <div className="googleMap">
          <Map zoom={16} center={position} mapId={"6614e9cc025ebc8b"}>
            <AdvancedMarker
              position={position}
              onClick={() => setOpen(true)}
            ></AdvancedMarker>

            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>Visit us here!</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>

      <div className="containerTextLocation">
        <div className="textContact">CONTACT US</div>
        <div className="textLocation">
          PT. Anpro Solution <br />
          Jl. Jend. A. Yani Taman Niaga A-12 Batam – Indonesia 29444 <br />
          info@anprovisa.com
        </div>
        <div className="textWA">+62 812-6769-6668 (WA)</div>
      </div>
    </div>
  );
}
