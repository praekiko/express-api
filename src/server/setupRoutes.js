import { Router } from 'express'

function createRoutes() {
	const router = new Router()

	// create router here
	router.use('/healthcheck', (req, res) => {
		res.json({ message: 'API Still alive' })
	})

	return router
}

export default app => {
	app.use('/api', createRoutes())
}
