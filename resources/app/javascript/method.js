var arr = new Array()
var str1 = "那个冒泡泡的曾经，真是太幸福了。"
var str2 = "想你的心克制不住，不过是因为想你了。"
var str3 = "守护着你的未来，因为我要参与其中。"
var str4 = "阳光正好，你也正好。"
var str5 = "希望我能给你一生幸福，让你此生安乐。"
var str6 = "以梦为马,诗酒趁年华."
var str7 = "所爱隔山海，山海亦可平。"
arr.push(str1,str2,str3,str4,str5,str6,str7)
var arr = new Array();
var str1 = "那个冒泡泡的曾经，真是太幸福了。";
var str2 = "想你的心克制不住，不过是因为想你了。";
var str3 = "守护着你的未来，因为我要参与其中。";
var str4 = "阳光正好，你也正好。";
var str5 = "希望我能给你一生幸福，让你此生安乐。";
var str6 = "以梦为马,诗酒趁年华."
arr.push(str1,str2,str3,str4,str5,str6)
// 展示文字
function showText(event){
  var random = Math.floor(Math.random()*arr.length);  //可均衡获取0到数组长度的的随机整数。
  $(event).text(arr[random]);
}
// 显示小组件
function showButton(){
  show(".close");
  show(".add");
  show(".song");
}
// 隐藏元素
function hide(event){
  $(event).css("opacity","0")
  console.log("hide")
}
// 显示元素
function show(event){
  $(event).css("opacity","1")
  console.log("show")
}
// 添加语句
function addText(event){
  alert("添加功能正在开发中...")
  arr.push(event)
}