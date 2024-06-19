type stateType = {
    name: string,
    age: number,
    coundOfChildren: number,
    drugs: boolean
}
type actionType ={
    type: string,
    [key: string]: any,
}

export function userReducer(state:stateType, action: actionType) {
    switch(action.type) {
        case 'INCREMENT-CHILDREN':
            return {
                ...state,
                coundOfChildren: state.coundOfChildren + 1,
            }
        case 'INCREMENT-AGE': 
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE-NAME' :
            return {
                ...state, name: action.newName
            }
        default : throw new Error('Dont now this increment')
    }
}