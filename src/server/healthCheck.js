const bodyParser = require('body-parser');

export default app => {
	app.get('/healthcheck', bodyParser.json(), (req, res) => {
		res.json({ message: 'API Health check' });
	});
};
