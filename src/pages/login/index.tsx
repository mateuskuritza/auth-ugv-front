import { FormEvent, HTMLInputTypeAttribute, useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFocus = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(true);
    };

    const handleBlur = (setState: React.Dispatch<React.SetStateAction<boolean>>, value: string) => () => {
        if (value === '') {
            setState(false);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Email:', email, 'Senha:', password);
        setLoading(false);
    };

    return (
        <div className='w-full h-screen flex flex-row'>
            <div className='flex-col w-full h-full bg-gray-300 items-center justify-center hidden lg:flex'>
                <img src="/logo-eric" alt="LOGO DO ERIC" />
                <div className='w-3/4 text-center mt-4'>
                    Kuritza, Mateus: Sistema desenvolvido da forma mais simples possível para realizarmos as atividades das aulas e obtermos as notas
                </div>
            </div>
            <div className='flex items-center justify-center w-full h-full px-8'>
                <p className='fixed right-4 top-2 ml-1 text-[12px] text-SecondTextColor'>Version 1.0</p>
                <form onSubmit={handleSubmit} className='rounded-md w-full max-w-xl'>
                    <div className='mb-6'>
                        <h2 className='text-white text-2xl font-bold'>Login</h2>
                        <p className='text-SecondTextColor'>Não possui uma conta?<a href='/register' className='font-bold'> Cadastre-se</a></p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <Input
                            label='Email'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            autoComplete="off"
                            onFocus={handleFocus(setEmailFocused)}
                            onBlur={handleBlur(setEmailFocused, email)}
                            focused={emailFocused} />
                        <Input
                            label='Senha'
                            type='password'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            autoComplete="off"
                            onFocus={handleFocus(setPasswordFocused)}
                            onBlur={handleBlur(setPasswordFocused, password)}
                            focused={passwordFocused} />
                    </div>
                    <button disabled={loading} type="submit" className='text-white bg-black w-full p-3 mt-11 rounded-md font-bold disabled:bg-opacity-70'>{loading ? "Carregando..." : "Entrar"}</button>
                    <p className='text-center text-SecondTextColor mt-3'>Esqueceu a senha? <a className='font-bold '>Acesse</a></p>
                </form>
            </div>
        </div>
    );
}

const Input: React.FC<{
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: HTMLInputTypeAttribute;
    id: string;
    autoComplete?: string;
    onFocus: () => void;
    onBlur: () => void;
    focused: boolean;
}> = ({ label, value, onChange, type, id, autoComplete, onFocus, onBlur, focused }) => {
    return (
        <div className='grid gap-2 relative'>
            <label
                htmlFor={id}
                className={`text-white absolute transition-all duration-300 px-3 
                ${focused || value !== '' ? 'text-xs' : 'text-base'} 
                ${focused ? 'top-0' : 'top-2/4'} 
                ${value !== '' ? 'text-gray-500' : 'text-white'} 
                ${focused ? 'translate-y-0' : '-translate-y-2/4'} 
                ${focused ? '-translate-x-0' : '-translate-x-2'} `}>
                {label}
            </label>
            <input
                className='px-2 pt-4 text-white bg-BaseColor border-b border-gray-200 outline-none cursor-pointer'
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    );
}

export default Login;
