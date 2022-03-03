import { useState } from "react";

export const useData = ( initialState = 'es' ) => {

    const [ state, setState ] = useState(initialState);

    const getData = ( value ) => {
        setState(
            console.log( value )
        );
    }

    return {
        state,
        getData
    }
}