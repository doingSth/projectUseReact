/**
 * Created by shen on 16/5/30.
 */
import React from 'react';
let Demo = React.createClass({
    getInitialState(){
        console.warn("getInitialState");
        return {
            text:"锄禾日当午,"
        };
    },
    componentWillMount(){
        console.warn("componentWillMount");
        console.warn(this.state);
    },
    componentDidMount() {
        console.warn("componentDidMount");
    },
    componentWillReceiveProps(nextProps){
        console.warn("componentWillReceiveProps");
    },
    shouldComponentUpdate(nextProps, nextState) {
        console.warn("shouldComponentUpdate");
        return true;
    },
    componentWillUpdate(nextProps,nextState){
        console.warn("componentWillUpdate");
        console.warn(this.state);
    },
    componentDidUpdate(prevProps,prevState){
        console.warn("componentDidUpdate");
    },
    componentWillUnmount(){
        console.warn("componentWillUnmount");
    },
    onclickA(){
        this.state.text=this.state.text+ "举头望明月 !";
        this.setState(this.state);
    },
    render() {
        console.warn("render");
        return (
            <div>
                {this.state.text}<br/>
                <a onClick={()=>this.onclickA()}>点下我啊</a>
            </div>
        );
    }
});
export default Demo