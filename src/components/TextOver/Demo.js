/**
 * Created by shen on 16/6/20.
 */
import React from 'react';
import TextOver from './TextOver';
require('./demo.css');
let Demo = React.createClass({
    getInitialState(){
        console.warn("getInitialState");
        return {
            a:"锄禾日当午,"
        };
    },
    onclick(){
        debugger;
        this.state.a="dasdasdsad";
        this.setState(this.state);
    },
    render() {
        console.warn(this.state.a);
        return (
            <div className="demo">
                <TextOver id="0" text="自动换行超出省略,实现思路1.超出不显示 2.末尾处加省略号(覆盖) 提示:显示行数等于div高度除以字体高度.测试测试"
                          className="textOver"></TextOver>
                <TextOver id="3" text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                          className="textOver"></TextOver>
                <TextOver id="5" text="1.1.1.1.1.1.(已)(溢)(一)主要负责的aa工作包括财务、语言(英语)、电脑操作三方面.1.根据每天收到的现金以及各种兑换产品的相关凭证"
                          className="textOver"></TextOver>
                <TextOver id="8" text="主要负责协a助公司财务办公室完成日常事务.为会计完成装订会计凭证、去税局办理外经证等工作.为出纳去银行完成取回单、送支票等业务.为财务总监准备出差资料、打印合同."
                          className="textOver"></TextOver>
                <TextOver id="9" text={this.state.a}
                          className="textOver"></TextOver>
                <p id="getxia" className="ptext">主要负责协a助公司财务办公室完成日常事务.为会计完成装订会计凭证、去税局办理外经证等工</p>
                <a onClick={()=>this.onclick()}>点击</a>
                <div>参数说明:
                    <li>text:区域内显示的文字</li>
                    <pre>
                        <ol>
                            <li><span>position: relative;</span></li>
                            <li><span>line-height: 1.47em;</span></li>
                        </ol>
                    </pre>
                </div>
                <div className="diplayIn">,</div>
                <div className="diplayIn">1</div>
                <div className="diplayIn">一</div>
                <div className="diplayIn">a</div>
                <div className="diplayIn">.</div>
                <div className="diplayIn">、</div>
            </div>
        );
    }
});
export default Demo