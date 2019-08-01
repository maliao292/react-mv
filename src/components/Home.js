import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../assets/css/index.css';
// import Header from './Header'
import { Button,Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
class Home extends React.Component {

    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象

    constructor(props) {
        super(props);   //固定写法

        this.state = {

            collapsed: false,
            msg: '我是一个HEARDERhome组件',

            message: '我是一个message',

            username: 'itying'

        }

        //第二种改变this指向的方法

        this.getMessage = this.getMessage.bind(this);

    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    run() {
        alert('我是一个run方法')

    }

    getData() {

        alert(this.state.msg);
    }


    getMessage() {

        alert(this.state.message);
    }

    getName = () => {

        alert(this.state.username);
    }



    //第三种改变this指向的方法
    setData = () => {

        //改变state的值

        this.setState({

            msg: "我是一个home组件 这是改变后的值"
        })

    }

    setName = (str) => {

        //改变state的值

        this.setState({

            username: str
        })

    }
    inputChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getval = () => {
        console.log(this.state.username)
    }
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
                <br />
                <Icon type="step-backward" className="fir" />
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            Content
          </Content>
                    </Layout>
                </Layout>
                <br />
                {/* <Header></Header>   */}
                <button><Link to={`/login`}>跳转到登录</Link></button>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.username}</h2>


                <button onClick={this.run}>执行方法</button>

                <br />
                <br />

                <button onClick={this.getData.bind(this)}>获取数据--第一种改变this指向的方法</button>

                <br />
                <br />

                <button onClick={this.getMessage}>获取数据--第二种改变this指向的方法</button>


                <br />
                <br />

                <button onClick={this.getName}>获取数据--第三种改变this指向的方法</button>


                <br />
                <br />

                <button onClick={this.setData}>改变state里面的值</button>



                <br />
                <br />

                <button onClick={this.setName.bind(this, '张三')}>执行方法传值</button>



                {/* <button onClick={this.setName.bind(this,'张三','李四')}>执行方法传值</button> */}
                <h2> 表单事件</h2>
                <input type="text" onChange={this.inputChange} />
                <button onClick={this.getval}>获取input值</button>
            </div>
        )

    }
}
export default Home;
