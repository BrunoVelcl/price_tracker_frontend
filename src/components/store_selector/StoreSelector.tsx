import "./StoreSelector.css"
import { type Store, type Searchable } from "../../types/api.ts" 
import { useRef, useState } from "react"
import Arrow from "../../assets/Arrow.tsx"
import SelectedStore from "./SelectedStore.tsx"
import ButtonAddStore from "./ButtonAddStore.tsx"
import SearchDialog from "../SearchDialog.tsx"

interface Props {
    selectedStores?: Set<number>;
    availableStores: Array<Store>;

}

export default function StoreSelector ( {selectedStores, availableStores}: Props) {
    if(availableStores.length < 1 ) {return}

    const [isOpen, setIsOpen] = useState(false);

    const [ storeFilter, setStoreFilter ] = useState(storesToSearchable(availableStores, selectedStores));
    const storeFilterHandler = (id: number) => {
	setStoreFilter( (storeFilter) =>
	    storeFilter.map(store => {
		return (store.id === id) ? { ...store, selected: !store.selected } : store;
	    })
	);
    }

    const [ selectedIds, setSelectedIds ] = useState<Set<number>>(
	new Set(selectedStores ?? []));
    const selectedIdsHandler = (newItems: Set<number>) => {
	setSelectedIds(new Set([...selectedIds, ...newItems]));
    }

    const closedDrawerClassName = "store-selector-button";
    const closedSurfaceClassName = "store-selector-surface"
    const menuOpen = "menu-open";
    const openDrawerClassName = closedDrawerClassName + " " + menuOpen;
    const openSurfaceClassName = closedSurfaceClassName + " " + menuOpen; 

    const removeStoreHandler = (id:number) => {
	setSelectedIds(prev => {
	    const next = new Set(prev);
	    next.delete(id);
	    return next;
	})
	storeFilterHandler(id);
    }

    const drawStores = () => {
	const stores: Array<Store> = [];
	selectedIds.forEach(id=>stores.push(availableStores[id]));
	return(
	    <>
		{stores.map(store=><SelectedStore key={"selectedStore-" + store.id} onClick={removeStoreHandler} store={store} />)}
	    </>
	);
    }

    const drawStoreSelector = () => {
	return (
	    <section className={isOpen ? openSurfaceClassName : closedSurfaceClassName}>
		{drawStores()}
		<ButtonAddStore onClick={()=>toggleStoreSearchDialog(storeSearchDialogRef)}/>
	    </section>	
	);
    }

    const storeSearchDialogRef = useRef<HTMLDialogElement>(null);
    const drawStoreSearchDialog = () => {
	return(
	    <dialog id="store-search-dialog" ref={storeSearchDialogRef}>
		<SearchDialog 
		    items={storeFilter}
		    setItemsCallback={storeFilterHandler}
		    alreadySelected={selectedIds}
		    alreadySelectedCallback={selectedIdsHandler}
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

function storesToSearchable(stores: Array<Store>, alreadySelected?: Set<number>) {
    const items: Searchable[] = [];
    for (var i = 0; i < stores.length; i++) {
	if(i !== stores[i].id) {continue} //TODO: Temp guard for huge backend bug
	const id = stores[i].id;
	const text = stores[i].chain + " " +  stores[i].address;
	var selected = false;
	if(alreadySelected){
	    selected = alreadySelected.has(stores[i].id); 
	}
	items.push({id:id, text:text, selected:selected})
    }
    return items;
}
