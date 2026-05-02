import "./SelectedStore.css"
import { type Store } from "../../types/api.ts"
import RemoveButton from "./../buttons/RemoveButton"
import ChainIdentifier from "./chain_identifiers/ChainIdentifier.tsx"

interface Props {
    store: Store;
}

export default function SelectedStore( { store }: Props ) {
    return (
	<article className="selected-store">
	    <ChainIdentifier chain={store.chain} />
	    <section className="store-address">{store.address}</section>
	    <RemoveButton>Remove</RemoveButton>
	</article>
    );
}
