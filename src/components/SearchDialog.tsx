import "./SearchDialog.css"
import { type Searchable } from "../types/api.ts"
import DialogCloseButton from "./buttons/DialogCloseButton.tsx"
import DialogAcceptButton from "./buttons/DialogAcceptButton.tsx"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import DisplaySearchable from "./DisplaySearchable.tsx"

interface Props {
    items: Array<Searchable>;
    setItemsCallback: (id: number) => void;
    alreadySelected: Set<number>;
    alreadySelectedCallback: (newItemIds: Set<number>) => void;
    closeHandler: () => void;
}

export default function SearchDialog( { items, setItemsCallback, alreadySelected, alreadySelectedCallback, closeHandler }: Props) {
    const { t } = useTranslation();

    const [ query, setQuery ] = useState("");

    const cancelHandler= () => {
	const currentlySelected :number[] = [];
	items.map((item) =>{
	    item.selected && !alreadySelected.has(item.id) && currentlySelected.push(item.id);
	});
	currentlySelected.map((id) => {
	    setItemsCallback(id);  //this is dumb, should make a second callback that builds the items array
	});
	closeHandler();
    }

    const confirmHandler = () => {
	const newItemIds: Set<number> = new Set();
	items.map(item => {
	    if(item.selected) {newItemIds.add(item.id)};
	}
	);
	alreadySelectedCallback(newItemIds);
	closeHandler();
    }

    return(
	<article className="search-dialog-window">
	    <DialogCloseButton onClick={()=>cancelHandler()} />
	    <DialogAcceptButton onClick={()=>confirmHandler()} />
	    <div className="search-dialog">
		<input 
		className="search-term"
		type="text"
		placeholder={t("searchStore")}
		value={query}
		onChange={(e)=>setQuery(e.target.value)}
	    />
		<ul>
		    {drawStores(query, items, setItemsCallback, alreadySelected)}
		</ul>
	    </div>
	</article>
    );
}

function drawStores(
    query: string, 
    items: Array<Searchable>, 
    setItemsCallback: (id: number) => void, 
    alreadySelected: Set<number>
) {
    return items.map((item)=>{
	if( !alreadySelected.has(item.id) && item.text.toLowerCase().includes(query.toLowerCase())){
	    return <DisplaySearchable key={"drawStores"+item.id} item={item} setItemCallback={setItemsCallback}/>
	}
    });
}

//function isItemInAlreadySelected( item: Searchable, selected: Set<number> ) {
//    for(var val of selected){
//	if(item.id === val){
//	    return true;
//	}
//    }
//    return false;
//} 
