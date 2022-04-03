var start_time=0;
var end_time=0;
var total_time=0;
var button_id=0;
var n=0;
const go=()=>{
    var a1=[1,2,3,4,5,6,7,8,9,10,11,12];
    button_id=a1[Math.floor(Math.random()*a1.length)];
    start_time=performance.now();
    // console.log(button_id);
    document.getElementById(button_id).disabled="";
    document.getElementById(button_id).style.backgroundColor="green";
}
const start=()=>{
    n=0;
    document.getElementById('sub').innerHTML="Hit the buttons as they turn green";
    document.getElementById('st').disabled="true";
    document.getElementById('st').style.backgroundColor="red";
    setTimeout(go,1000);
}
const record=()=>{
    end_time=performance.now();
    total_time=total_time+(end_time-start_time);
    n++;
    document.getElementById(button_id).disabled="true";
    document.getElementById(button_id).style.backgroundColor="black";
    if(n==10)
    {
        console.log(total_time);
        console.log(n);
        total_time=total_time/n;
        total_time=total_time/1000;
        console.log(total_time);
        document.getElementById('sub').innerHTML="You took "+total_time+" seconds to respond on average";
        document.getElementById('st').style.backgroundColor="green";
        document.getElementById('st').disabled="";
    }
    else
    {
        go();
    }
}