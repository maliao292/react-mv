import React, { Component } from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'react表单',
            name: '',
            sex: '1',
            citys: ['北京', '上海', '深圳'],
            hobby: [
                { title: '睡觉', checked: true },
                { title: '吃饭', checked: false },
                { title: '敲代码', checked: true },
            ],
            info: ''
        };
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ReactForm;