import React from "react";
import {createRoot} from "react-dom/client"
import NavBar from "./NavBar";
import Home from "./Home";
import FitOut from "./FitOut";
import {HashRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Architecture from "./Architecture";
import Design from "./Design";
import Land from "./Land";
import Contracting from "./Contracting";
function App() {
return(
    <>
        < HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/architecture" element={<Architecture/>}/>
                <Route path="/design" element={<Design/>}/>
                <Route path="/land" element={<Land/>}/>
                <Route path="/fit" element={<FitOut/>}/>
                <Route path="/Contracting" element={<Contracting/>}/>
            </Routes>
        </HashRouter>
        </>
)
}
createRoot(document.getElementById("root")).render(<App/>)
