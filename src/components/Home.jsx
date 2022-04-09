import Clients from './Clients';
import Main from './Main';
import Services from './Services';
import Steps from './Steps';
import Why from './Why';

function Home() {
    return (
      <>
        <Main/>
        <Steps/>
        <Why/>
        <Services/>
        <Clients/>
        </>
    );
  }
  
  export default Home;