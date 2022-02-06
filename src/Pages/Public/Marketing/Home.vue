<template>
    <div>
        <!-- Navigation-->
        <section class="w-full px-8 text-gray-700 bg-white">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div class="relative flex flex-col md:flex-row">
                    <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">EZ PageBuilder<span class="text-indigo-600">.</span></span>
                    </a>
                    <!-- <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                        <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                        <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                    </nav> -->
                </div>

                <div class="inline-flex items-center ml-5 space-x-2 lg:justify-end">
                    <router-link :to="{name: 'Login'}" class="btn btn-ghost">
                        Login
                    </router-link>
                    <router-link :to="{name: 'Register'}" class="btn btn-secondary btn-outline">
                        Sign up
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Hero -->
        <section class="px-2 pt-16 pb-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
                <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                    <span class="block text-secondary xl:inline">The easieast way </span>
                    <span class="block xl:inline">to create a landing page</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    It's never been easier to build a landing page to sell your digital products.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                    <router-link :to="{name: 'Register'}" class="btn btn-primary btn-lg">
                        Try It Free
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </router-link>

                    <!-- <a href="#_" class="btn btn-primary btn-lg">
                        Try It Free
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a> -->
                    <a href="#_" class="btn btn-lg btn-accent">
                        Learn More
                    </a>
                </div>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                    <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg">
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Benefits -->
        <section class="py-20 bg-white">
            <div class="container max-w-6xl mx-auto">
                <h2 class="mt-1 font-bold text-left text-gray-800 sm:mx-6 text-2xl md:text-3xl lg:text-4xl sm:text-center">
                    The Benefits You Get
                </h2>
                <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-center">
                    Check out our list of awesome features below.
                </p>
                <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                    <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">Drag & Drop</h4>
                        <p class="text-base text-center text-gray-500">You build your page by simply dragging and dropping our premade blocks.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">No Coding</h4>
                        <p class="text-base text-center text-gray-500">You won't have to write a single line of code, it's all configuration driven.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">Easy to Customize</h4>
                        <p class="text-base text-center text-gray-500">It's insanelly easy to customize any blocks with simple to adjust options.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">EasyMode</h4>
                        <p class="text-base text-center text-gray-500">Our EasyMode allows you to create a whole page in 5 mins or less.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">Prebuilt Pages</h4>
                        <p class="text-base text-center text-gray-500">Our blocks are prebuilt and ready to be used with minimal configuration.</p>
                    </div>

                    <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                        <div class="p-2 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-700">Marketing Integrations</h4>
                        <p class="text-base text-center text-gray-500">Integrate your page with the most common marketing automation tools.</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- Pricing -->
        <section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
            <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-6xl">
                <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                    <h2 class="mt-1 font-bold text-left text-gray-800 sm:mx-6 text-2xl md:text-3xl lg:text-4xl sm:text-center">
                        Simple, Transparent Pricing
                    </h2>
                    <p class="box-border mt-2 text-xl text-gray-900 border-solid">
                        Pricing to fit the needs of any companie size.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                    <!-- Price 1 -->
                    <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-800 border-0 border-gray-200 md:text-3xl">
                            Starter
                        </h3>
                        <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p class="box-border m-0 text-4xl font-semibold leading-none border-solid">
                                $5
                            </p>
                            <p class="box-border m-0 border-solid" style="border-image: initial;">
                                / month
                            </p>
                        </div>
                        <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            Ideal for Startups and Small Companies
                        </p>
                        <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Automated Reporting</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Faster Processing</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Customizations</span>
                            </li>
                        </ul>
                        <button class="btn btn-primary btn-outline btn-block">
                            Select Plan
                        </button>
                    </div>
                    
                    <!-- Price 2 -->
                    <div class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-2 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-800 border-0 border-gray-200 md:text-3xl">
                            Basic
                        </h3>
                        <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p class="box-border m-0 text-4xl font-semibold leading-none border-solid">
                                $15
                            </p>
                            <p class="box-border m-0 border-solid" style="border-image: initial;">
                                / month
                            </p>
                        </div>
                        <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            Ideal for medium to larger businesses
                        </p>
                        <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Everything in Starter</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">100 Builds</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Progress Reports</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Premium Support</span>
                            </li>
                        </ul>
                        <button class="btn btn-primary btn-block">
                            Select Plan
                        </button>
                    </div>

                    <!-- Price 3 -->
                    <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-800 border-0 border-gray-200 md:text-3xl">
                            Plus
                        </h3>
                        <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p class="box-border m-0 text-4xl font-semibold leading-none border-solid">
                                $25
                            </p>
                            <p class="box-border m-0 border-solid" style="border-image: initial;">
                                / month
                            </p>
                        </div>
                        <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            Ideal for larger and enterprise companies
                        </p>
                        <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Everything in Basic</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Unlimited Builds</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Advanced Analytics</span>
                            </li>
                            <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="text-gray-600 font-normal">Company Evaluations</span>
                            </li>
                        </ul>
                        <button class="btn btn-primary btn-outline btn-block">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-32 bg-slate-900 text-gray-100">
            <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight">
                    The New Way to Build Landing Pages
                </h2>
                <p class="max-w-md mx-auto mt-3 text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Use our award-winning tools to help you maximize your profits. We've uncovered the correct recipe for converting visitors into customers.
                </p>
                <div class="flex justify-center mt-8 space-x-3">
                    <router-link :to="{name: 'Register'}" class="btn btn-secondary btn-lg tracking-wider">
                        Try it for free now!
                    </router-link>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
            <div class="container px-8 mx-auto sm:px-12 xl:px-5">
                <h2 class="mt-1 font-bold text-left text-gray-800 sm:mx-6 text-2xl md:text-3xl lg:text-4xl sm:text-center">
                    Frequently Asked Questions
                </h2>
                <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-center">
                    Got a Question? We have the answer
                </p>
                <div class="w-full px-6 py-4 mx-auto mt-4 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-medium text-purple-500 sm:text-xl">
                        Do I need to buy or have a domain?
                    </h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        No need to spend extra money, we give you a subdomain for free.
                    </p>
                </div>
                <div class="w-full px-6 py-4 mx-auto mt-4 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-medium text-purple-500 sm:text-xl">
                        Do I need to buy or have a domain?
                    </h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        No need to spend extra money, we give you a subdomain for free.
                    </p>
                </div>
                <div class="w-full px-6 py-4 mx-auto mt-4 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-medium text-purple-500 sm:text-xl">
                        Do I need to buy or have a domain?
                    </h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        No need to spend extra money, we give you a subdomain for free.
                    </p>
                </div>
                <div class="w-full px-6 py-4 mx-auto mt-4 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-medium text-purple-500 sm:text-xl">
                        Do I need to buy or have a domain?
                    </h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        No need to spend extra money, we give you a subdomain for free.
                    </p>
                </div>
            </div>
        </section>

        <!-- Try -->
        <section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
            <div class="max-w-5xl mx-auto">
                <div class="flex flex-col items-center md:flex-row">

                    <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                        <p class="font-medium text-blue-500 uppercase">Building Businesses</p>
                        <h2 class="text-2xl font-extrabold leading-none text-black md:text-4xl">
                            Create you account now! 
                        </h2>
                        <p class="text-xl text-gray-600 md:pr-16">
                            You will never go back to the old way of creating landing pages.
                        </p>
                    </div>

                    <div class="w-full mt-16 md:mt-0 md:w-2/5">
                        <div class="relative z-10 h-auto p-8 py-10 space-y-4 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                            <input type="text" name="text" class="input input-bordered text-lg w-full" placeholder="Name">
                            <input type="text" name="email" class="input input-bordered text-lg w-full" placeholder="Email">
                            <input type="password" name="password" class="input input-bordered text-lg w-full" placeholder="Password">
                            <div class="block">
                                <button class="btn btn-primary btn-block">Create my account</button>
                            </div>
                            <p class="w-full text-sm text-center text-gray-500">Already have an account?
                                <router-link :to="{name: 'Login'}" class="text-blue-500 underline">Login here</router-link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Footer -->
        <section class="text-gray-700 bg-white body-font">
            <div class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                <p class="mt-4 text-sm text-gray-500 sm:mt-0">© 2022 EZ LandingPage</p>
                <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                        </svg>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Instagram</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                        </svg>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">GitHub</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>

                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Dribbble</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </section>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'WebsiteHome'
    })
</script>
