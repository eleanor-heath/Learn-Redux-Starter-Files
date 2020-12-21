// a reducer takes in two things:
// 1. action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
    console.log("the post will change");
    console.log(state, action);
    // Pure functions and impure functions -
    // it is a pure function when ever time you call the function you get a different result

    // take a copy

    //take a blank object and apply each of the pictures properties onto the blank object
    // var pic = Object.assign({}, picture);
    // pic.likes++;
    // console.log(pic);
    // return state;


    switch(action.type) {
        case 'INCREMENT_LIKES' :
            //return the updated state
            console.log('"incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1}, //this is the post we want to update
                ...state.slice(i + 1), //after the one we are updating
            ]
        default:
            return state
    }
}

export default posts;