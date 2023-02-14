import { NextFunction, Response, Request } from 'express';
import { isValidObjectId } from 'mongoose';
import CarODM from '../Models/CarODM';

const validateID = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(422).json({ message: 'Invalid mongo id' });
    return;
  }
  next();
};

const existsCar = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  const car = await new CarODM().findById(id);
  if (!car) {
    res.status(404).json({ message: 'Car not found' });
    return;
  }
  next();
};

export { validateID, existsCar };
