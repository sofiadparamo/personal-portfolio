import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navigation from "./components/Common/Navigation";
import Footer from "./components/Common/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={(<Home/>)}/>
            </Routes>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
