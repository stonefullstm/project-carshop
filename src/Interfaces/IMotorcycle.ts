import MotorcycleCategory from '../Types/MotorcycleCategory';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: MotorcycleCategory;
  engineCapacity: number;
}