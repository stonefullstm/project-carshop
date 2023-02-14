import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleCategory from '../Types/MotorcycleCategory';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: MotorcycleCategory;
  private engineCapacity: number;

  constructor(
    motorcycle: IMotorcycle,
  ) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}