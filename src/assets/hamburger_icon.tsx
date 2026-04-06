export default function HamburgerIcon() {
    return (
	<>
	    <svg width="32" height="32" version="1.1" viewBox="0 0 32 32">
		<rect x="2" y="2" width="28" height="28" rx="5" ry="5" fill="none" stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="100" strokeWidth="2"/>
		<rect id="rect3" x="7" y="7" width="18" height="3" rx="1" stroke="currentColor" fill="currentColor" strokeLinejoin="round" strokeMiterlimit="100" strokeWidth=".1"/>
		<use id="use3" transform="translate(-1.8999e-7 7)" xlinkHref="#rect3"/>
		<use transform="translate(0,7)" xlinkHref="#use3"/>
	    </svg>
	</>
    );
}

