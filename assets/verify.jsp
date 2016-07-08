<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="../../include.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>验证码</title>
    <link href="<as:cssUrl value="/styles/v7/verify.css"/>" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="verify" id="verify">
    <div class="verify-container">
        <div class="verify-header">
            <span class="txt">请顺序点击大图中的文字</span>
            <div class="verify-sm-img" id="verify-sm-img">
            <div class="verify-group">
            </div>
            </div>
        </div>
        <div class="verify-body" id="verify-body">
            <div class="verify-img-sprites" id="verify-img-sprites">
            <div class="verify-group">
            </div>
            </div>
        </div>
        <div class="verify-footer">
            <a href="javascript:;" id="verify-submit" class="btn btn-primary btn-disabled">验证</a>
            <a href="javascript:;" id="verify-reload" class="verify-reload">
                <i class="icons icons-reload"></i>
            </a>
            <span id="verify-info">换一组图片</span>
        </div>
    </div>
</div>
<script type="text/javascript">

var count = 1;
//验证码图片地址
function getImgUrl(t){
	var imgUrl =  "<as:tokenUrl value="/talentPool/channel/showValidateCode!showVerifyImg"/>"+ "&t" + t;
	if(count>1){
		imgUrl =  imgUrl+"&change=0";
	}
	count++;
	return imgUrl;
}
//点击验证请求地址
var verifyUrl ='<as:tokenUrl value="/talentPool/channel/saveChannelStatus"/>';
</script>
<script type="text/javascript" src="<as:jsUrl value="/javascript/v7/jquery-1.8.2.min.js"/>"></script>

<script type="text/javascript" src="<as:jsUrl value="/javascript/artDialog4/artDialog.js"/>"></script> 
<script type="text/javascript" src="<as:jsUrl value="/javascript/artDialog4/plugins/iframeTools.js"/>"></script>
<link type="text/css" href="<as:cssUrl value="/javascript/artDialog4/skins/default.css"/>" rel="stylesheet"/>

<script type="text/javascript" src="<as:jsUrl value="/javascript/other/crypto-js-aes.min.js"/>"></script>
<script type="text/javascript" src="<as:jsUrl value="/javascript/other/json2.js"/>"></script>
<script type="text/javascript" src="<as:jsUrl value="/javascript/other/messenger.js"/>"></script>
<script type="text/javascript" src="<as:jsUrl value="/javascript/other/verify-collect.js"/>"></script>
<script type="text/javascript">

//
function passValue(data){
	//console.log("passValue:"+data);
	if(artDialog && artDialog.open && artDialog.open.origin){
		artDialog.open.origin.handLoginResult(data);
	}
	art.dialog.close();
}
</script>
</body>
</html>
