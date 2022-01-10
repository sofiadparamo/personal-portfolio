import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom";
import Navigation from "./components/Common/Navigation";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <Router>
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={"/"} element={(<Home/>)}/>
                <Route path={"/projects/"} element={(<Navigate to={"/"} replace />)}/>
                <Route path={"/projects/:id"} element={(<ProjectPage/>)}/>
            </Routes>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
