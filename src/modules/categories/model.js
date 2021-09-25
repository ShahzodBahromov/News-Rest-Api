import {connection} from '../../lib/postgres.js'

const CATEGORIE =`
    select 
        *
    from categories
    where
    case
        when $1 > 0 then categorie_id = $1
        else true
    end
`

const INSERT_CATEGORIE = `
    insert into categories(
        name,
        lang
    ) values($1, $2)
    returning *
`

const DELETE_CATEGORIE = `
    delete from categories 
    where categorie_id = $1
    returning *
`

const UPDATE_CATEGORIE = `
with old_data as (
    select
        categorie_id,
        name
    from steaks
    where categorie_id = $1
) update categories c set
    name = (
    case
        when length($2) > 0 then $2
        else o.name
    end)
from old_data o
where c.categorie_id = $1
returning c.categorie_id
`

const getCategorie =async () => {
    try {
        return await connection(CATEGORIE)
    } catch(error){
        throw error
    }
}
const insertCategorie = async ({ name, lang }) => {
    try {
        return await connection(INSERT_CATEGORIE, name, lang)
    } catch(error) {
        throw error
    }
}

const deleteCategorie = async ({ cateroieId }) => {
    try {
        return await connection(DELETE_CATEGORIE, cateroieId)
    } catch(error) {
        throw error
    }
}

const updateCategorie = async ({ cateroieId, name }) => {
    try {
        return await connection(UPDATE_CATEGORIE, cateroieId, name)
    } catch(error) {
        throw error
    }
}

export default {
    getCategorie,
    insertCategorie,
    deleteCategorie,
    updateCategorie
}