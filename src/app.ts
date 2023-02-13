import express from 'express';
import routesCar from './Routes/routes.car';

const app = express();
app.use(express.json());
app.get('/', (_req, res) => res.json({ ok: true }));
app.use('/cars', routesCar);

export default app;
