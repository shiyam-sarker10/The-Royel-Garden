import { Link, useNavigate} from "react-router-dom";

import { useContext, useEffect } from "react";

import { toast } from "react-toastify";

import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Login = () => {
//  title 
  useEffect(() => {
    document.title = "The Royal Garden - Login";
  }, []);


  const {signInUser} = useContext(AuthContext)
  const homeNavigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "" || password === "") {
          toast.info("Enter something or sign in with github or google");
        }
        else{
          signInUser(email, password)
            .then((result) => {
             
              toast.success("Login Successfully");
            })
            .catch((error) => {
              toast.error(`${error}`);
            });
          }


  }
  
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center container mx-auto my-24">
      <div className=" w-full md:w-[40%]  justify-end">
        <section className=" dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-wider font-custom text-blue-400 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium  dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className=" focus:text-blue-400 focus:outline-blue-400 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium  dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className=" focus:text-blue-400 focus:outline-blue-400 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className=" form-checkbox  text-blue-400 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-400 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="flex justify-center items-center ">
                    <input
                      className="px-6 w-full py-2 rounded-lg font-thin active:bg-blue-400/80 bg-blue-400 text-white font-title "
                      type="submit"
                      value="Submit"
                    />
                  </div>
                  <div className="inline-flex items-center justify-center w-full relative">
                    <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2 dark:text-white text-blue-400 dark:bg-gray-900">
                      or
                    </span>
                  </div>

                  <SocialLogin></SocialLogin>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register now
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
