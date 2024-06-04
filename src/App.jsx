import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="title">
        <h1>Weather</h1>
      </div>
      <Body />
      <Footer />
    </>
  );
}

export default App;

// npm start
// npx json-server -p3100 -w src/db/coordinates.json
