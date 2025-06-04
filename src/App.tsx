// src/App.tsx
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import RecipePage from "./components/RecipePage.tsx";
import Recipes from "./pages/Recipes.tsx";
import AddRecipe from "./pages/AddRecipe";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
            </Routes>
            <br /><br />
        </>
    );
}

export default App;