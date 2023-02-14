import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }
}

export default CarService;