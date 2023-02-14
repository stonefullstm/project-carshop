import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { carInputMock, carOutputMock, carsOutputMock } from './mocks/car.mocks';

describe('Testar a camada service de Car', function () {
  describe('Deveria criar um car', function () {
    it('Deveria criar um car com sucesso', async function () {
      const carOutput = new Car(carOutputMock);
      sinon.stub(Model, 'create').resolves(carOutput);
      const service = new CarService();
      const result = await service.create(carInputMock);
      expect(result).to.be.deep.equal(carOutput);
      sinon.restore();
    });
  });
  describe('Deveria retornar cars', function () {
    it('Deveria retornar todos os cars com sucesso', async function () {
      const carsOutput = carsOutputMock.map((car) => new Car(car));
      sinon.stub(Model, 'find').resolves(carsOutput);
      const service = new CarService();
      const result = await service.findAll();
      expect(result).to.be.deep.equal(carsOutput);
      sinon.restore();
    });
    it('Deveria retornar um car com sucesso', async function () {
      const carOutput = new Car(carOutputMock);
      sinon.stub(Model, 'findOne').resolves(carOutput);
      const service = new CarService();
      const result = await service.findById('63319d80feb9f483ee823ac5');
      expect(result).to.be.deep.equal(carOutput);
    });
  });
});
