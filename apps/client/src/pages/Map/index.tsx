import { useEffect, useMemo, useState } from "react";
import { Title } from "components";
import { Wrapper } from "containers";

const offset = 0.001;

export const Map = () => {
  const [coords, setCoords] = useState([0, 0]);
  const [mapUrl, setMapUrl] = useState("");

  const geo = useMemo(() => navigator.geolocation, []);

  useEffect(() => {
    const interval = setInterval(getPosition, 1000);
    getPosition();
    return () => clearInterval(interval);
  }, []);

  const getPosition = () => {
    geo.getCurrentPosition((position) => {
      const { latitude: lat, longitude: long } = position.coords;
      const url = `https://www.openstreetmap.org/export/embed.html?bbox=${
        long - offset
      }%2C${lat - offset}%2C${long + offset}%2C${
        lat + offset
      }&amp;layer=mapnik&amp;marker=${lat}%2C${long}`;
      setCoords([lat, long]);
      setMapUrl(url);
      console.log(url);
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
      <iframe
        id="map"
        width="425"
        height="350"
        src={mapUrl}
        style={{ border: "1px solid black" }}
      ></iframe>
    </Wrapper>
  );
};
