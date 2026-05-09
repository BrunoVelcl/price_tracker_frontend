import "./SearchDialog.css"
import { type Searchable } from "../types/api.ts"
import DialogCloseButton from "./buttons/DialogCloseButton.tsx"
import DialogAcceptButton from "./buttons/DialogAcceptButton.tsx"

interface Props {
    items: Array<Searchable>;
    alreadySelected: Array<number>;
    closeHandler: () => void;
}

export default function SearchDialog( { items, alreadySelected, closeHandler }: Props) {
    return(
	<article className="search-dialog-window">
	    <DialogCloseButton onClick={()=>closeHandler()} />
	    <DialogAcceptButton onClick={()=>closeHandler()} />
	    <div className="search-dialog">
		<input className="search-term" type="text" />
		{drawStores(items, alreadySelected)}
	    </div>
	</article>
    );
}

function drawStores(items: Array<Searchable>, alreadySelected: Array<number>) {
    return items.map((item)=>{
	if(!isItemInAlreadySelected(item, alreadySelected)){
	    return <address key={"drawStores"+item.id}>{item.text}</address>;
	}
    });
}

function isItemInAlreadySelected( item: Searchable, selected: Array<number> ) {
    for(var val of selected){
	if(item.id === val){
	    return true;
	}
    }
    return false;
} 
