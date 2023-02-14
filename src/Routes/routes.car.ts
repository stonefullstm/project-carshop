import { NextFunction, Router, Request, Response } from 'express';
import CarController from '../Controllers/CarController';
import { validateID, existsCar } from '../Middlewares/validations'; 

const routesCar = Router();

routesCar.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next).create(),
);
routesCar.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next).findAll(),
);
routesCar.get(
  '/:id',
  validateID,
  existsCar,
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next).findById(),
);

export default routesCar;