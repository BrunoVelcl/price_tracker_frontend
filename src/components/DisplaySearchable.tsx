import "./DisplaySearchable.css"
import type { Searchable } from "../types/api"
import { useTranslation } from "react-i18next"
import SelectTickboxButton from "./buttons/SelectTickboxButton"

interface Props {
    item: Searchable;
    setItemCallback: (id: number) => void;
}

export default function DisplaySearchable( { item, setItemCallback }: Props ) {
    const { t } = useTranslation();
    return(
	<li>
	    <label>{item.text}</label>
	    <SelectTickboxButton item={item} onClick={()=>{setItemCallback(item.id)}}>{t((item.selected) ? "remove" : "select")}</SelectTickboxButton>
	</li>

    );
}
