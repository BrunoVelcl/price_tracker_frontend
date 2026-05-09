import "./DialogButtons.css"
import SvgClose from "../../assets/Close"

interface Props {
    onClick: () => void;
}

export default function DialogCloseButton( { onClick }: Props ) {
    return(
	<button className="dialog close" onClick={()=>onClick()}>
	    <SvgClose />
	</button>
    );
}
