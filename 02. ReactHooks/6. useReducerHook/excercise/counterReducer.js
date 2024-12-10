const initialState = {count : 0};

function counterReducer( state , action){
    console.log(action.paylaod);
    switch(action.type){
        case "increment" :
            return {count : state.count +1};
        case "decrement" :
            return {count : state.count -1};
        case "incrementByAmount" :
            return {count : state.count + action.payload};
        case "decrementByAmount" :
            return {count : state.count - Number(action.payload)};
        default:
            return state;
    }
}

export {initialState , counterReducer};