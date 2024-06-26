import { play } from "../../public/svg";
import { Button, Heading } from '../components';

const Contact = () => {
  return (
    <div>
      <section className="bg-white mt-5">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Heading title={"Contact Us"} />
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
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
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-black bg-gray-50  rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500  outline-none dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
            <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-black dark:text-black "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm  border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-balck dark:focus:ring-primary-500 outline-none  dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <Button title={"Submit"} variant={"btn_dark_green"} icon={play} />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
