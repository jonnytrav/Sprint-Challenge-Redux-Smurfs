import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL
} from "../actions";

const initialState = {
  smurfs: [{ name: "Brainey", age: 200, height: "5cm" }],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    default:
      return state;
  }
};

//THANK YOU SO MUCH FOR BELOW COMMENTATION

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
