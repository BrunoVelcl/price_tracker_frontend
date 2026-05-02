import "./StoreSelector.css"
import { type Store } from "../types/api.ts" 
import { useState } from "react"
import Arrow from "../assets/Arrow.tsx"
import SelectedStore from "./SelectedStore.tsx"

/*Store for visuals*/
const testStore: Store = {id:5, address:"Placeholder Adresss 57 CityName", chain:"LIDL"};

interface Props {
    selectedStores?: Array<number>; //TODO: temporary optional for visual testing, REMOVE
    availableStores?: Array<Store>; //TODO: temporary optional for visual testing, REMOVE

}

export default function StoreSelector ( {selectedStores, availableStores}: Props) {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return(
	<>
	    <section id="store-selector">
		<button onClick={() => setIsOpen(!isOpen)}><Arrow direction={isOpen ? "left" : ""}/></button>
	    </section>
	    <SelectedStore store={testStore}/>
	</>
    );
}
