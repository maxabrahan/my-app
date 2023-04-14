import React, {useState} from 'react';
import Input from '../components/Input';
function Login() {
    const [email, setEmail] = useState('');
    return (
       <>
           <text>hola</text>
           <Input id={'01'} name={'email'} defaultValue={'email'} label={'correo'}/>
       </>
    );
}

export default Login;
