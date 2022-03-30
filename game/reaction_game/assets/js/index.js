var start_time=0;
var end_time=0;

const start=()=>{
    document.getElementById('light').style.backgroundColor="yellow";
    document.getElementById('go').disabled="";
    var times=[2000,4000,6000,8000,10000];
    var ram= times[Math.floor(Math.random()*times.length)];
    // console.log(ram);
    setTimeout(() => {
        start_time=performance.now();
        document.getElementById('light').style.backgroundColor="green";
    }, ram);
}

const record=()=>{
    end_time=performance.now();
    var time_taken=end_time-start_time;
    time_taken=time_taken/1000;
    document.getElementById('status').innerHTML="You took "+time_taken+" seconds to respond";
    document.getElementById('go').disabled="true";
}