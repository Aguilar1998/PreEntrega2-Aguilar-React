import { useRef } from "react";


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Login">
            <div className=" flex flex-col border-2 border-red-500 w-50">

                <form action="/" className="flex flex-col m-auto w-1/2 h-mx border-2 border-red" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className="w-full" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="w-full" />
                    <button
                        onClick={handleSubmit}
                        className="m-auto flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ">
                        Log in
                    </button>
                    <a href="/" className='m-auto w-full'>Forgot my password</a>
                </form>

                <button
                    className="m-auto flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 "
                >
                    Sign up
                </button>

            </div>
        </div >
    );
}

export default Login;