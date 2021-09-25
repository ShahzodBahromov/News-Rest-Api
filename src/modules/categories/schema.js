import { gql } from 'apollo-server'

export default gql `
    extend type Query {
        categorie: [Categorie!]
    }

    extend type Mutation {
        addcategorie(name: String! lang: Int!):MutationResponse!
        updateCategorie(categorie_id: Int! name: String!):MutationResponse!
        deleteCategorie(cateroie_id: Int!):MutationResponse!
    }

    type Categorie {
        CategorieId: ID!
    }
`