import "./ExitAnimationLink.css";
import { type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";


interface Props
 {
    to: string;
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export default function ExitAnimationLink({to, className, onClick, children}: Props) {
   const navigate = useNavigate();
   const location = useLocation();

   const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {

	e.stopPropagation();

       onClick?.();	

	if ( location.pathname === to ) {
	    return;
	}

	document.querySelector('.animate-on-navigation')?.classList.add('animate-exit');
    
	await new Promise(r => setTimeout(r, 500));
    
	navigate(to);
  }

  return <button type="button" className={className} onClick={handleClick}>{children}</button>
   
}

