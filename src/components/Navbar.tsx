import "./Navbar.css";
import Logo from "./../assets/monochrome_logo";
import ProfileIcon from "./../assets/profile_icon"

export default function Navbar() {
    return (
	<>
	    <nav>
		<section>
		    <Logo />
		    <a href=""><h1>Shoping Lista</h1></a>
		</section>
		<section>
		    <a className="nav-button" href="">Login</a>
		    <a className="nav-button" href="">Register</a>
		    <a className="nav-button" href="">List</a>
		    <a className="nav-button" href=""><ProfileIcon /></a>
		</section>
	    </nav>
	</>
    );
}


