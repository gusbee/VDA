import missionsSteps from "../../data/missionsSteps"
import missionsData from "../../data/missionsData"

/**
 * Déclaration du state initial 
 * MissionX: [unlocked, done, data]
 */
const initialState = {
    mission1: [true, false, missionsData[0]],
    mission2:[false, false, missionsData[1]]
}

/**
 * 
 * @param {*} state => objet
 * @param {*} action => object
 */
function handleMission(state = initialState, action){
        let nextState //Déclaration de la variable qui représente la modification du state initial
        switch (action.type){
            case 'HANDLE_MISSION_DONE':
                switch(action.value.missionID){
                    case "mission1":
                        if(state.mission1.done != action.value.done){
                            nextState = {
                                ...state,
                                mission1:{
                                    ...mission1,
                                    done: action.value.done
                                }
                            }
                        }
                        break
                    case "mission2":
                        if(state.mission22.done != action.value.done){
                            nextState = {
                                ...state,
                                mission2:{
                                    ...mission2,
                                    done: action.value.done
                                }
                            }
                        }
                    break
                }                    
                return nextState || state
            default:
                return state // Si pas de changement détecté, on retourn le state initial
        }
}

export default handleMission