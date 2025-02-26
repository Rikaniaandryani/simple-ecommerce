import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../Elements/button"
import "./header.css"
import { useEffect, useState } from "react";
import { getUserName } from "../../services/auth.service";


function Header () {
    // let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || "false");
    const [isLoggedin, setLoggedIn] = useState(!!localStorage.getItem("token"));
    const location = useLocation();
    const [username, setUsername] =  useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUserName(token, ((res: any) => {
                if(res) {
                    setUsername(res);
                    setLoggedIn(true);
                } else {
                    setUsername(null);
                    setLoggedIn(false);
                }
            }));
        } else {
            setUsername(null);
            setLoggedIn(false);
        }
       console.log(isLoggedin);
       
    }, [location.pathname])
    function handleDirect(direct?: string) {
        navigate(`/${direct}`)
    }

    function handleLogout(direct?: string) {
        localStorage.removeItem('token')
        localStorage.setItem("isLoggedIn", "false"); 
        setLoggedIn(false);
        setUsername(null);
        navigate(`/${direct}`)
    }
    return (
        <>
        <nav className="navbar p-[12px] bg-gray-50 flex justify-between flex-row">
            <div className="left-section">
                <Link className="font-semibold text-2xl" to="/">Home</Link>
                {
                    isLoggedin && <ul className="list-menu">
                                    <li>
                                        <Link to="/product">Products</Link>
                                    </li>
                                </ul>
                }
            </div>
            {!isLoggedin ? <form className="w-fit justify-end">
                {location.pathname.includes('login') && <Button direct="register" nameClass="!bg-gray-500" text="REGISTER" onClickButton={handleDirect}/>}
                {location.pathname.includes('register') && <Button direct="login" nameClass="!bg-sky-500" text="LOGIN" onClickButton={handleDirect}/>} 
                {(!location.pathname.includes('register') && !location.pathname.includes('login'))  && 
                    <>
                        <Button direct="login" nameClass="!bg-sky-500" text="LOGIN" onClickButton={handleDirect}/>
                        <Button direct="register" nameClass="!bg-gray-500" text="REGISTER" onClickButton={handleDirect}/>
                    </>} 

                </form>

                :
                <>
                <div>
                    <Link to="/profile">
                        <span className="w-[230px] justify-end text-black font-medium">
                            {username}
                        </span>
                    </Link>
                    
                    <Button direct="login" nameClass="!bg-sky-500 ml-5" text="LOGOUT" onClickButton={handleLogout}/>
                </div>
               </>

            }            
        </nav>
        </>
    )
}

export default Header