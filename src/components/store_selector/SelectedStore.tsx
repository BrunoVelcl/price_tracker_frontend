import "./SelectedStore.css"
import { type Store } from "../../types/api.ts"
import ButtonRemove from "./ButtonRemove.tsx";
import ChainIdentifier from "./chain_identifiers/ChainIdentifier.tsx"
import { useTranslation } from "react-i18next";

interface Props {
    store: Store;
    onClick: ( id: number) => void;
}

export default function SelectedStore( { store, onClick }: Props ) {
    const { t } = useTranslation();
    
    const clickHandler = () => {
	onClick(store.id);
	console.log("CLICKED");
    }

    return (
	<article className="selected-store">
	    <ChainIdentifier chain={store.chain} />
	    <section className="store-address">{store.address}</section>
	    <ButtonRemove onClick={clickHandler}>{t("remove")}</ButtonRemove>
	</article>
    );
}
