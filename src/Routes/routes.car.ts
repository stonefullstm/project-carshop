import { NextFunction, Router, Request, Response } from 'express';
import CarController from '../Controllers/CarController';

const routesCar = Router();

routesCar.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next).create(),
);

export default routesCar;