import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string
    desc: string
    children: ReactNode
    type: string
}

function AuthLayouts({title, desc, children, type} : Props) {
    return (
        <>
        <div className="flex justify-center min-h-screen items-center">
            <div className="login-wrapper wrapper-form p-[40px] bg-gray-50 min-w-1/4 border-[1px] border-gray-700 rounded-[10px]">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    {desc}
                </p>
                {children}
                <p className="pt-[10px] text-black text-xs text-right font-normal">
                    {type === 'login' ? "Don't have an account?" : "Already have an account?"} 

                    {type === 'login' && (
                            <Link className="cursor-pointer font-bold ml-[4px]" to="/register">Sign up</Link>
                    )}
                     {type === 'register' && (
                            <Link className="cursor-pointer font-bold ml-[4px]" to="/login">Login</Link>
                    )}
                </p>
            </div>
        </div>
        
        </>
    )
}

export default AuthLayouts;