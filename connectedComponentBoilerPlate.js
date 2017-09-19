import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { connect } from 'react-redux';


class connectedComponentBoilerPlate extends Component {
    componentWillMount(){} //when render

    render() {
        return (
            <Text>Boiler Plate for class component</Text>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps,null)(connectedComponentBoilerPlate);

