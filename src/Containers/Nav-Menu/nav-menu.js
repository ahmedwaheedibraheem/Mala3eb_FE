import React, { Component } from 'react';
import { Menu } from 'element-react';
import { Layout } from 'element-react';

class NavMeun extends Component {

    onOpen() {

    }
    
    onClose() {
    
    }
    render() {
        return (
            <>
                <Layout.Col span={8} style={{direction:'rtl',textAlign:'right'}}>
                
                    <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                        <Menu.SubMenu index="1" title={<span>المفضله</span>}>
                            <Menu.ItemGroup title="Group One">
                                <Menu.Item index="1-1">Option 1</Menu.Item>
                                <Menu.Item index="1-2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Group Two">
                                <Menu.Item index="1-3">Option 3</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.Item index="2">المتابعون</Menu.Item>
                        <Menu.Item index="3">المتابعين</Menu.Item>
                    </Menu>
                </Layout.Col>
            </>
        )
    }

}
export default NavMeun;
