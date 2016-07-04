/**
 * Created by shen on 16/6/20.
 */
import React from 'react';
require('./textOver.css');
let TextOver = React.createClass({
    componentDidMount() {
        $('#TextOver-cpn'+this.props.id).dotdotdot();
    },
    componentDidUpdate(prevProps,prevState){
        $('#TextOver-cpn'+this.props.id).dotdotdot();
    },
    render() {
        return (
            <div id={"TextOver-cpn"+this.props.id} className="TextOver-cpn">
                {this.props.text}
            </div>
        );
    }
});
export default TextOver