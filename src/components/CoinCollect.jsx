import React, { useReducer } from 'react'

const initialState = {
    coin: 0,
    level: 1,
    bonous: 0
}

function coinReducer(state, action) {
    switch (action.type) {
        case "collectCoin":
            return { ...state, coin: state.coin + 1 }
        case "collect5Coin":
            return { ...state, coin: state.coin + 5 }
        case "Bonous":
            return { ...state, bonous: state.bonous + 10 }
        case 'LevelUp':
            return { ...state, level: state.level + 1 }
        case "reset":
            return { ...state, coin: 0, level: 1, bonous: 0 }
        default:
            return state;
    }
}

const CoinCollect = () => {
    const [state, dispatch] = useReducer(coinReducer, initialState)

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4 text-center" style={{ width: "400px" }}>
                <h1 className="mb-4 text-primary">🪙 Coin Collector</h1>

                <div className="mb-3">
                    <h5 className="text-warning">Coins: {state.coin}</h5>
                    <h5 className="text-success">Bonus: {state.bonous}</h5>
                    <h5 className="text-info">Level: {state.level}</h5>
                </div>

                <div className="d-grid gap-2">
                    <button 
                        className="btn btn-warning"
                        onClick={() => dispatch({ type: "collectCoin" })}
                    >
                        +1 Coin
                    </button>

                    <button 
                        className="btn btn-warning"
                        onClick={() => dispatch({ type: "collect5Coin" })}
                    >
                        +5 Coins
                    </button>

                    <button 
                        className="btn btn-success"
                        onClick={() => dispatch({ type: "Bonous" })}
                    >
                        +10 Bonus
                    </button>

                    <button 
                        className="btn btn-info"
                        onClick={() => dispatch({ type: "LevelUp" })}
                    >
                        Level Up
                    </button>

                    <button 
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: "reset" })}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoinCollect
