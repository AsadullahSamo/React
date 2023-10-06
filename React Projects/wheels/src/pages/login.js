import Account from './components/Account';

export default function Login() {
  return (

    <main className='mt-24'>
      <Account question="Don't have an account?" access="Signup" redirect="/signup"/>
    </main>

  );
}

