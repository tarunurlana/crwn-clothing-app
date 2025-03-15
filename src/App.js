import Home from './routes/home/home.compoment';
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation-bar/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />  
        <Route path='Shop' element={<h1>HI  shop </h1>} />
        <Route path='Sign' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
