import "./App.css";
import Map from "./components/map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function App() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "500px",
        }}
      >
        <Wrapper apiKey={import.meta.env.VITE_API_KEY!} render={render}>
          <Map></Map>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
