var origincode = " while(a>4){a += 1;}";
var numWhile  = origincode.search(/while/);//1
var newcode1 = origincode.replace(/while/, "var startTime=new Date();var a; while"); //插入了start声明
var lastHalfCode = origincode.substring(numWhile+5);//返回while之后的字符串
var newnumWhile = newcode1.search(/while/)+5; //插入start声明后while中的e所在位置
var firstHalfCode = newcode1.substring(1,newnumWhile);//截取插入start声明后的前半部分字符串，直到while
var num2 = lastHalfCode.search(/{/);//查找到while的{所在位置
var newcode2 = lastHalfCode.replace(/{/,"{if (Date.now() - startTime > 1000) {throw new Error('Loop running too long!')};");//替换加入判断时间代码
var finalcode = firstHalfCode + newcode2;
var test = "var a=1; var b=2; var c=a+b; console.log(c);";

console.log(eval(finalcode));
