import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// take a regular Main component (div etc)
// add all of the props/data and action creators
// kind of like interpolation
const App = connect(mapStateToProps, mapDispatchProps)(Main);

export default App;