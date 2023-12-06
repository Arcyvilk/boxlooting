import { useEffect, useMemo, useState } from "react";
import L from "leaflet";

import { Title } from "components";
import { Wrapper } from "containers";
import styled from "styled-components";

export const Map = () => {
  const [coords, setCoords] = useState([0, 0]);
  const [map, setMap] = useState<L.Map>();
  const [youMarker, setYouMarker] = useState<L.Marker>();

  const geo = useMemo(() => navigator.geolocation, []);

  useEffect(() => {
    getPosition();
    const interval = setInterval(getPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!map && coords[0] && coords[1]) {
      const newMap = initializeMap(coords, 15);
      const newMarker = L.marker(L.latLng(coords[0], coords[1]), {
        icon: markerIcon,
      })
        .bindPopup("THIS IS YOU")
        .addTo(newMap);
      setMap(newMap);
      setYouMarker(newMarker);
    }
  }, [map, coords[0], coords[1]]);

  useEffect(() => {
    if (map) {
      map.setView(L.latLng(coords[0], coords[1]));
    }
  }, [map, coords[0], coords[1]]);

  const getPosition = () => {
    geo.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords([latitude, longitude]);
      youMarker?.setLatLng(L.latLng(latitude, longitude));
    });
  };

  return (
    <Wrapper>
      <Title title="Your real-time position" />
      <div>
        <span>
          {coords[0]}, {coords[1]}
        </span>
      </div>
      <StyledMap id="map" />
    </Wrapper>
  );
};

const markerIcon = L.icon({
  iconUrl: "https://cdn.arcyvilk.com/loot/marker-icon.png",
  shadowUrl: "https://cdn.arcyvilk.com/loot/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const initializeMap = (coords: number[], zoom: number) => {
  const map = L.map("map", {
    center: L.latLng(coords[0], coords[1]),
    zoom,
  });
  L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  // show the scale bar on the lower left corner
  L.control.scale({ imperial: false, metric: true }).addTo(map);

  return map;
};

const StyledMap = styled.div`
  width: 800px;
  height: 600px;
`;
