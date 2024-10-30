import './App.css';
import {
    Routes,
    Route, Navigate,
    HashRouter
} from "react-router-dom";
import Navigation from "./components/Common/Navigation";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import Title from "./components/Home/Title";
import {useEffect} from "react";

function App() {

    let sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    useEffect( () => {
        const loadingContainer = document.getElementById('loading-container');
        const loadingIcon = document.getElementById('loading-icon');
        loadingContainer.classList.add('loaded');
        loadingIcon.classList.add('loaded');
        sleep(1000).then(r => {
            loadingContainer.remove();
            loadingIcon.remove();
        });
    }, [])

  return (
    <HashRouter>
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path={"/"} element={(<Home/>)}/>
                <Route path={"/projects/"} element={(<Navigate to={"/"} replace />)}/>
                <Route path={"/projects/:id"} element={(<ProjectPage/>)}/>
                <Route
                    path="*"
                    element={
                        <Title title={"Sorry :( - 404 not found."}/>
                    }
                />
            </Routes>
            <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
