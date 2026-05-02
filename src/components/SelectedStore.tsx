import "./SelectedStore.css"
import { type Store } from "../types/api.ts"
import RemoveButton from "./buttons/RemoveButton"

interface Props {
    store: Store;
}

export default function SelectedStore( { store }: Props ) {
    return (
	<article className="selected-store">
	    <section className="chain-identifier">{store.chain}</section>
	    <section className="store-address">{store.address}</section>
	    <RemoveButton>Remove</RemoveButton>
	</article>
    );
}
