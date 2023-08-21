import { useEffect, useRef, useState } from "react";

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        })
      );
    }
  }, [ref, map]);

  const style = { width: "100%", height: "100%" };
  return <div ref={ref} style={style}></div>;
};

export default Map;
