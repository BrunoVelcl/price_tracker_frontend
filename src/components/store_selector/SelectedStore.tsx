import "./SelectedStore.css"
import { type Store } from "../../types/api.ts"
import ButtonRemove from "./ButtonRemove.tsx";
import ChainIdentifier from "./chain_identifiers/ChainIdentifier.tsx"
import { useTranslation } from "react-i18next"
import { useState } from "react"

interface Props {
    store: Store;
    onClick: ( id: number) => void;
}

export default function SelectedStore( { store, onClick }: Props ) {
    const { t } = useTranslation();
   
    const [ isExiting, setIsExiting ] = useState(false);
    const baseClass = "selected-store";

    const clickHandler = async () => {
	setIsExiting(true);
	await sleep(300);
	onClick(store.id);
    }

    return (
	<article className={isExiting ? baseClass + " exit" : baseClass}>
	    <ChainIdentifier chain={store.chain} />
	    <section className="store-address">{store.address}</section>
	    <ButtonRemove onClick={clickHandler}>{t("remove")}</ButtonRemove>
	</article>
    );
}

function sleep(ms: number) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}
