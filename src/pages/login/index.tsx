import { FormEvent, HTMLInputTypeAttribute, useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para verificar o usuário e a senha
        console.log('Email:', email, 'Senha:', password);
    };

    return (
        <div className='w-full h-screen flex items-center justify-evenly flex-col'>
            <h2 className='font-bold text-white text-5xl'>Login</h2>
            <form onSubmit={handleSubmit} className='bg-purple-950 p-20 rounded-md space-y-10'>
                <Input label='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='text-white bg-black w-full p-3 rounded-sm'>Entrar</button>
            </form>
        </div>
    );
}

const Input = ({ label, value, onChange, type }: {
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: HTMLInputTypeAttribute
}) => {
    return (
        <div className='grid gap-2'>
            <label htmlFor="username" className='text-white'>{label}</label>
            <input
                className='p-2 rounded-sm'
                type={type}
                id="username"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
export default Login;
