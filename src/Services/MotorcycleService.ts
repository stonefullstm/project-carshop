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

  public async findAll(): Promise<(Motorcycle | null)[]> {
    const motorcycleODM = new MotorcycleODM();
    const motos = await motorcycleODM.findAll();
    return motos.map((moto) => this.createMotorcycleDomain(moto));
  }

  public async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const moto = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(moto);
  }

  // public async update(id: string, car: ICar): Promise<Car | null> {
  //   const carODM = new CarODM();
  //   const updatedCar = await carODM.update(id, car);
  //   return this.createCarDomain(updatedCar);
  // }
}

export default MotorcycleService;