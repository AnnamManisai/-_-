function Celcius() {
    var s=document.getElementById("w").value;
    var fahr=(s*1.8)+32;
    fah=fahr.toFixed(1);
    var res=document.getElementById("result").innerHTML="ReESULT(FARENHEIT): "+fah;
}
function Faren() {
    var u=document.getElementById("w").value;
    var Cel=(u-32)/1.8;
    ce=cel.toFixed(1);
    var res=document.getElementById("result").innerHTML="RESULT(CELCIUS): "+ce;
}
function Re() {
    document.getElementsById("w").value='';
    document.getElementById("result").innerHTML=" ";
}