import {connection} from '../../lib/postgres.js'
import { registerValidation } from '../../lib/validation.js'


const USERS = `
    SELECT 
        *
    FROM users
    RETURNING *
`
const INSERT_USER = `
	INSERT INTO users (
		first_name,
		last_name,
		email,
		password,
		specialist
	) VALUES ($1, $2, $3, $4, $5)
	RETURNING user_id
`
const LOGINQUERY = `
    SELECT
        *
    FROM users u
    WHERE u.email = $1 AND u.password = $2
    RETURNING *

`

const getUsers =async () => {
    try {
        return await connection(USERS)
    } catch(error){
        throw error
    }
}

const registerUser = ({ firstName, lastName, email, password, specialist}) => {
	try {
        let {error} = registerValidation.validated({ firstName, lastName, email, password, specialist })
        if(error) throw error
		return connection(INSERT_USER, firstName, lastName, email, password, specialist)
	}catch(error){
		throw error
	}
}

const loginUser = async ({ email, password  }) => {
    try {
        const test = await connection(LOGINQUERY, email, password)
        return await test
    } catch (error) {
        throw error
    }
}

export default{
    registerUser,
    loginUser,
    getUsers
}