import "./SelectedStore.css";
import { useTranslation } from "react-i18next";

export default function ButtonAddStore() {
    const { t } = useTranslation();

    return(
	<button className="button add-store">{t("addStore")}</button>
    );
}
