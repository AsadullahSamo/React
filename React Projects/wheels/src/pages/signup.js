import Account from './components/Account';
import Navbar from './components/Navbar';

function Signup() {
  return (
    <>

      <Navbar />
        
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold my-10">Create New Account</h1>
      </div>
          
      <Account question="Already registered?" access="Login" redirect="/login"/>
        
    </>
  );
}

export default Signup;
