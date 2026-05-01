import { type Direction } from "./../types/direction.ts"

interface Props {
    direction: Direction;
}

export default function Arrow ({direction}: Props) {

    const angle = () => {
	switch(direction) {
	    case "up": return 270;
	    case "down": return 90;
	    case "left": return 180;
	    case "right": return 0;
	}
    }
    const transform = `rotate(${angle()}, 16, 16)`;
    return (
	<>
	    <svg fill="#000000" width="80px" height="80px" viewBox="0 0 32 32">
		<path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" transform={transform}></path>
	    </svg>
	</>
    );
}
