import React, { Component } from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'react表单',
            name: '',
            sex: '1',
            citys: ['北京', '上海', '深圳'],
            city:'',
            hobby: [
                { title: '睡觉', checked: true },
                { title: '吃饭', checked: false },
                { title: '敲代码', checked: true },
            ],
            info: ''
        };
    }
    handelSubmit = (e) => {
        // 阻止 submit 提交
        e.preventDefault();
        console.log(this.state.city)
    }
    handelName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    handelSex = (e) => {
        this.setState({
            sex:Number(e.target.value)
        })
    }
    getSelect = (e) => {
        this.setState({
            city:e.target.value
        })
    }
    getCheckBox = (key) => {
        var hobby = this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handelName} />
                    <input type="submit" defaultValue="提交" />
                    性别：<input type="radio" checked={this.state.sex===1} value="1" onChange={this.handelSex}/>男
                         <input type="radio" checked={this.state.sex===0} value="0" onChange={this.handelSex}/>女

                    居住城市：
                    <select value={this.state.city} onChange={this.getSelect}>
                        {this.state.citys.map((v,i)=>{
                            return <option value={i} key={i}>{v}</option>
                        })}
                    </select>

                    爱好
                    {this.state.hobby.map((v,i)=>{
                            return (
                                <span>
                                   <input type="checkbox" checked={v.checked} key={i} onChange={this.getCheckBox.bind(this,i)}/> {v.title}
                                </span>
                            ) 
                        })}
                </form>
            </div>
        );
    }
}

export default ReactForm;