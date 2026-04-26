import './Registration.css'
import './../components/buttons/buttons.css'
import './../components/PageContainer.css'
import { type SubmitHandler, type FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


const schema = z.object({
    email: z.email("enterValidEmail"),
    password: z.string()
	.min(8, "passwordToShort")
	.max(32, "passwordToLong"),
    passwordConfirmation: z.string().min(8, "passwordToShort").max(32, "passwordToLong"),
}).refine((data) =>  data.password === data.passwordConfirmation, {
    message: "passwordMissmatch",
    path: ["passwordConfirmation"],
});

type FormFields = z.infer<typeof schema>;

export default function Registration() {

    const { t } = useTranslation();

    const {
	register,
	handleSubmit,
	setValue,
	formState: {errors},
    } = useForm<FormFields>(
	{resolver: zodResolver(schema),}
    );

    const [isSubmiting, setIsSubmiting] = useState(false);
    const onSubmit: SubmitHandler<FormFields> = (data) => {
	setIsSubmiting(true);
	console.log(data); //TODO: API call
    }

    const onError = (errors: FieldErrors<FormFields>) => {
	if(errors.passwordConfirmation){
	    setValue("passwordConfirmation", "");
	}
    }

    return (
	<div id="registration" className="resource-container animate-on-navigation">
	    <h1>{t("registrationPageHeader")}</h1>
	    <form onSubmit={handleSubmit(onSubmit, onError)}>
		<div className="form-field">
		    <label htmlFor="email">{t("emailFieldLabel")}</label>
		    <input {...register("email")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.email?.message && t(errors.email.message)}</div>
		</div>
		<div className="form-field">
		    <label htmlFor="password">{t("passwordFieldLabel")}</label>
		    <input {...register("password")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.password?.message && t(errors.password.message)}</div>
		</div>
		<div className="form-field">
		    <label htmlFor="passwordConfirmatiom">{t("passwordConfirmationFieldLabel")}</label>
		    <input {...register("passwordConfirmation")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.passwordConfirmation?.message && t(errors.passwordConfirmation.message)}</div>
		</div>
		<button className='button call' disabled={isSubmiting} type="submit">{t("registerButton")}</button>
	    </form>
	</div>
    );
}
