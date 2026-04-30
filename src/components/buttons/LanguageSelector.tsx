import { useState } from "react";
import CroatianFlag from "../../assets/croatian_flag"; 
import BritishFlag from "../../assets/british_flag";
import { changeLanguage } from "i18next";

const languages = [
    {short: "hr", svg: CroatianFlag},
    {short: "en", svg: BritishFlag},
]

export default function LanguageSelector() {

    const [isPressed, setIsPressed] = useState(false);
    const [langIndex, setLangIndex] = useState(0);

    const buttonClass = "lang-button";
    const selectButtonClass = buttonClass + " " + "select-button";

    const changeLangHandler = (index: number) => {
	setIsPressed(false);
	setLangIndex(index);
	changeLanguage(languages[index].short);
    }

    return(
	<>
	    { (isPressed) && languages.map((Lang, index) => {
		if(index !== langIndex){
		    return (
			<button
			key={"langButton" + index}
			className={selectButtonClass} 
			onClick={() => changeLangHandler(index)}
			>
			    {Lang.svg()}
			</button>
		    );
		}})
	    }	     
	    <button className={buttonClass} onClick={() => setIsPressed(true)}>{languages[langIndex].svg()}</button>	
	</>
    );
}

