import missionsSteps from './missionsSteps'

export default [
    {
        id: 1,
        title: 'Mission 1',
        status: true,
        done: true,
        picture: require('../images/missions/mission1.png'),
        steps: missionsSteps.mission1,
    },
    {
        id: 2,
        title: 'Mission 2',
        status: true,
        done: false,
        picture: require('../images/missions/mission2.png'),
        steps: missionsSteps.mission2,
    },
    {
        id: 3,
        title: 'Mission 3',
        status: false,
        done: false,
        picture: require('../images/missions/mission2.png'),
        steps: missionsSteps.mission3,
    },
    {
        id: 4,
        title: 'Mission 4',
        status: false,
        done: false,
        picture: require('../images/missions/mission2.png'),
        steps: missionsSteps.mission4,
    },
    {
        id: 5,
        title: 'Mission 5',
        status: false,
        done: false,
        picture: require('../images/missions/mission2.png'),
        steps: missionsSteps.mission5,
    },
    {
        id: 6,
        title: 'Mission 6',
        status: false,
        done: false,
        picture: require('../images/missions/mission2.png'),
        steps: missionsSteps.mission6,
    }
]