var player1="";
var player2="";
var turn=1;
const start=()=>{
    document.getElementById('Final').style.display="none";
    document.getElementById('Game').style.display="none";
    document.getElementById('form').style.display="block";
}
const initialize=()=>{
    player1=document.getElementById('p1').value;
    player2=document.getElementById('p2').value;
    document.getElementById('form').style.display="none";
    document.getElementById('Game').style.display="block";
    document.getElementById('Final').style.display="none";
    document.getElementById('status').innerHTML="<marquee>"+player1+", its your turn</marquee>";

    document.getElementById("a0").innerHTML="";
    document.getElementById("b0").innerHTML="";
    document.getElementById("c0").innerHTML="";
    document.getElementById("a1").innerHTML="";
    document.getElementById("b1").innerHTML="";
    document.getElementById("c1").innerHTML="";
    document.getElementById("a2").innerHTML="";
    document.getElementById("b2").innerHTML="";
    document.getElementById("c2").innerHTML="";
}
const check=()=>
{
    var a0=document.getElementById('a0').innerHTML;
    var a1=document.getElementById('a1').innerHTML;
    var a2=document.getElementById('a2').innerHTML;

    var b0=document.getElementById('b0').innerHTML;
    var b1=document.getElementById('b1').innerHTML;
    var b2=document.getElementById('b2').innerHTML;

    var c0=document.getElementById('c0').innerHTML;
    var c1=document.getElementById('c1').innerHTML;
    var c2=document.getElementById('c2').innerHTML;

    if(a0==a1 && a0==a2 && a0!="")
    {
        return true;
    }
    else if(b0==b1 && b1==b2 && b0!="")
    {
        return true;
    }
    else if(c0==c1 && c0==c2 && c0!="")
    {
        return true;
    }
    else if(a0==c0 && a0==b0 && a0!="")
    {
        return true;
    }
    else if(a1==b1 && b1==c1 && a1!="")
    {
        return true;
    }
    else if(a2==b2 && a2==c2 && a2!="")
    {
        return true;
    }
    else if(a0==b1 && a0==c2 && a0!="")
    {
        return true;
    }
    else if(a2==b1 && a2==c0 && c0!="")
    {
        return true;
    }
    else 
    {
        return false;
    }
}
const put=(x)=>{
    if(turn==1 && (document.getElementById(x).innerHTML!='X' && document.getElementById(x).innerHTML!='O'))
    {
        document.getElementById(x).innerHTML="X";
        turn=0;
        document.getElementById(x).style.color="white";
        document.getElementById('status').innerHTML="<marquee>"+player2+", its your turn</marquee>";
    }
    else if(turn==0 && (document.getElementById(x).innerHTML!='X' && document.getElementById(x).innerHTML!='O'))
    {
        document.getElementById(x).innerHTML="O";
        turn=1;
        document.getElementById(x).style.color="red";
        document.getElementById('status').innerHTML="<marquee>"+player1+", its your turn</marquee>";
    }
    if(check())
    {
        if(turn==0)
            document.getElementById('Win').innerHTML="Congratulations "+player1+", on Winning"
        else 
            document.getElementById('Win').innerHTML="Congratulations "+player2+", on Winning"
        document.getElementById('Final').style.display="block";
        document.getElementById('status').innerHTML="<marquee>Congratulations!!!!</marquee>";
    }
}