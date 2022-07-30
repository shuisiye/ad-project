import React, { Component } from 'react';
import { Button } from 'antd';

interface Props {}

class IndexPage extends Component<Props> {
    render() {
        return (
            <div>
                <span>index page</span>
                <Button type="primary">按钮</Button>
            </div>
        );
    }
}

export default IndexPage;
