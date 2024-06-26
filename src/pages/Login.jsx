/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { play } from "../../public/svg";
import { Button, Heading } from '../components';

const Login = () => {
  return (
    <section className="m-4 p-4 mt-20">
      <Heading title={"Login and exploring"} />

      {/* login form */}
      <section className=" ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-black dark:text-black "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 rounded-xl text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500  outline-none dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
            <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-black dark:text-black "
              >
                password
              </label>
              <input
                type="password"
                id="subject"
                className="block p-3 w-full text-sm text-black bg-gray-50  rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500  outline-none dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black dark:text-black underline"
              >
               Doesn't have an account?  
               <Link  to={'/signup'} className="m-2 p-1 text-[1rem]"> signup </Link>
              </label>
           
            </div>
          <Button title={"Submit"} variant={'btn_dark_green'} icon={play}/>
          </form>
        </div>
      </section>

      {/* close */}
    </section>
  );
};

export default Login;
