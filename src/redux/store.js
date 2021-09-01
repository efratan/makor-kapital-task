import { createStore } from 'redux'
import produce from 'immer'
import Jsonh from './data.json'


const coins = Jsonh
const reducer = produce((state, action) => {
    switch (action.type) {

    }
}, coins)

const store = createStore(reducer);
window.store = store;
export default store;