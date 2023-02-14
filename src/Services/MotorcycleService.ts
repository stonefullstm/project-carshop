import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const newMoto = await motorcycleODM.create(moto);
    return this.createMotorcycleDomain(newMoto);
  }

  // public async findAll(): Promise<(Car | null)[]> {
  //   const carODM = new CarODM();
  //   const cars = await carODM.findAll();
  //   return cars.map((car) => this.createCarDomain(car));
  // }

  // public async findById(id: string): Promise<Car | null> {
  //   const carODM = new CarODM();
  //   const car = await carODM.findById(id);
  //   return this.createCarDomain(car);
  // }

  // public async update(id: string, car: ICar): Promise<Car | null> {
  //   const carODM = new CarODM();
  //   const updatedCar = await carODM.update(id, car);
  //   return this.createCarDomain(updatedCar);
  // }
}

export default MotorcycleService;