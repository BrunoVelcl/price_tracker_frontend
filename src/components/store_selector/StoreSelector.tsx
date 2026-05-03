import "./StoreSelector.css"
import { type Store, type Searchable } from "../../types/api.ts" 
import { useRef, useState } from "react"
import Arrow from "../../assets/Arrow.tsx"
import SelectedStore from "./SelectedStore.tsx"
import ButtonAddStore from "./ButtonAddStore.tsx"
import SearchDialog from "../SearchDialog.tsx"

interface Props {
    selectedStores?: Array<number>;
    availableStores?: Array<Store>;

}

export default function StoreSelector ( {selectedStores, availableStores}: Props) {
    if(!selectedStores || !availableStores) {return}

    const [isOpen, setIsOpen] = useState(false);

    const closedDrawerClassName = "store-selector-button";
    const closedSurfaceClassName = "store-selector-surface"
    const menuOpen = "menu-open";
    const openDrawerClassName = closedDrawerClassName + " " + menuOpen;
    const openSurfaceClassName = closedSurfaceClassName + " " + menuOpen; 

    const drawStoreSelector = () => {
	return (
	    <section className={isOpen ? openSurfaceClassName : closedSurfaceClassName}>
	    <ButtonAddStore onClick={()=>toggleStoreSearchDialog(storeSearchDialogRef)}/>
	    </section>	
	);
    }

    const searchArray = storesToSearchable(availableStores, selectedStores);
    const storeSearchDialogRef = useRef<HTMLDialogElement>(null);
    const drawStoreSearchDialog = () => {
	return(
	    <dialog id="store-search-dialog" ref={storeSearchDialogRef}>
		<SearchDialog 
		    items={searchArray}
		    alreadySelected={selectedStores}
		    closeHandler={()=>toggleStoreSearchDialog(storeSearchDialogRef)}
		/>
	    </dialog>
	);
    }

    return(
	<>
	    <article id="store-selector">
		{drawStoreSelector()}
		<button className={isOpen ? openDrawerClassName : closedDrawerClassName} onClick={() => setIsOpen(!isOpen)}><Arrow direction={isOpen ? "left" : ""}/></button>
	    </article>
		{drawStoreSearchDialog()}
	</>
    );
}

function toggleStoreSearchDialog( ref: {current: HTMLDialogElement | null} ) {
    if(!ref.current) {return}
    const dialog = ref.current;
    dialog.open ? dialog.close() : dialog.showModal();
}

function storesToSearchable(stores: Array<Store>, alreadySelected?: Array<number>) {
    const items: Searchable[] = [];
    for (var i = 0; i < stores.length; i++) {
	if(i !== stores[i].id) {continue} //TODO: Temp guard for huge backend bug
	const id = stores[i].id;
	const text = stores[i].chain + " " +  stores[i].address;
	var selected = false;
	if(alreadySelected){
	    selected = isIdInAlreadySelected(stores[i].id, alreadySelected); 
	}
	items.push({id:id, text:text, selected:selected})
    }
    return items;
}

function isIdInAlreadySelected ( id: number, alreadySelected: Array<number>) {
    for( var existing of alreadySelected) {
	if(id === existing) {
	    return true;
	}
    }
    return false;
}
