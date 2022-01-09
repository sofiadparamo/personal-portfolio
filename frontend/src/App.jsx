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
        <div className={"entries-container"}>
            <Entry
                title={"HiTec Student Groups Quiz"}
                description={"A web quiz for first-year students to meet the student groups at the university."}
                image={"images/hitec.png"}
                id={"hitec"}
            />
            <Entry
                title={"Hiring Management System"}
                description={"Web application to manage candidates in various stages of a company. Built at Tec de Monterrey."}
                image={"images/hiring.png"}
                id={"hiring"}
            />
            <Entry
                title={"Pedagog"}
                description={"Educational platform powered with OpenAI for TreeHacks Stanford University Hackathon"}
                demo={"https://www.youtube.com/watch?v=FovBurrPZOU"}
                code={"https://github.com/ahiraaam/treehacks-pedagog"}
                image={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/396/000/datas/gallery.jpg"}
                id={"pedagog"}
            />
            <Entry
                title={"Computer Vision Project"}
                description={"Image convolution and face recognition project"}
                code={"https://github.com/SweetSofiMC/Convolution"}
                image={"https://github.com/SweetSofiMC/Convolution/raw/master/Examples/ui.gif"}
                id={"opencv"}
            />
        </div>
    </div>
  );
}

export default App;
