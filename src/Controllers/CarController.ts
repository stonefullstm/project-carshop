import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      ...this.req.body,
      status: this.req.body.status || false,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;