import model from './model.js'

export default {
    Query: {
        news: async () => await model.getNews()
    },

    Mutation: {
        addNews: async(_, args) => {
            if(await model.insertNews(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new News has been added!',
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
        updateNews: async(_, args) => {
            if(await model.putNews(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new News has been updated!',
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
        deleteNews: async(_, args) => {
            if(await model.deleteNews(args))
            try {
                if(user) {
                    return {
                        status: 201,
                        message: 'The new News has been deleted!',
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

    News:{
        newsId: global => global.categorie_id,
        categorieId: global => global.categorie_id,
        authorId: global => global.author_id,
        
    }
}