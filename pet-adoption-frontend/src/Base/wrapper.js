import React, {createContext, useContext, useState} from 'react';
import {RenderRoutes} from "./RenderNavigation";
import { QueryClient, QueryClientProvider } from 'react-query';
import {defaultPersonState} from "../collection";


// file responsibility
/*
* - have the context creation.
* - useAuthGlobalData function.
* - associated operations about Global data.
* */


// needed to be updated...
// when a component does not find a matching Provider above it in the component tree
const AuthContext = createContext();
export const GetAuthDataFn = () => useContext(AuthContext);

function Wrapper() {
    /*
    * firstly define state that
    * have all needed global data.
    * */
    const [person, setPerson] = useState(defaultPersonState());

    /*
    * create a query client
    */
    const queryClient = new QueryClient();

    return (
        <AuthContext.Provider value={{person, setPerson}}>
            <QueryClientProvider client={queryClient}>
                <RenderRoutes />
            </QueryClientProvider>
        </AuthContext.Provider>
    );
}

export default Wrapper;