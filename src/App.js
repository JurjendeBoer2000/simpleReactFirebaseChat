import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth)
  return (
<div className='main'>
    {user ? <Chat/> : <SignIn/>}
</div>
  );
}

export default App;
