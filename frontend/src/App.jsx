import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home/>
        <Title title={"Projects I've Worked On"}/>
    </div>
  );
}

export default App;
