import ICar from '../../../../src/Interfaces/ICar';

export const carInputMock: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carOutputMock: ICar = {
  id: '63319d80feb9f483ee823ac5',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carsOutputMock: ICar[] = [
  {
    id: '63319d80feb9f483ee823ac5',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39000,
    doorsQty: 2,
    seatsQty: 5,  
  },
];
