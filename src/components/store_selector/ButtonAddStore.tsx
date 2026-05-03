import "./SelectedStore.css";
import { useTranslation } from "react-i18next";

interface Props {
    onClick: ()=>void;
}

export default function ButtonAddStore( {onClick} :Props ) {
    const { t } = useTranslation();

    return(
	<button onClick={()=>onClick()} className="button add-store">{t("addStore")}</button>
    );
}
