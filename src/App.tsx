import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import './style.scss';

interface Props extends RouteComponentProps {}

class App extends Component<Props> {
    handleRoute = () => {
        const { location, history } = this.props;
        const { pathname } = location;

        // 自动去首页
        if (pathname === '/') {
            history.push('index');
            return false;
        }
        return true;
    };

    render() {
        const { children } = this.props;
        return (
            <div className="box">{this.handleRoute() ? children : 'other'}</div>
        );
    }
}

export default App;
