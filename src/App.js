import './App.css';
import { MyProvider } from './contexto/MyProvider';
import { RouterNavBar } from './router/RouterNavBar';
export const App=()=> {
  return (
   <>
  <MyProvider>
   <RouterNavBar/>
  </MyProvider>
   </>
  );
}


