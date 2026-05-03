import "./SelectedStore.css"
import { type Store } from "../../types/api.ts"
import ButtonRemove from "./ButtonRemove.tsx";
import ChainIdentifier from "./chain_identifiers/ChainIdentifier.tsx"
import { useTranslation } from "react-i18next";

interface Props {
    store: Store;
}

export default function SelectedStore( { store }: Props ) {
    const { t } = useTranslation();

    return (
	<article className="selected-store">
	    <ChainIdentifier chain={store.chain} />
	    <section className="store-address">{store.address}</section>
	    <ButtonRemove>{t("remove")}</ButtonRemove>
	</article>
    );
}
