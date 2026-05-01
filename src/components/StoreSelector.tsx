import "./StoreSelector.css"
import { type Store } from "../types/api.ts" 
import { useState } from "react"
import Arrow from "../assets/Arrow.tsx"

interface Props {
    selectedStores?: Array<number>; //TODO: temporary optional for visual testing, REMOVE
    availableStores?: Array<Store>; //TODO: temporary optional for visual testing, REMOVE

}

export default function StoreSelector ( {selectedStores, availableStores}: Props) {
    
    const [isOpen, setIsOpen] = useState(false);

    return(
	<>
	    <div id="store-selector">
	    	{!isOpen && closedLayout()} 
	    </div>
	</>
    );
}

function closedLayout() {
   return <Arrow direction="right"/>;
}
