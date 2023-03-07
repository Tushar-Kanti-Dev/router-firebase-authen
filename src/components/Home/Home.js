import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);
const Home = () => {
    // const {user} = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Home</h1>
            <h2>Current User: {user? user.displayName : 'No User'}</h2>
        </div>
    );
};

export default Home;