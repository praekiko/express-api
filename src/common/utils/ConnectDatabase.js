import mongoose from 'mongoose'

import config from '../config'

function connectDatabase() {
	return mongoose.connect(
		config.databaseUrl,
		{
			useNewUrlParser: true,
		},
	)
}

export default connectDatabase
