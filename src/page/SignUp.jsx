import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { signUp } from '../services/opretions/userApi';

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
        const formData = getValues();
        // console.log("formData : ", data);
        const result = await signUp(formData, navigate);

        // console.log("Result in CartForm : ", result);
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center w-screen h-screen -mt-[46px]">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-center mb-6">
                    <span className="inline-block bg-gray-200 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                    </span>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
                <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
                <form>
                    <div className="mb-4">
                        <label for="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                        <input type="text" id="fullName" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" placeholder="James Brown" {...register("FullName", { required: true })} />
                        {errors.FullName && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                Full Name is required
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                        <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" {...register("Email", { required: true })} placeholder="hello@alignui.com" />
                        {errors.Email && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                Email is required
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                        <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" {...register("Password", { required: true })} placeholder="••••••••" />
                        <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
                        {errors.Password && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                Password is required
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Confiram Password *</label>
                        <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" {...register("ConfirmPass", { required: true })} placeholder="••••••••" />
                        {errors.ConfirmPass && (
                            <span className="ml-2 text-xs tracking-wide text-pink-600">
                                ConfirmPass is required
                            </span>
                        )}
                    </div>
                    <button type="submit" onClick={handleSubmit(onSubmit)} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                    <p className="text-gray-600 text-xs text-center mt-4">
                        By clicking Register, you agree to accept Apex Financial's
                        <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
