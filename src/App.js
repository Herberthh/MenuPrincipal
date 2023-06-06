import Header from "./components/Header/Header";
import "./app.scss";
import AccContainer from "./components/AccContainer/AccContainer";
import Cities from "./components/Cities/Cities";
import Collection from "./components/Collections/Collection";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Cities />
      <AccContainer />
     
    </div>
  );
}

export default App;
