import Routing from './components/Routing';
import { createContext, useReducer } from 'react';


const initialState = "Bhopal";
export const CityContext = createContext();

function reducer(state, action) {
  switch (action.type) {
      case 'Bhopal':
          state = "Bhopal"
          return state;
      case 'Indore':
          state="Indore";
          return state;
      case 'Jabalpur':
          state="Jabalpur";
          return state;
      case 'Raipur':
          state="Raipur";
          return state;
      case 'Gorakhpur':
          state="Gorakhpur";
          return state;
      default:
          return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CityContext.Provider value={{ state, dispatch}}>
        <Routing/>
      </CityContext.Provider>
    </>
  );
}

export default App;