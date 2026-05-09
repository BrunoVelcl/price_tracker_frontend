import "./DialogButtons.css"
import SvgCheck from "../../assets/Check"  

interface Props {
    onClick(): () => void;
}

export default function DialogAcceptButton( { onClick }: Props ) {
    return (
	<button className="dialog accept" onClick={()=>onClick()}>
	    <SvgCheck />
	</button>
    );
}
