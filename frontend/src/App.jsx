import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Title from "./components/Title";
import Entry from "./components/Entry";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home/>
        <Title title={"Projects I've Worked On"}/>
        <Entry
            title={"Pedagog"}
            description={"Educational platform powered with OpenAI for TreeHacks Stanford University Hackathon"}
            demo={"https://www.youtube.com/watch?v=FovBurrPZOU"}
            code={"https://github.com/ahiraaam/treehacks-pedagog"}
            image={"https://pedagog.uc.r.appspot.com"}
            live
        />
    </div>
  );
}

export default App;
