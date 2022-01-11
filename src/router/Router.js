import { Route, Routes } from "react-router-dom";
import Game from "../pages/game/Game";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import HowToPlay from "../pages/howtoplay/HowToPlay";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/game/:id" element={<Game/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/howtoplay" element={<HowToPlay/>}></Route>
        </Routes>
    )
}