import './NotFound.css'
import './../components/PageContainer.css'
import './../components/ExitAnimationLink.css'

export default function NotFound() {
    return (
	<>
	    <div id="not-found" className="resource-container animate-on-navigation">
		<h1>404</h1>
		<p>Stranica ne postoji</p>
	    </div>
	</>
    );
}
