import "../scss/navbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Navbar({ menuIsVisible, setMenuIsVisible }) {
    return (
        <div className={"navbar " + (menuIsVisible && "active")}>
            <div className="wrapper">
                <section className="left">
                    <div
                        className="hamburger"
                        onClick={() => setMenuIsVisible(!menuIsVisible)}
                    >
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                </section>

                <section className="right">
                    <div className="items">
                        <Person className="icon" />
                        <span>+49 152 51322 31</span>
                    </div>
                    <div className="items">
                        <Mail className="icon" />
                        <span>ahmad@icloud.com</span>
                    </div>
                    <a href="#intro" className="logo">
                        @logo
                    </a>
                </section>
            </div>
        </div>
    );
}
