
export const ROUTER = {
    SCREENS:{

        AUTH:{
            LOGIN: "/auth/login",
            SIGNUP: "/auth/signup",
        },
        
        HOME: "/",
        ABOUT: "/about",
        CONTACT: "/contact",
        BLOG: "/blog",
        BLOG_DETAIL: "/blog/detail/:id",
        BLOG_CREATE: "/blog/create",
        SETTINGS:{
            BASE: "/settings/*",
            PROFILE: "/settings/profile",
            PASSWORD: "/settings/password",
            NOTIFICATION: "/settings/notification",
        },
    },

    ACTIONS:{
        GO_BACK: -1,
        SETTINGS_PROFILE: "/settings/profile",
        SETTINGS_PASSWORD: "/settings/password",
        SETTINGS_NOTIFICATION: "/settings/notification",
        BLOG_ID: "/blog/detail/",
        BLOG_CREATE: "/blog/create",
    }
}