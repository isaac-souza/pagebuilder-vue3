# EZ Landing Page Builder

## The app

Simple web app to easily create landing pages by dragging and dropping prebuilt blocks.

Each block makes available a set of options to easily customize its content.

Users don't need to write a single line of code.

## Video demo (click to go to YouTube)

[![YouTube Demo Video](https://img.youtube.com/vi/4MfJ4UAkQjg/0.jpg)](https://www.youtube.com/watch?v=4MfJ4UAkQjg)

## The stack

### Frontend

1. [Vue.js 3](https://v3.vuejs.org/) + [Vuex 4](https://vuex.vuejs.org/) + [Vue Router 4](https://router.vuejs.org/)
2. [Vite.js](https://vitejs.dev/)
3. [Tailwind CSS 3](https://tailwindcss.com/) + [Daisy UI](https://daisyui.com/)
5. [Sortable.js](https://github.com/SortableJS/vue.draggable.next)

### Backend

1. [Laravel 8](https://laravel.com/docs/8.x)
2. [Laravel Sail](https://laravel.com/docs/8.x/sail)
3. [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum)
4. [Laravel Fortify](https://laravel.com/docs/8.x/fortify)

## Setting up the backend

1. Clone the repo and navigate to the directory
```
git clone git@github.com:isaac-souza/pagebuilder-laravel.git
cd pagebuilder-laravel
```
2. Copy the sample .env file
```
cp .env.example .env
```
3. Install the dependencies (requires at least PHP 8.0)
```
composer install
```
4. Start Laravel Sail (needs Docker installed in your system)
```
vendor/bin/sail up
```
5. Generate key, run the migrations and link the storage folder
```
vendor/bin/sail artisan key:generate
vendor/bin/sail artisan migrate --seed
vendor/bin/sail artisan storage:link
```
6. Run the tests
```
vendor/bin/sail artisan test
```
7. The backend should be available at
```
http://localhost
```

## Setting up the frontend

1. Clone the repo and navigate to the directory
```
git clone git@github.com:isaac-souza/pagebuilder-vue3.git
cd pagebuilder-vue3
```
2. Install the dependencies
```
npm install
```
3. Copy the sample .env file
```
cp .env.example .env
```
4. Start the dev server
```
npm run dev
```
5. The frontend should be available at
```
http://localhost:3000
```

## Testing

Now you should be able to go to http://localhost:3000, access the login page and sign in into the app

## My development environment

OS:
```
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.6 LTS
Release:	18.04
Codename:	bionic
```

Docker: 
```
Docker version 20.10.12, build e91ed57
```

Docker-compose:
```
docker-compose version 1.29.2, build 5becea4c
```

PHP:
```
PHP 8.0.15 (cli) (built: Jan 29 2022 07:24:35) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.15, Copyright (c) Zend Technologies
    with Zend OPcache v8.0.15, Copyright (c), by Zend Technologies
```
Composer
```
Composer version 2.1.6 2021-08-19 17:11:08
```
Node
```
v14.19.0
```
NPM
```
6.14.16
```