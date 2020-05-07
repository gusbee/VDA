/**
 * Déclaration du state initial
 */
const initialState = {
    language: '',
    name: '',
    team: '',
}

/**
 * 
 * @param {*} state => objet
 * @param {*} action => object
 */
function handleProfile(state = initialState, action){
        let nextState //Déclaration de la variable qui représente la modification du state initial
        switch (action.type){
            case 'HANDLE_PROFILE':
                if(state.language !== action.value.language || state.name !== action.value.name || state.team !== action.value.team){
                    nextState = {
                        ...state,
                        language: action.value.language,
                        name: action.value.name,
                        team: action.value.team
                    }
                }
                return nextState || state
            default:
                return state // Si pas de changement détecté, on retourn le state initial
        }
}

export default handleProfile