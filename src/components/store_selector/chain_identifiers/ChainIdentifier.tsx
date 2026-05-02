import "./ChainIdentifier.css"
import { type Chain } from "../../../types/api.ts"

interface Props {
    chain: Chain;
}

export default function ChainIdentifier( { chain }: Props ) {

    const baseClassName = "chain-identifier";
    const chainClassName = `${baseClassName} ${chain.toLowerCase()}-identifier`;

    return(
	<section className={chainClassName}>{chain}</section>
    );
}
