import missionsSteps from "../../data/missionsSteps"

/**
 * Déclaration du state initial
 */
const initialState = {
    mission1:{
        title: "Mission 1",
        unlocked: true,
        done: false,
        picture: require('../../images/missions/mission1.png'),
        steps: missionsSteps.mission1
    },
    mission2:{
        title: "Mission 2",
        unlocked: false,
        done: false,
        picture: require('../../images/missions/mission2.png'),
        steps: missionsSteps.mission2
    }
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