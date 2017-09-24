// containers are "smart" react components that are aware of redux
// they are connected to the redux store and listen on part of the app state
// they use mapStateToProps to specify which parts and use selectors to read them
// Smart components are not allowed to have any logic except dispatching actions.
// avoid having view logic & local component state in them, use "dumb" components instead

import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { connect } from 'react-redux';

import * as <domain>Selectors from '../store/<domain>/reducer'

class <ComponentName> extends Component {
    componentWillMount(){} //when render

    render() {
        return (
            <Text>{this.props.a}</Text>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        a: <domain>Selectors.gatA(state)
    };
}

export default connect(mapStateToProps)(<ComponentName>);
