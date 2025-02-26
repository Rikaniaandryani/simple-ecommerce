import { useEffect, useState } from "react";
import { getDataUser } from "../../services/auth.service";

function Profile() {
    const [detailUser, setDetailUser] = useState<any>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getDataUser(token, ((result: any) => {
                console.log(result);
                setDetailUser(result)
            }))
            
        }
    }, []);

    return (
        <>
        Profile
        {detailUser?.name.firstname} {detailUser?.name.lastname}
        </>
    )
}

export default Profile;