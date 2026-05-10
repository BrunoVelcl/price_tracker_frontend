import { type ReactNode } from "react";
import "./StoreSelector.css";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export default function ButtonRemove( { children, onClick }: Props ) {
    return (
	<button onClick={()=>onClick()} className="button remove">{children}</button>
    );
}
