import "./Navbar.css";
import Logo from "./../assets/monochrome_logo";
import ProfileIcon from "./../assets/profile_icon"

export default function Navbar() {
    return (
	<>
	    <nav>
		<section>
		    <Logo />
		    <h1>Shoping Lista</h1>
		</section>
		<section>
		    <a href="">Login</a>
		    <a href="">Register</a>
		    <a href="">List</a>
		    <ProfileIcon />
		</section>
	    </nav>
	</>
    );
}


