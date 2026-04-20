import './Registration.css'
import './../components/buttons/buttons.css'
import './../components/PageContainer.css'
import { type SubmitHandler, type FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
    email: z.email("Unesite važeći email"),
    password: z.string()
	.min(8, "Lozinka mora sadržavati barem 8 znakova")
	.max(32, "Lozinka ne smije sadržavati više od 32 znaka"),
    passwordConfirmation: z.string().min(8).max(32),
}).refine((data) =>  data.password === data.passwordConfirmation, {
    message: "Lozinke moraju biti jednake",
    path: ["passwordConfirmation"],
});

type FormFields = z.infer<typeof schema>;

export default function Registration() {
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
	    <h1>Registracija</h1>
	    <form onSubmit={handleSubmit(onSubmit, onError)}>
		<div className="form-field">
		    <label htmlFor="email">Email</label>
		    <input {...register("email")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.email?.message}</div>
		</div>
		<div className="form-field">
		    <label htmlFor="password">Lozinka</label>
		    <input {...register("password")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.password?.message}</div>
		</div>
		<div className="form-field">
		    <label htmlFor="passwordConfirmatiom">Potvrdite Lozinku</label>
		    <input {...register("passwordConfirmation")} disabled={isSubmiting}/>
		    <div className="error-message">{errors.passwordConfirmation?.message}</div>
		</div>
		<button className='button call' disabled={isSubmiting} type="submit">Registriraj</button>
	    </form>
	</div>
    );
}
