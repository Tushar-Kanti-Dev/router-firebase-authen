import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>This is Home</h1>
            <h2>Current User: {user? user.displayName : 'No User'}</h2>
        </div>
    );
};

export default Home;