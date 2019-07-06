import {createStore,combineReducers} from 'redux'
import usersReducer from '../reducers/r-user'

const configureStore=()=>{
    const store=createStore(combineReducers({
        user:usersReducer
    }))
    return store
}
export default configureStore 