import  pg from 'pg'
import  { pgConfig } from '../config.js'

console.log(pg, pgConfig)


const pool = new pg.Pool(pgConfig)

async function connection (query, ...array) {
	const client = await pool.connect()
	try {
		const { rows } = await client.query(query, array.length ? array : null)
		return rows
	} catch(error) {
		throw error
	} finally {
		await client.release()
	}
}

export {
    connection
} 