import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {Provider} from 'react-redux'
import {setUser} from "./action/a-user"
import App from './App'
import configureStore  from "./store/configurationStore"

const store = configureStore ()

store.subscribe(()=>{
    console.log("redux store state", store.getState())
})

if(localStorage.getItem('userAuthToken')) {
    
    axios.get('http://localhost:3006/users/account', {
            headers: {
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            store.dispatch(setUser(response.data));
        })
    }

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

