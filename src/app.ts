import express from 'express';
import routesCar from './Routes/routes.car';
import routesMotorcycle from './Routes/routes.motorcycle';

const app = express();
app.use(express.json());

// app.get('/', (_req, res) => res.json({ ok: true }));
app.use('/cars', routesCar);
app.use('/motorcycles', routesMotorcycle);

export default app;
