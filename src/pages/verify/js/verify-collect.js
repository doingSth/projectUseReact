$.cookie = {get: function(name) {
        var i, c, ret, nameEQ = name + "=", ca = document.cookie.split(";");
        for (i = 0; i < ca.length; i++) {
            for (c = ca[i]; " " == c.charAt(0); )
                c = c.substring(1, c.length);
            if (0 == c.indexOf(nameEQ)) {
                try {
                    ret = decodeURIComponent(c.substring(nameEQ.length, c.length))
                } catch (e) {
                    ret = unescape(c.substring(nameEQ.length, c.length))
                }
                return ret
            }
        }
        return null
    },set: function(name, value, days, path, domain, secure) {
        var expires, date;
        "number" == typeof days ? (date = new Date, date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = date.toGMTString()) : expires = "string" == typeof days ? days : !1, document.cookie = name + "=" + encodeURIComponent(value) + (expires ? ";expires=" + expires : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "")
    },remove: function(name, path, domain, secure) {
        this.set(name, "", -1, path, domain, secure)
    }};
var verify = new function() {
    function getSequence() {
        for (var a, b, c, d, arr = [6, 1, 5, 3, 0, 7, 2, 4], result = [], i = 0, l = arr.length; l > i; )
            a = arr[i], b = a + l, c = a + (l << 1), d = b + (l << 1), result[i++] = a, result[2 * l - i] = b, result[3 * l - i] = c, result[4 * l - i] = d;
        return result
    }
    function getCss(elm) {
        return {left: ( $(elm).offset() && $(elm).offset().left || 0) - verifyLeft,top: ($(elm).offset()&& $(elm).offset().top||0) - verifyTop,width: $(elm).width(),height: $(elm).height()}
    }
    function random(min, max) {
	    return Math.floor(min + Math.random() * (max - min));
	}
    var now, startTime, coordW, coordH, space, validate, challenge = "", wordCount = "", 
	_this = this, collectData = {}, cache = {},
	$verifyImgSprites = $("#verify-img-sprites"), $verify = $("#verify"), $verifyBody = $("#verify-body"), 
	$reload = $("#verify-reload"), $info = $("#verify-info"), $submit = $("#verify-submit"),
        verifyLeft = $verify.offset()&&$verify.offset().left, verifyTop = $verify.offset()&&$verify.offset().top,
	 spritesLeft = $verifyImgSprites.offset()&&$verifyImgSprites.offset().left,
	spritesTop = $verifyImgSprites.offset()&&$verifyImgSprites.offset().top, spritesWidth = $verifyImgSprites.width(),
	spritesHeight = $verifyImgSprites.height(), 
	
	messenger = new Messenger("verifyIframe");
    messenger.addTarget(window.parent, "verifyParent"),
	messenger.listen(function(msg) {
        console.warn(msg);
        if (msg && (msg = msg.split("::"), "pos" === msg[0]))
            try {
                cache.pos = JSON.parse(msg[1]), collectData.triggerData = cache.pos, collectData.triggerButton = cache.pos, collectData.mouseLeftClickData[0] = cache.pos
            } catch (e) {
                cache.pos = {}
            }
    }),
	 now = Date.now || function() {
        return +new Date
    },
	startTime = now(),
	this.initPos = function(){
    	var pos = {'height': 54, 'width': 282, 'left': 833, 'top': 252};
    	pos.x = pos.left + random(0,pos.width),pos.y = pos.top + random(0,pos.height),pos.t = +new Date-1000;
    	cache.pos = pos, collectData.triggerData = cache.pos, collectData.triggerButton = cache.pos, collectData.mouseLeftClickData[0] = cache.pos;
    }, this.dataInit = function() {
        startTime = now(), collectData = {triggerData: cache.pos,triggerButton: cache.pos,refreshCount: 0,refreshButton: getCss($reload),submitButton: getCss($submit),mousemoveData: [],mouseLeftClickData: [],mouseLeftDownData: [],mouseLeftUpData: [],mouseRightClickData: [],mouseRightDownData: [],mouseRightUpData: [],valuableClickData: [],mouseClickMaxCount: 20,mouseClickCount: 0,validateCount: 0,startTime: startTime,keydownData: [],captchaImage: {top: spritesTop,left: spritesLeft,width: spritesWidth,height: spritesHeight}}
    }, this.dataRefrush = function() {
        startTime = now(), collectData = {triggerData: cache.pos,triggerButton: cache.pos,refreshCount: collectData.refreshCount + 1,refreshButton: getCss($reload),submitButton: getCss($submit),mousemoveData: [],mouseLeftClickData: [],mouseLeftDownData: [],mouseLeftUpData: [],mouseRightClickData: [],mouseRightDownData: [],mouseRightUpData: [],valuableClickData: [],mouseClickMaxCount: 20,mouseClickCount: 0,validateCount: 0,startTime: startTime,keydownData: [],captchaImage: {top: spritesTop,left: spritesLeft,width: spritesWidth,height: spritesHeight}}
    }, startTime = now(), this.dataVerifyError = function() {
        startTime = now(), collectData = {triggerData: cache.pos,triggerButton: cache.pos,refreshCount: 0,refreshButton: getCss($reload),submitButton: getCss($submit),mousemoveData: [],mouseLeftClickData: [cache.submit],mouseLeftDownData: [],mouseLeftUpData: [],mouseRightClickData: [],mouseRightDownData: [],mouseRightUpData: [],valuableClickData: [],mouseClickMaxCount: 20,mouseClickCount: 0,validateCount: collectData.validateCount + 1,startTime: startTime,keydownData: [],captchaImage: {top: spritesTop,left: spritesLeft,width: spritesWidth,height: spritesHeight}}
    }, this.getImg = function() {
        //$.cookie.get("challenge") && (challenge = $.cookie.get("challenge"), $.cookie.remove("challenge", "/", "test.com")), 
        //$.cookie.get("wordCount") && $.cookie.remove("wordCount", "/", "test.com");
        //var src = "https://test.com/captcha/word/getcap/?t" + +new Date + "&challenge=" + (challenge || "");
    	var src = getImgUrl(+new Date);
        challenge = "", wordCount = "", 
		//mysprites = "<div class='verify-group'><i data-num='0' style='background: url(originalImage.jpg) -96px -0px; top:0px; left:0px;'></i><i data-num='1' style='background: url(originalImage.jpg) -16px -0px; top:0px; left:16px;'></i><i data-num='2' style='background: url(originalImage.jpg) -80px -0px; top:0px; left:32px;'></i><i data-num='3' style='background: url(originalImage.jpg) -48px -0px; top:0px; left:48px;'></i><i data-num='4' style='background: url(originalImage.jpg) -0px -0px; top:0px; left:64px;'></i><i data-num='5' style='background: url(originalImage.jpg) -112px -0px; top:0px; left:80px;'></i><i data-num='6' style='background: url(originalImage.jpg) -32px -0px; top:0px; left:96px;'></i><i data-num='7' style='background: url(originalImage.jpg) -64px -0px; top:0px; left:112px;'></i><i data-num='8' style='background: url(originalImage.jpg) -192px -0px; top:0px; left:128px;'></i><i data-num='9' style='background: url(originalImage.jpg) -160px -0px; top:0px; left:144px;'></i><i data-num='10' style='background: url(originalImage.jpg) -240px -0px; top:0px; left:160px;'></i><i data-num='11' style='background: url(originalImage.jpg) -128px -0px; top:0px; left:176px;'></i><i data-num='12' style='background: url(originalImage.jpg) -176px -0px; top:0px; left:192px;'></i><i data-num='13' style='background: url(originalImage.jpg) -208px -0px; top:0px; left:208px;'></i><i data-num='14' style='background: url(originalImage.jpg) -144px -0px; top:0px; left:224px;'></i><i data-num='15' style='background: url(originalImage.jpg) -224px -0px; top:0px; left:240px;'></i><i data-num='16' style='background: url(originalImage.jpg) -64px -100px; top:100px; left:0px;'></i><i data-num='17' style='background: url(originalImage.jpg) -32px -100px; top:100px; left:16px;'></i><i data-num='18' style='background: url(originalImage.jpg) -112px -100px; top:100px; left:32px;'></i><i data-num='19' style='background: url(originalImage.jpg) -0px -100px; top:100px; left:48px;'></i><i data-num='20' style='background: url(originalImage.jpg) -48px -100px; top:100px; left:64px;'></i><i data-num='21' style='background: url(originalImage.jpg) -80px -100px; top:100px; left:80px;'></i><i data-num='22' style='background: url(originalImage.jpg) -16px -100px; top:100px; left:96px;'></i><i data-num='23' style='background: url(originalImage.jpg) -96px -100px; top:100px; left:112px;'></i><i data-num='24' style='background: url(originalImage.jpg) -192px -100px; top:100px; left:128px;'></i><i data-num='25' style='background: url(originalImage.jpg) -160px -100px; top:100px; left:144px;'></i><i data-num='26' style='background: url(originalImage.jpg) -240px -100px; top:100px; left:160px;'></i><i data-num='27' style='background: url(originalImage.jpg) -128px -100px; top:100px; left:176px;'></i><i data-num='28' style='background: url(originalImage.jpg) -176px -100px; top:100px; left:192px;'></i><i data-num='29' style='background: url(originalImage.jpg) -208px -100px; top:100px; left:208px;'></i><i data-num='30' style='background: url(originalImage.jpg) -144px -100px; top:100px; left:224px;'></i><i data-num='31' style='background: url(originalImage.jpg) -224px -100px; top:100px; left:240px;'></i></div>";
		//$("#verify-img-sprites").html(mysprites), $("#verify-sm-img").html(mysprites)
		_this.sprites(src)
    }, this.sprites = function(src) {
        var i, len, num, sequence = getSequence(), sprites = '<div class="verify-group">', x = 16, y = 100, col = 16;
        for (i = 0, len = sequence.length; len > i; i++)
            num = i >= col ? 1 : 0, sprites += "<i data-num=" + i + ' style="background: url(' + src + ") -" + sequence[i] % col * x + "px -" + num * y + "px; top:" + num * y + "px; left:" + i % col * x + 'px;"></i>';
        sprites += "</div>", $("#verify-img-sprites").html(sprites), $("#verify-sm-img").html(sprites)
    }, coordW = 20, coordH = 24, space = 20, validate = !1, this.submitEnable = function() {
        $submit.removeClass("btn-disabled"), validate = !0
    }, this.submitDisable = function() {
        $submit.addClass("btn-disabled"), validate = !1
    }, this.cleanCoordinate = function() {
        $(".verify-coordinate").remove()
    }, this.infoDefault = function() {
        $info.html("换一组图片")
    }, this.infoChoice = function() {
        $info.html("再次点击图标可取消重选")
    }, this.infoError = function() {
        $info.html('<b class="verify-error">验证错误，请重新验证。</b>')
    }, this.infoFail = function(mess){
    	$info.html('<b class="verify-error" title="'+mess+'">'+mess+'</b>')
    },this.collectEvents = function() {
        $verify.bind("contextmenu", function(e) {
            console.warn("contextmenu");
            collectData.mouseRightClickData.length < collectData.mouseClickMaxCount && collectData.mouseRightClickData.push({t: now(),x: e.pageX,y: e.pageY})
        }), $verifyImgSprites.bind("click", function(e) {
            console.warn("$verifyImgSprites");
            var x, y, t, n, i, len, obj;
            console.warn(wordCount || (wordCount = $.cookie.get("wordCount"), $.cookie.remove("wordCount", "/", "test.com")), challenge || (challenge = $.cookie.get("challenge"), $.cookie.remove("challenge", "/", "test.com"), collectData.challenge = challenge), x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now(), n = collectData.valuableClickData.length + 1, collectData.mouseClickCount += 1, collectData.mouseLeftClickData.length < collectData.mouseClickMaxCount + 1 && collectData.mouseLeftClickData.push({t: t,x: x,y: y}), collectData.valuableClickData.length >= wordCount);
            if (wordCount || (wordCount = $.cookie.get("wordCount"), $.cookie.remove("wordCount", "/", "test.com")), challenge || (challenge = $.cookie.get("challenge"), $.cookie.remove("challenge", "/", "test.com"), collectData.challenge = challenge), x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now(), n = collectData.valuableClickData.length + 1, collectData.mouseClickCount += 1, collectData.mouseLeftClickData.length < collectData.mouseClickMaxCount + 1 && collectData.mouseLeftClickData.push({t: t,x: x,y: y}), collectData.valuableClickData.length >= wordCount)
                //return !1;
            for (i = 0, len = collectData.valuableClickData.length; len > i; i++)
                if (obj = collectData.valuableClickData[i], Math.abs(obj.x - x) < space && Math.abs(obj.y - y) < space)
                    return !1;
            wordCount = 4;
            _this.infoChoice(), $('<b class="verify-coordinate">' + n + "</b>").css({left: x - spritesLeft - .5 * coordW,top: y - spritesTop - .5 * coordH}).bind("click", function(e) {
                e.stopPropagation();
                var num = $(this).html() - 1;
                return $(".verify-coordinate").slice(num).remove(), collectData.valuableClickData = collectData.valuableClickData.slice(0, num), 0 === num && _this.infoDefault(), _this.submitDisable(), !1
            }).appendTo($verifyBody), collectData.valuableClickData.push({t: t,x: x,y: y}), collectData.valuableClickData.length == wordCount && _this.submitEnable()
        }).bind("mousedown", function(e) {
            console.warn("mousedown");
            console.warn(collectData);
            console.warn(collectData.mouseLeftDownData.length < collectData.mouseClickMaxCount);

            if (collectData.mouseLeftDownData.length < collectData.mouseClickMaxCount) {
                console.warn(e);
                console.warn($verify.offset());
                console.warn($verify.position());

                var x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now();
                collectData.mouseLeftDownData.push({t: t,x: x,y: y})
                console.warn(collectData);
            }
        }).bind("mouseup", function(e) {
            console.warn("mouseup");
            console.warn(collectData);
            console.warn(collectData.mouseLeftDownData.length < collectData.mouseClickMaxCount);
            if (collectData.mouseLeftUpData.length < collectData.mouseClickMaxCount) {
                console.warn(e);
                console.warn($verify.offset());
                console.warn($verify.position());
                var x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now();
                collectData.mouseLeftUpData.push({t: t,x: x,y: y})
                console.warn(collectData);
            }
        }).bind("mousemove", function(e) {
            console.warn("mousemove");
            if (collectData.mousemoveData.length < collectData.mouseClickMaxCount && now() - startTime >= 1e3) {
                console.warn(e);
                console.warn($verify.offset());
                console.warn($verify.position());

                var x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now();
                startTime = t, collectData.mousemoveData.push({t: t,x: x,y: y})
            }
        }), $(document).bind("keyup", function(e) {
            console.warn("keyup");
            collectData.keydownData.length < collectData.mouseClickMaxCount && collectData.keydownData.push({t: now(),k: e.keyCode})
        }), $reload.bind("click", function(e) {
            console.warn("$reload");
            var x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now();
            _this.reload(), collectData.mouseLeftClickData.push({t: t,x: x,y: y})
        }), $submit.bind("click", function(e) {
            console.warn("$submit");
            var x = e.pageX - verifyLeft, y = e.pageY - verifyTop, t = now();
            collectData.mouseClickCount += 1, cache.submit = {t: t,x: x,y: y}, collectData.mouseLeftUpData.length < collectData.mouseClickMaxCount && (collectData.mouseLeftDownData.push({t: t,x: x,y: y}), collectData.mouseLeftUpData.push({t: t,x: x,y: y})), collectData.mouseLeftClickData.length < collectData.mouseClickMaxCount + 1 && collectData.mouseLeftClickData.push({t: t,x: x,y: y}), _this.submit()
        })
    }, this.init = function() {
        $("body").bind("click", function() {
            console.warn("body");
            return !1
        }), $(window).bind("beforeunload", function() {
            console.warn("window beforeunload");
            $.cookie.remove("wordCount", "/", "test.com"), $.cookie.remove("challenge", "/", "test.com")
        }), this.getImg(), this.dataInit(),this.initPos(), this.collectEvents(), messenger.targets.verifyParent.send("init")
    }, this.reload = function() {
        this.infoDefault(), this.submitDisable(), this.cleanCoordinate(), this.dataRefrush(), this.getImg()
    }, this.error = function(mess) {
        mess ? this.infoFail(mess) : this.infoError(), this.submitDisable(), this.cleanCoordinate(), this.dataVerifyError(), this.getImg()
    }, this.submit = function() {
		//var challenge = "6bc2dcb4060ad1bea9bbd78a7f4ba0b8";
        var keys, collectibles, pData, data, i, len;
        if (!validate)
            //return !1;
        for (_this.submitDisable(), keys = CryptoJS.enc.Utf8.parse(challenge.slice(0, 16)), collectibles = CryptoJS.AES.encrypt(JSON.stringify(collectData), keys, {iv: keys,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(), pData = [], data = collectData.valuableClickData, i = 0, len = data.length; len > i; i++)
            pData.push(data[i].x + "," + data[i].y);
        
        collectData.resolution = [1366,768];
        collectData.plugins = 30;
        //原有的提交
        
		//登录提交的参数
	     //   var ajaxData = {'channelIdList':12,'needValidateCodeList':channelDicId+"_"+12,'isNew':0,'isTalent':0};
	        var code = JSON.stringify(collectData);//该参数代替之前的验证码即可
	        //ajaxData[channelDicId] = 12;
	        
	        $.ajax({
				url: verifyUrl,
				type: "post",
				dataType: "json",
				cache: !1,
				data: code,
				beforeSend:function(){
					_this.submitDisable();
	            },
				success: function(data) {
	                if(data.success) {//验证成功
	                	passValue(data.result);
	                } else {
						_this.error(data.msg);
	                	
	                }
	            },
				error: function(XMLHttpRequest, textStatus, errorThrown) {
				_this.error();
				}
				})
        
    },window.getLiePinVerificationCode=function(cb){
        var keys, collectibles, pData, data, i, len;
        if (!validate)
        //return !1;
            for (_this.submitDisable(), keys = CryptoJS.enc.Utf8.parse(challenge.slice(0, 16)), collectibles = CryptoJS.AES.encrypt(JSON.stringify(collectData), keys, {iv: keys,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(), pData = [], data = collectData.valuableClickData, i = 0, len = data.length; len > i; i++)
                pData.push(data[i].x + "," + data[i].y);

        collectData.resolution = [1366,768];
        collectData.plugins = 30;
        window["liePinVerificationCode"] = JSON.stringify(collectData);
        console.warn("window['liePinVerificationCode'] :"+window["liePinVerificationCode"]);
        cb&&cb();
    }
};
verify.init();