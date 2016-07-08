/**
 * Created by shen on 16/5/30.
 */
import React from 'react';
require('./demo.css');
let Demo = React.createClass({
    getInitialState(){

        return {
            text: "锄禾日当午,"
        };
    },
    componentWillMount(){

    },
    componentDidMount() {
        this.loadJs("passPortLogin", "http://f2e.dp:3002/es/by/verify-collect.js", ()=> {
            console.warn("load end");
        });
    },
    componentWillReceiveProps(nextProps){

    },
    shouldComponentUpdate(nextProps, nextState) {

        return true;
    },
    componentWillUpdate(nextProps, nextState){

    },
    componentDidUpdate(prevProps, prevState){

    },
    componentWillUnmount(){

    },
    loadJs(sid, jsurl, callback) {
        var nodeHead = document.getElementsByTagName('head')[0];
        var nodeScript = null;
        if (document.getElementById(sid) == null) {
            nodeScript = document.createElement('script');
            nodeScript.setAttribute('type', 'text/javascript');
            nodeScript.setAttribute('src', jsurl);
            nodeScript.setAttribute('id', sid);
            if (callback != null) {
                nodeScript.onload = nodeScript.onreadystatechange = function () {
                    if (nodeScript.ready) {
                        return false;
                    }
                    if (!nodeScript.readyState || nodeScript.readyState == "loaded" || nodeScript.readyState == 'complete') {
                        nodeScript.ready = true;
                        callback();
                    }
                };
            }
            nodeHead.appendChild(nodeScript);
        } else {
            if (callback != null) {
                callback();
            }
        }
    },

    login() {

        this.state["showLogin"] = true;
        this.setState(this.state);
        var that = this;
        //document.getElementById("login").innerHTML="<div className=\"loginDiv\" id=\"login\"> <img src=\"/static/login_img.png\"/> </div>";
        this.loadJs("passPortLogin", "http://passport.meituan.com/account/fetchunitiveloginscript", ()=> {
            passport.init({
                env: window["BAPP"]["passportDomainUrl"],
                ndContentWrapper: document.getElementById("login"),
                extraCallback: function () {
                    that.state["showLogin"] = false;
                    that.setState(that.state);
                    window.location.reload();
                }
            });
            passport.login({
                service: '72c5906e',
                continue: location.origin + "/pass/settoken?continue=" + encodeURIComponent(location.href)
            });
        });

    },
    render() {
        return (
            <div className="verify" id="verify">
                <div className="verify-container">
                    <div className="verify-header">
                        <span className="txt">请顺序点击大图中的文字</span>
                        <div className="verify-sm-img" id="verify-sm-img">
                            <div className="verify-group">
                            </div>
                        </div>
                    </div>
                    <div className="verify-body" id="verify-body">
                        <div className="verify-img-sprites" id="verify-img-sprites">
                            <div className="verify-group">
                            </div>
                        </div>
                    </div>
                    <div className="verify-footer">
                        <a href="javascript:;" id="verify-submit" className="btn btn-primary btn-disabled">验证</a>
                        <a href="javascript:;" id="verify-reload" className="verify-reload">
                            <i class="icons icons-reload"></i>
                        </a>
                        <span id="verify-info">换一组图片</span>
                    </div>
                </div>
            </div>
        );
    }
});
export default Demo