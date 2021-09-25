import model from './model.js'

export default {
    Query: {
        categorie: async () => await model.getCategorie()
    },

    Mutation: {
        addCategorie: async(_, args) => {
            if(await model.insertCategorie(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new Categorie has been added!',
                        data: user
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
        updateCategorie: async(_, args) => {
            if(await model.putCategorie(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new Categorie has been updated!',
                        data: user
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
        deleteCategorie: async(_, args) => {
            if(await model.deleteCategorie(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new Categorie has been deleted!',
                        data: user
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

    Categorie:{
        categorieId:      global => global.categorie_id,
        name:             global => global.name,
        lang:             global => global.lang
    }
}