import ExitAnimationLink from "../ExitAnimationLink";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface Props {
    anchorArray: Array<Array<string>>,
    onNavigation?: ()=> void,
}

export default function AnchorsFromTwoDimArray( { anchorArray, onNavigation } : Props ){
    const { t } = useTranslation();

    return (
	<>
	    {anchorArray.map((item, index) => 
		<ExitAnimationLink
		    to={item[1]} 
		    key={index} 
		    className="nav-button" 
		    onClick={onNavigation}>
			<motion.span
			    className="clickable-surface"
			    whileTap={{ scale: 0.8 }}
			    transition={{ type: "spring" }}
			>
			    {t(item[0])}
			</motion.span>
		</ExitAnimationLink>
	    )}
	</>
    )
}
