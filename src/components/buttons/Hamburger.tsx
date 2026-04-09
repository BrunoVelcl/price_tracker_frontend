import HamburgerIcon from "./../../assets/hamburger_icon";

interface Props  {
    isPressed: boolean;
    clickHandler: () => void;
}

const buttonInactive = "hamburger";
const buttonActive = buttonInactive + " isActive";

export default function HamburgerButton({isPressed, clickHandler} : Props) {
    
    return (
	<button 
	onClick={clickHandler} 
	className={(isPressed) ? buttonActive : buttonInactive }>
	    <HamburgerIcon />
	</button>
	);
}
