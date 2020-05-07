import markersHLM from './markersHLM'

export default [
    {
        id: 1,
        title: 'Mission 1',
        status: true,
        done: true,
        picture: require('../images/missions/mission1.png'),
        markers: markersHLM.mission1
    },
    {
        id: 2,
        title: 'Mission 2',
        status: true,
        done: false,
        picture: require('../images/missions/mission2.png'),
        markers: markersHLM.mission1,
        checkMode: 'quizz',
        checkElements: [
            'boulangerie',
            'supermarché',
            'garage',
            'bar'
        ],
        checkAnswer: 'supermarché'
    },
    {
        id: 3,
        title: 'Mission 3',
        status: false,
        done: false,
        picture: require('../images/missions/mission1.png')
    },
    {
        id: 4,
        title: 'Mission 4',
        status: false,
        done: false,
        picture: require('../images/missions/mission1.png')
    },
    {
        id: 5,
        title: 'Mission 5',
        status: false,
        done: false,
        picture: require('../images/missions/mission1.png')
    },
    {
        id: 6,
        title: 'Mission 6',
        status: false,
        done: false,
        picture: require('../images/missions/mission1.png')
    }
]