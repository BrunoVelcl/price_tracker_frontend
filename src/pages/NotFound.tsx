import './NotFound.css'
import './../components/PageContainer.css'
import './../components/ExitAnimationLink.css'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const { t } = useTranslation();

    return (
	<>
	    <div id="not-found" className="resource-container animate-on-navigation">
		<h1>404</h1>
		<p>{t("pageDoesNotExist")}</p>
	    </div>
	</>
    );
}
