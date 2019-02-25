import React, {Component} from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Header = styled.div`
    color: rgba(0,0,0,0.8);
    font-size: 3em;
    font-family: Arial;
    text-align: center;
`

class App extends Component {
    render() {
        return <Header>Welcome to React Boilerplate App</Header>
    }
}

export default hot(App)