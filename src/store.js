import {creatStore} from "redux";
const store= creatStore(rootReducer)
const initialState= {
   posts:[]
}
const rootReducer = function(state = initialState, action){
switch(action.type) {
}
return state;
}
export default store;

