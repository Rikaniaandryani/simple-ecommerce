
import FormLogin from "../Fragments/formLogin";
import Header from "../Layouts/header";
import AuthLayouts from "../Layouts/authLayouts";

function Login() {
    const desc = 'Welcome, please enter your details.'
    return (
        <>
            <AuthLayouts title="Login" type="login" desc={desc} >
                <FormLogin />
            </AuthLayouts>
        </>
    )
}

export default Login;