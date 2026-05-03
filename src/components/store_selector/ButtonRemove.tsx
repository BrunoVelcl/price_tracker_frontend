import { type ReactNode } from "react";
import "./StoreSelector.css";

interface Props {
    children: ReactNode;
}

export default function ButtonRemove( { children }: Props ) {
    return (
	<button className="button remove">{children}</button>
    );
}
