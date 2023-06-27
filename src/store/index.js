import {createStore} from 'redux'
const counteReducer=(state={counter:0},action)=>{
    if(action.type==='increment'){
        return{
            counter:state.counter+action.amount
     }
    }
    if(action.type==='increase'){
        return{
            counter:state.counter+action.amount
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-action.amount
     }
    }
    return state
}

const store=createStore(counteReducer)

export default store;