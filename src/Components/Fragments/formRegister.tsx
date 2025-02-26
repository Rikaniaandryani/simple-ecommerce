import Button from "../Elements/button";
import Input from "../Elements/input";

function FormRegister() {
    return (
        <>
        <form action="">
        <div className="mb-6">
            <Input label="Fullname" placeholder='insert your name here.' type="text" htmlFor="text" />
          </div>
          <div className="mb-6">
            <Input label="Email" placeholder='example@mail.com' type="email" htmlFor="email" />
          </div>
          <div className="mb-6">
            <Input label="Password" placeholder='*****' type="password" htmlFor="password" /> 
          </div>
          <div className="mb-6">
            <Input label="Confirm Password" placeholder='*****' type="password" htmlFor="confirm-password" /> 
          </div>
          <div className='flex justify-end'>
            <Button direct="register" types="submit" nameClass="!bg-slate-500" width="full" text="REGISTER" />
          </div>
        </form>
        </>
    )
}

export default FormRegister;