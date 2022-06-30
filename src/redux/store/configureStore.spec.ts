import store from './configureStore'

describe('Redux Store',() =>{
 it('Should create a store to fetch the api', () => {
  const currentStore = store.getState();
  expect(currentStore).toHaveProperty('productorReducer')
 })
})