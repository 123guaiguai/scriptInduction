// ==UserScript==
// @name:zh-CN   党课自动播放脚本         
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  可以自动点击暂停弹窗，自动播放党课
// @author       123guaiguai
// @match        https://dxpx.uestc.edu.cn/jjfz/lesson/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{
        window.location.href="https://www.bilibili.com/";
        setTimeout(()=>{
            window.location.href="https://github.com/";
        },2000)
    },2000)
    // Your code here...
})();