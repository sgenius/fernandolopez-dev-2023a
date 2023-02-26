import React from 'react';

export interface Mosaic2State {
    currentImageSet: number;
}

const INITIAL_STATE: Mosaic2State = {
    currentImageSet: 0,
};

type Mosaic2Action = {
    type: 'setCurrentImageSet',
    imageSet: number,
};

interface Mosaic2ContextInterface {
    state: Mosaic2State;
    dispatch: React.Dispatch<Mosaic2Action>;
}

const Mosaic2StateContext = React.createContext<Mosaic2ContextInterface | undefined>(undefined);

const reducer = (state: Mosaic2State, action: Mosaic2Action) => {
    switch(action.type) {
        case 'setCurrentImageSet': {
            return {
                ...state,
                currentImageSet: action.imageSet,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

interface Mosaic2StateProviderProps {
    children: React.ReactNode;
}

export const Mosaic2StateProvider: React.FC<Mosaic2StateProviderProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

    const value = { state, dispatch };
    return (
        <Mosaic2StateContext.Provider value={value}>
            {children}
        </Mosaic2StateContext.Provider>
    )
}

export const useMosaic2State = () => {
    const context = React.useContext(Mosaic2StateContext)
    if (context === undefined) {
        throw new Error('useMosaic2State must be called within the context provider');
    }
    return context;
}