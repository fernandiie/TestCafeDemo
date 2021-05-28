import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
    },

    INVALID_USER:{
        USERNAME: 'invalid_usr',
        PASSWORD: 'secret_sauce'
    }
}

export const MESSAGES = {
    ERROR_MESSAGES: {
        INVALID_USER: 'Epic sadface: Username and password do not match any user in this service',
        INVALID_NAME_ERROR: 'Error: First Name is required'
    }
}

export const SHIPPING_INFO = {
        NAME: 'Juan',
        LAST_NAME: 'Perez',
        ZIP_CODE: '12345'    
}

export const HEADERS = {
        CHECKOUT:{
            OVERVIEW: 'CHECKOUT: OVERVIEW',
            COMPLETE:'CHECKOUT: COMPLETE!'
        },
        PRODUCTS: 'PRODUCTS',
        CART: 'YOUR CART'

}