require('dotenv').config()

export default {
	port: process.env.PORT || 80,
	host: process.env.HOST,
	databaseUrl: process.env.DATABASE_URL,
	secret: process.env.SECRET,
}
