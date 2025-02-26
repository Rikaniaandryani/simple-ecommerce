
import FormRegister from "../Fragments/formRegister";
import Header from "../Layouts/header";
import AuthLayouts from "../Layouts/authLayouts";

function Register() {
    const desc = 'Welcome, please enter your details.'
    return (
        <>
        <div className="w-full">
            <AuthLayouts type="register" title="Register" desc={desc} >
                <FormRegister />
            </AuthLayouts>
        </div>
           
        </>
    )
}

export default Register;