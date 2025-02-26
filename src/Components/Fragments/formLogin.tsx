import { useNavigate } from "react-router-dom";
import Button from "../Elements/button";
import Input from "../Elements/input";
import { useEffect, useRef, useState } from "react";
import { loginService } from "../../services/auth.service";

function FormLogin() {
  const [messageError, setMessageError] = useState('');
  const navigate = useNavigate();
    const handleLogin = (event: any) => {
      event.preventDefault();
      // localStorage.setItem('email', event.target.email.value);
      // localStorage.setItem('password', event.target.password.value);
      // localStorage.setItem('isLoggedIn', 'true');
      // // window.location.href = '/product'
      // navigate('/product')
      const data = {
        username: event.target.username.value,
        password: event.target.password.value
      }

      loginService(data, (status: boolean, result: any) => {
        console.log(status, result);
        if(status) {
          localStorage.setItem('token', result);
          localStorage.setItem('isLoggedIn', 'true');
          navigate('/product')
        } else {
          if (result.response.status === 401) {
            setMessageError("username and password is incorrect")
          }
        }
        
      })
    }
    const usernameRef = useRef(null);

    useEffect(() => {
      usernameRef.current.focus();
    }, []);

    return (
        <>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <Input label="Username" ref={usernameRef} placeholder='john_doe' type="text" htmlFor="username" onChange={() => setMessageError('')} />
          </div>
          <div className="mb-6">
            <Input label="Password" placeholder='*****' type="password" htmlFor="password" onChange={() => setMessageError('')} /> 
          </div>
          {
            messageError && <span className="text-[10px] mt-[-20px] absolute text-red-800">{messageError}</span>
          }
          <div className={messageError ? 'flex justify-end mt-[30px]' : 'flex justify-end'}>
            <Button direct="login" types="submit" nameClass="!bg-sky-500" width="full" text="LOGIN"/>
          </div>
        </form>
        </>
    )
}

export default FormLogin;