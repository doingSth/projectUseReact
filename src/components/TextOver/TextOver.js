/**
 * Created by shen on 16/6/20.
 */
import React from 'react';
require('./textOver.css');
let TextOver = React.createClass({
    getInitialState(){
        return {
            text:undefined
        };
    },
    getCurrentStrWidth(text, font) {
        $("#getHeight").html(text);
        var width = $("#getHeight").width();
        var height = $("#getHeight").height();
        return height;
    },
    transferText(text){
        if(!text||text==""){
            return <p></p>
        }
        var pArray = text.split("\n");
        var rCount = this.props.rCount || 3;
        var cCount = this.props.cCount || 31;
        return pArray.map((pText, idx)=> {
            if (rCount > 0) {
                var height=this.getCurrentStrWidth(pText);
                var rc=Math.floor(height / 26);
                if (rCount<=rc) {
                    var content=pText;
                    if(pText.length>rCount * cCount){
                        content = pText.substring(0, rCount * cCount - 3)+"...";
                    }
                    rCount = 0;
                    return <p className="overTextP">{content}</p>
                }
                else {
                    rCount -= rc;
                    return <p className="overTextP">{pText}</p>
                }
            }
            else {
                return
            }
        });
    },
    componentDidMount() {
        this.state.text=this.props.text;
        this.setState(this.state);
    },
    componentDidUpdate(prevProps,prevState){
        if(this.state.text!=this.props.text){
            this.state.text=this.props.text;
            this.setState(this.state);
        }
    },
    render() {
        var pText=this.state.text?this.transferText(this.state.text):"";
        return (
            <div className="p-yq">
                {pText}
                <p id="getHeight" className="pTextForGetHeight"></p>
            </div>
        );
    }
});
export default TextOver