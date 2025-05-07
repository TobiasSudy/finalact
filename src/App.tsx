import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Recipe1 from "./pages/Recipe1.tsx";
import Recipe2 from "./pages/Recipe2.tsx";
import Recipes from "./components/Recipes.tsx";
import Recipe3 from "./pages/Recipe3.tsx";

function App() {


  return (
    <>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipe1" element={<Recipe1 />} />
              <Route path="/recipe2" element={<Recipe2 />} />
              <Route path="/recipe3" element={<Recipe3/>}/>
              <Route path="/recipes" element={<Recipes />} />
          </Routes>
        <br/><br/>
    </>
  )
}

export default App
