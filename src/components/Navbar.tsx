import "./Navbar.css";
import Logo from "./../assets/monochrome_logo";
import ProfileIcon from "./../assets/profile_icon";
import HamburgerButton from "./buttons/hamburger";
import { useState } from "react";
import { createPortal } from "react-dom";

const navButtons = [
    ["Login", "#"],
    ["Register", "#"],
    ["List", "#"]
];

export default function Navbar() {

    const [hamburgerIsPressed, setHamburgerIsPressed] = useState(false); 
    return (
	<>
	    <nav>
		<section>
		    <Logo />
		    <a href="#"><h1>Shoping Lista</h1></a>
		</section>
		<section>
		    {getNavButtons()}
		    <a className="nav-button profile-icon" href="#"><ProfileIcon /></a>
		    <HamburgerButton isPressed={hamburgerIsPressed} clickHandler={()=>{setHamburgerIsPressed(prev => !prev)}}/>
		    { hamburgerIsPressed && createPortal(
			<div className="mobile-menu">{getNavButtons()}</div>, document.getElementById("mobile-nav-portal") ?? document.body)}
		</section>
	    </nav>
	    <div id="mobile-nav-portal"></div>
	</>
    );
}

function getNavButtons() {
   return navButtons.map((item, index) => 
			<a key={index} className="nav-button" href={item[1]}>{item[0]}</a>
		    )
}


