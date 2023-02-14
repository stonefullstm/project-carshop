import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto: IMotorcycle = {
      ...this.req.body,
      status: this.req.body.status || false,
    };

    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  // public async findAll() {
  //   const Motorcycles = await this.service.findAll();
  //   return this.res.status(200).json(Motorcycles);
  // }

  // public async findById() {
  //   const { id } = this.req.params;
  //   try {
  //     const Motorcycle = await this.service.findById(id);
  //     return this.res.status(200).json(Motorcycle);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }

  // public async update() {
  //   const { id } = this.req.params;
  //   const Motorcycle: IMotorcycle = {
  //     ...this.req.body,
  //     status: this.req.body.status || false,
  //   }; 
  //   try {
  //     const updatedMotorcycle = await this.service.update(id, Motorcycle);
  //     return this.res.status(200).json(updatedMotorcycle);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}

export default MotorcycleController;