import React from 'react';
import './App.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Schemes from './Components/Schemes';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Agriculture from './Components/Schemes/Agriculture';
import Arts from './Components/Schemes/Artsandculture';
import Commerce from './Components/Schemes/Commerce';
import Communication from './Components/Schemes/Communicationandit';
import Defence from './Components/Schemes/Defence';
import Education from './Components/Schemes/Education';
import Environment from './Components/Schemes/Environmentandforest';
import Finance from './Components/Schemes/Financeandtaxes';
import Food from './Components/Schemes/Foodandpublicdistribution';
import Foreign from './Components/Schemes/Foreignaffairs';
import Governance from './Components/Schemes/GovernanceandAdministration';
import Health from './Components/Schemes/Healthandfamilywelfare';
import Homeaffairs from './Components/Schemes/Homeaffairsandenforcement';
import Housing from './Components/Schemes/Housing';
import Industries from './Components/Schemes/Industries';
import Information from './Components/Schemes/Informationandbroadcasting';
import Infrastructure from './Components/Schemes/Infrastructure';
import Labour from './Components/Schemes/Labourandemployement';
import Law from './Components/Schemes/Lawandjustice';
import Power from './Components/Schemes/Powerandenergy';
import Rural from './Components/Schemes/Rural';
import Science from './Components/Schemes/Scienceandtechnology';
import Social from './Components/Schemes/Socialdevelopment';
import Transport from './Components/Schemes/Transport';
import Travel from './Components/Schemes/Travelandtourism';
import Youth from './Components/Schemes/Youthandsports';
import Frontpage from './Components/Frontpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Frontpage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/schemes" element={<Schemes/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/agriculture" element={<Agriculture/>}/>
      <Route path="/arts" element={<Arts/>}/>
      <Route path="/commerce" element={<Commerce/>}/>
      <Route path="/communication" element={<Communication/>}/>
      <Route path="/defence" element={<Defence/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/environment" element={<Environment/>}/>
      <Route path="/finance" element={<Finance/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/foreign" element={<Foreign/>}/>
      <Route path="/governance" element={<Governance/>}/>
      <Route path="/health" element={<Health/>}/>
      <Route path="/homeaffairs" element={<Homeaffairs/>}/>
      <Route path="/housing" element={<Housing/>}/>
      <Route path="/industries" element={<Industries/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/infrastructure" element={<Infrastructure/>}/>
      <Route path="/labour" element={<Labour/>}/>
      <Route path="/law" element={<Law/>}/>
      <Route path="/power" element={<Power/>}/>
      <Route path="/rural" element={<Rural/>}/>
      <Route path="/science" element={<Science/>}/>
      <Route path="/social" element={<Social/>}/>
      <Route path="/transport" element={<Transport/>}/>
      <Route path="/travel" element={<Travel/>}/>
      <Route path="/youth" element={<Youth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
