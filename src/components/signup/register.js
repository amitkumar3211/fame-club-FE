import React, { useState } from "react";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

      const handleSubmit = async (event) => {
        console.log(formData);
        event.preventDefault(); // Prevents the default form submission behavior
        try {
          const response = await fetch("API_ENDPOINT_URL", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data); // Log the response data
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    


    return (

        <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Uo here</h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Or
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial</a>
                        </p>
                </div>
                <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md shadow-sm">
                             <div>
                                <label for="name" class="sr-only">Name</label>
                                <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                autocomplete="name" 
                                value={formData.name}
                                 onChange={handleInputChange}
                                required 
                                class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Your Name" />
                            </div>
                            <div>
                                <label for="email-address" class="sr-only">Email address</label>
                                <input 
                                id="email-address" 
                                name="email" 
                                type="email" 
                                autocomplete="email" 
                                required 
                                value={formData.email}
                                onChange={handleInputChange}
                                class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Email address" />
                            </div>
                            <div>
                                <label for="password" class="sr-only">Password</label>
                                <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autocomplete="current-password" 
                                required 
                                value={formData.password}
                                 onChange={handleInputChange}
                                class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="Password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    
                                </span>
                                Sign Up
                            </button>
                        </div>
                </form>
            </div>
        </div>

    );
}

export default Register; 