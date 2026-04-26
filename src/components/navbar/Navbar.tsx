import './Navbar.css'
import Logo from './../../assets/monochrome_logo'
import ProfileIcon from './../../assets/profile_icon'
import HamburgerButton from './../buttons/Hamburger'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink } from 'react-router'
import ExitAnimationLink from './../ExitAnimationLink'
import AnchorsFromTwoDimArray from './AnchorsFromTwoDimArray' 

const navButtons = [
    ["loginButton", "/login"],
    ["Lorem", "/lorem"],
];

const iconReplacements = [["Moj profil", "/profile"]];

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
		transition={{ duration: 0.5, ease:"easeOut" }}
		>
		<div className="portal-anchor">
		<section>
		    <Logo />
		    <NavLink to="/" end><h1>Shoping Lista</h1></NavLink>
		</section>
		<section>

		    {getNavButtons(navButtons)}

		    <ExitAnimationLink to="/profile" className="nav-button profile-icon"><ProfileIcon /></ExitAnimationLink>

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
		</div>
		<div id="mobile-nav-portal"></div>
	    </motion.nav>
	</>
    );
}

function getNavButtons(
    itemsToAlwaysRender: Array<Array<string>>, 
    itemsToRenderInMobile?: Array<Array<string>>,
    onNavigation?: () => void) {
	return (
	    <>
		<AnchorsFromTwoDimArray anchorArray={itemsToAlwaysRender} onNavigation={onNavigation} />
		{(itemsToRenderInMobile) && <AnchorsFromTwoDimArray anchorArray={itemsToRenderInMobile} onNavigation={onNavigation} />
}
	    </>	
	)
}






