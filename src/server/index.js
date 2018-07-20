import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import healthCheck from './healthCheck';
import apiRouters from './apiRouters';

async function initServer(app) {
	try {
		app.use(morgan('dev'));
		app.use(cors());
	} catch (err) {
		throw new Error(err);
	}
}

const app = express();

initServer(app);
healthCheck(app);
apiRouters(app);

export default app;
