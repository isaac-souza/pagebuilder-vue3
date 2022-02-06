const Middleware = {
    auth: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('ez_landingpage_authenticated')
        
        if (isAuthenticated == 'true') {
            next()
        }
        else {
            next({ name: 'Login' })
        }
    },

    guest: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('ez_landingpage_authenticated')

        if ((to.name == 'Login' || to.name == 'Register') && isAuthenticated == 'true') {
            next({ name: 'Dashboard' })
        }
        else {
            next()
        }
    },
}

export default Middleware
