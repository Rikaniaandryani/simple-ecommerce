import { useRouteError } from "react-router-dom";
import Header from "../Layouts/header";

function ErrorPage() {
    const errors: any = useRouteError();
    return (
      <>
      <Header />
          <div className="justify-center min-h-screen items-center flex-column flex">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Ooops!</h1>
                    <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
                    <p>
                        {errors.message || errors.statusText}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;