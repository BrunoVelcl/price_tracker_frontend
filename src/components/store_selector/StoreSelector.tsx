import "./StoreSelector.css"
import { type Store } from "../../types/api.ts" 
import { useState } from "react"
import Arrow from "../../assets/Arrow.tsx"
import SelectedStore from "./SelectedStore.tsx"
import ButtonAddStore from "./ButtonAddStore.tsx"

interface Props {
    selectedStores?: Array<number>; //TODO: temporary optional for visual testing, REMOVE
    availableStores?: Array<Store>; //TODO: temporary optional for visual testing, REMOVE

}

export default function StoreSelector ( {selectedStores, availableStores}: Props) {
    
    const [isOpen, setIsOpen] = useState(false);

    const closedDrawerClassName = "store-selector-button";
    const closedSurfaceClassName = "store-selector-surface"
    const menuOpen = "menu-open";
    const openDrawerClassName = closedDrawerClassName + " " + menuOpen;
    const openSurfaceClassName = closedSurfaceClassName + " " + menuOpen;
   
    const drawStoreSelector = () => {
	return (
	    <section className={isOpen ? openSurfaceClassName : closedSurfaceClassName}>
	    <ButtonAddStore />
	    </section>	
	);
    }

    return(
	<>
	    <article id="store-selector">
		{drawStoreSelector()}
		<button className={isOpen ? openDrawerClassName : closedDrawerClassName} onClick={() => setIsOpen(!isOpen)}><Arrow direction={isOpen ? "left" : ""}/></button>
	    </article>
	</>
    );
}
