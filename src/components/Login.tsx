import './Login.css'
import './buttons/buttons.css'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const schema = z.object({
    email: z.email("Unesite važeći email"),
    password: z.string().min(8, "Lozinka mora sadržavati barem 8 znakova"),
});


type FormFields = z.infer<typeof schema>;

export default function Login() {
    const { 
	register, 
	handleSubmit, 
	formState: {errors},
	} = useForm<FormFields>(
	    {resolver: zodResolver(schema),}
	);

    const onSubmit: SubmitHandler<FormFields> = (data) => {
	setIsLogingIn(prev => !prev);
	console.log(data); //TODO: API call
    }

    const [isLogingIn, setIsLogingIn] = useState(false);
    const baseClass = "login-form";
    const activeClass = baseClass + " " + " active";

    return (
	<>
	    <div 
	    className="animate-on-navigation"
	    >
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
		    placeholder="Email"
		    />
		    {errors.email && <div className="error-message">{errors.email?.message}</div>}
		</div>
		<div className="form-field">
		    <input 
		    {...register("password")} 
		    disabled={isLogingIn} 
		    onClick={e => e.stopPropagation()}
		    placeholder="Lozinka"
		    />
		    {errors.password && <div className="error-message">{errors.password?.message}</div>}
		</div>
		{/*Hidden button to enable keyboard submisions*/}
		<button type="submit" style={{display: "none"}} />
		<span>Prijavi se</span>
		<a className="button push" href="" onClick={e => e.stopPropagation()}>Registracija</a>
	    </form>
	    </div>
	    </>
    );
}
