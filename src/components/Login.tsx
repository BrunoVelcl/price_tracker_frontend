import './Login.css'
import './buttons/buttons.css'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import ExitAnimationLink from './ExitAnimationLink'
import { useTranslation } from 'react-i18next'

const schema = z.object({
    email: z.email("enterValidEmail"),
    password: z.string().min(8, "passwordToShort"),
});


type FormFields = z.infer<typeof schema>;

export default function Login() {
    const { t } = useTranslation();

    const { 
	register, 
	handleSubmit, 
	formState: {errors},
	} = useForm<FormFields>(
	    {resolver: zodResolver(schema),}
	);

    const [isLogingIn, setIsLogingIn] = useState(false);
    const onSubmit: SubmitHandler<FormFields> = (data) => {
	setIsLogingIn(prev => !prev);
	console.log(data); //TODO: API call
    }

    const baseClass = "login-form";
    const activeClass = baseClass + " " + " active";

    return (
	<>
	    <div className="animate-on-navigation">
		<form
		onClick={handleSubmit(onSubmit)} 
		onSubmit={handleSubmit(onSubmit)} 
		className={isLogingIn ? activeClass : baseClass}
		>
		    <div className="form-field">
			<input 
			{...register("email")} 
			disabled={isLogingIn} 
			onClick={e => e.stopPropagation()} 
			placeholder={t("emailFieldLabel")}
			/>
			{errors.email && <div className="error-message">{errors.email?.message && t(errors.email.message)}</div>}
		    </div>
		    <div className="form-field">
			<input 
			{...register("password")} 
			disabled={isLogingIn} 
			onClick={e => e.stopPropagation()}
			placeholder={t("passwordFieldLabel")}
			/>
			{errors.password && <div className="error-message">{errors.password?.message && t(errors.password.message)}</div>}
		    </div>
		    {/*Hidden button to enable keyboard submisions*/}
		    <button type="submit" style={{display: "none"}} />
		    <span>{t("loginButton")}</span>
		    <ExitAnimationLink to="/registration" className="button push" >{t("registrationPageHeader")}</ExitAnimationLink>
		</form>
	    </div>
	    </>
    );
}
