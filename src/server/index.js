import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import config from '../common/config'
import ConnectDatabase from '../common/utils/ConnectDatabase'

import setupRoutes from './setupRoutes'

function setup() {
	const app = express()
	const { port, host } = config

	app.use(morgan('tiny'))
	app.use(cors())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	setupRoutes(app)

	ConnectDatabase().then(() =>
		app.listen(config.port, () => {
			console.log(`🏠 API is running on http://${host}:${port}`)
		}),
	)
}

export default setup
