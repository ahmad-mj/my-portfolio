import "./app.scss";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    console.log("menuIsVisible: ", menuIsVisible);
    console.log("setMenuIsVisible: ", setMenuIsVisible);
    return (
        <div className="app">
            <Navbar
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Menu
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
        </div>
    );
}

export default App;
