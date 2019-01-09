import { createStore } from 'redux';

const counter = (state: any = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      break;

    case 'INCREMENT':
      break;

    default:
      break;
  }
};

const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());