import "./Navbar.css";
import Logo from "./../assets/monochrome_logo";
import ProfileIcon from "./../assets/profile_icon";
import HamburgerButton from "./buttons/hamburger";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

const navButtons = [
    ["Login", "#"],
    ["Register", "#"],
    ["List", "#"]
];

const iconReplacements = [["Moj profil", "#"], ["Link", "#"]];

export default function Navbar() {
    const [isActive, setIsActive] = useState(true);
    const scrollPos = useRef(0);

    useEffect(()=> {
	const scrollListener = () => {
	    const currentY = window.scrollY;
	    setIsActive(currentY < scrollPos.current || currentY < 9);
	    scrollPos.current = currentY;
	}

	window.addEventListener("scroll", scrollListener, {passive:true});
	return () => window.removeEventListener("scroll", scrollListener);
    }, [])

    const [hamburgerIsPressed, setHamburgerIsPressed] = useState(false); 
    return (
	<>
	    <motion.nav 
		initial={{ y: -30 }}
		animate={{ y: isActive ? 0 : "-100%" }}
		transition={{ duration: 0.5, ease:"easeOut" }}>
		<section>
		    <Logo />
		    <a href="#"><h1>Shoping Lista</h1></a>
		</section>
		<section>

		    {getNavButtons(navButtons)}

		    <a className="nav-button profile-icon" href="#"><ProfileIcon /></a>

		    <HamburgerButton 
			isPressed={hamburgerIsPressed} 
			clickHandler={()=>{setHamburgerIsPressed(prev => !prev)}}
		    />

		    { createPortal(
			<AnimatePresence mode="wait">
			    {hamburgerIsPressed && (
			    <motion.div 
			    className="mobile-menu"
			    initial={{ y: "-100%"}}
			    animate={{ y: 0 }}
			    exit={{ y: "-100%"}}
			    transition={{ duration: 0.5, ease:"easeIn"}}
				>
				{getNavButtons(navButtons, iconReplacements, ()=>{setHamburgerIsPressed(false)})}
			    </motion.div>)}
			</AnimatePresence>
			,
			document.getElementById("mobile-nav-portal") ?? document.body)
		    }

		</section>
	    </motion.nav>
	    <div id="mobile-nav-portal"></div>
	</>
    );
}

function getNavButtons(
    itemsToAlwaysRender: Array<Array<string>>, 
    itemsToRenderInMobile?: Array<Array<string>>,
    onNavigation?: () => void) {
	return (
	    <>
		{getAnchorsFromTwoDimArray(itemsToAlwaysRender, onNavigation=onNavigation)}
		{(itemsToRenderInMobile) && getAnchorsFromTwoDimArray(itemsToRenderInMobile, onNavigation)}
	    </>	
	)
}

function getAnchorsFromTwoDimArray(array: Array<Array<string>>, onNavigation?: ()=>void){
    return (
	<>
	    {array.map((item, index) => 
		<a 
		    key={index} 
		    className="nav-button" 
		    href={item[1]} 
		    onClick={onNavigation}>
			<motion.span
			    className="clickable-surface"
			    whileTap={{ scale: 0.8 }}
			    transition={{ type: "spring" }}
			>
			    {item[0]}
			</motion.span>
		</a>
	    )}
	</>
    )
}




