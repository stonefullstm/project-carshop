import { NextFunction, Router, Request, Response } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routesMotorcycle = Router();

routesMotorcycle.post(
  '/',
  (
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) => new MotorcycleController(req, res, next).create(),
);
// routesMotorcycle.get(
//   '/',
//   (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next).findAll(),
// );
// routesMotorcycle.get(
//   '/:id',
//   validateID,
//   existsMotorcycle,
//   (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next).findById(),
// );

// routesMotorcycle.put(
//   '/:id',
//   validateID,
//   existsMotorcycle,
//   (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next).update(),
// );

export default routesMotorcycle;