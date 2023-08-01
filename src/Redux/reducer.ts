import * as actionTypes from './actionTypes'

export interface IState {
    internetPrice: number
    minutePrice: number
    networkPrice: number
    wiFiPrice: number
}

const defaultState = {
    internetPrice: 0,
    minutePrice: 0,
    networkPrice: 0,
    wiFiPrice: 0,
}

export default function reducer(state:IState = defaultState, action: { type: any; payload: number }) {
    switch (action.type) {
        case actionTypes.INTERNET: {
            return {
                ...state,
                internetPrice: action.payload,
            }
        }

        case actionTypes.MINUTES: {
            return {
                ...state,
                minutePrice: action.payload,
            }
        }

        case actionTypes.WIFI: {
            return {
                ...state,
                wiFiPrice: action.payload,
            }
        }

        case actionTypes.SOCIAL: {
            return {
                ...state,
                networkPrice: action.payload,
            }
        }

        default:
            return state
    }
}
