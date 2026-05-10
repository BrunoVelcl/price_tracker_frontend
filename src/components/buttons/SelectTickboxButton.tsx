import type { Searchable } from "../../types/api"
import "./SelectTickboxButton.css"
import { type ReactNode } from "react"

interface Props {
    item: Searchable;
    children: ReactNode;
    onClick: () => void;
}

export default function( { item, children, onClick }: Props ) {

    const buttonBaseClass = "selectTickbox";
    const buttonClass = (item.selected) ? buttonBaseClass + " " + "active" : buttonBaseClass;

    return(
	<button className={buttonClass} onClick={()=>onClick()}>{children}</button>
    );
}
