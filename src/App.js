import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/characters/Characters";
import Books from "./pages/books/Books";
import Houses from "./pages/houses/Houses";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/books" element={<Books />} />
                <Route path="/houses" element={<Houses />} />
            </Routes>
        </Router>
    );
}

export default App;
