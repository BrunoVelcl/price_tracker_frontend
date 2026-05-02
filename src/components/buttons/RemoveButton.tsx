import { type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function RemoveButton( { children }: Props ) {
    return (
	<button className="button remove">{children}</button>
    );
}
