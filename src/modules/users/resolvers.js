import model from './model.js'

import Jwt from '../../lib/jwt.js'

export default {
    Query: {
        users: async () => await model.getUsers()
    },

    Mutation: {
        register: async(_, args) => {
            if(await model.registerUser(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new User has been added!',
                        data: Jwt.sign(user.email)
                    }
                }else throw new Error('There is an error')
            }catch(error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        },

        login: async(_, args) => {
            let user = await model.loginUser(args)
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The User succesfully loged in !',
                        data: steak
                    }
                }else throw new Error('There is an error')
            }catch(error) {
                return {
                    status: 400,
                    message: error.message,
                    data: null
                }
            }
        }
    },

    Users:{
        userId:      global => global.user_id,
        firstName:   global => global.first_name,
        lastName:    global => global.last_name,
        password:    global => global.password,
        email:       global => global.email,
        specialist:  global => global.specialist
    }
}