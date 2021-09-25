import { gql } from 'apollo-server'

export default gql `
    extend type Query {
        news: [News!]
    }

    extend type Mutation {
        addNews(newsTitle: String! newsBody: String! authorId: Int! categorieId: Int!):MutationResponse!
        updateNews(newsId: Int! newsTitle: String! newsBody: String! authorId: Int! ):MutationResponse!
        deleteNews(newsId: Int!):MutationResponse!
    }

    type News {
        newsId: ID!
        newsTitle: String!
        newsBody: String!
        time: Int!
        views: Int!
        authorId: Int!
        langId: Int!
        categorieId: Int!

    }
`