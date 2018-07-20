import { Router } from 'express';

function createRoutes() {
	const router = new Router();

	// create router here

	return router;
}

export default app => {
	app.use('/api', createRoutes());
};
