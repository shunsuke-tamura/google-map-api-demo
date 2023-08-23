import { useEffect, useRef, useState } from "react";

const Map = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastSelectedFeature = useRef<any>(null);

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

  useEffect(() => {
    if (map) {
      map.data.loadGeoJson("./public/test2.geojson");
      map.data.setStyle((feature) => {
        let colorOpacity = 0;
        let strokeOpacity = 0.2;
        if (feature.getProperty("isSelected")) {
          colorOpacity = 0.5;
          strokeOpacity = 1;
        }
        return {
          fillColor: "red",
          fillOpacity: colorOpacity,
          strokeWeight: 2,
          strokeColor: "red",
          strokeOpacity: strokeOpacity,
        };
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      map.data.addListener("click", (event) => {
        console.log(event.feature.getProperty("NAME_JA"));
        event.feature.setProperty("isSelected", true);
        if (lastSelectedFeature.current) {
          lastSelectedFeature.current.setProperty("isSelected", false);
        }
        lastSelectedFeature.current = event.feature;
      });
    }
  }, [map]);

  const style = { width: "100%", height: "100%" };
  return <div ref={ref} style={style}></div>;
};

export default Map;
