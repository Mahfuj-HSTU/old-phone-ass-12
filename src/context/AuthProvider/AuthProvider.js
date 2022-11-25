import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/Firebase.confing';


export const AuthContext = createContext();
const auth = getAuth( app )

const AuthProvider = () => {
    const [ user, setUser ] = useState( 'Mahfuj' )

    const authInfo = { user }
    return (
        <AuthContext.Provider value={ authInfo }>

        </AuthContext.Provider>
    );
};

export default AuthProvider;
