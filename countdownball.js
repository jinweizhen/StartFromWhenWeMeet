/**
 * Created by jinjin on 15/9/4.
 */

var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

const endTime=new Date(2015,8,5,22,0,0);
const startTime=new Date(2015,6,25,21,30,0);
var curShowTimeSeconds=0;

window.onload=function(){

    WINDOW_WIDTH=document.body.clientWidth;
    WINDOW_HEIGHT=document.body.clientHeight;

    MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);
    RADIUS=Math.round(WINDOW_WIDTH*4/5/108)-1;
    MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);

    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");

    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;

    curShowTimeSeconds=getCurrentShowTimeSeconds();


    setInterval(
        function(){
            render(context);
            update();
        }
        ,50
    )
}

function getCurrentShowTimeSeconds(){
    var curTime=new Date();
    var ret=curTime.getTime()-startTime.getTime();
    ret=Math.round(ret/1000);
    return ret ;
}

function update(){


    var nextShowTimeSeconds=getCurrentShowTimeSeconds();

    var nextHours=parseInt(nextShowTimeSeconds/3600);
    var nextMinutes=parseInt((nextShowTimeSeconds-nextHours*3600)/60);
    var nextSeconds=nextShowTimeSeconds%60;

    var curHours=parseInt(curShowTimeSeconds/3600);
    var curMinutes=parseInt((curShowTimeSeconds-curHours*3600)/60);
    var curSeconds=curShowTimeSeconds%60;

    if(nextSeconds!=curSeconds){
        curShowTimeSeconds=nextShowTimeSeconds;
    }
}
function render(cxt){

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var days=parseInt(curShowTimeSeconds/(3600*24));
    var hours=parseInt((curShowTimeSeconds-days*3600*24)/3600);
    var minutes=parseInt((curShowTimeSeconds-hours*3600-days*24*3600)/60);
    var seconds=curShowTimeSeconds%60;



    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
    renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
    renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
    renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);

    renderDigit(MARGIN_LEFT+0*(RADIUS+1),MARGIN_TOP+24*(RADIUS+1),parseInt(days/10000),cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP+24*(RADIUS+1),parseInt(days/1000),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP+24*(RADIUS+1),parseInt(days/100),cxt);
    renderDigit(MARGIN_LEFT+45*(RADIUS+1),MARGIN_TOP+24*(RADIUS+1),parseInt(days/10),cxt);
    renderDigit(MARGIN_LEFT+60*(RADIUS+1),MARGIN_TOP+24*(RADIUS+1),parseInt(days%10),cxt);



}



function renderDigit(x,y,num,cxt){
    cxt.fillStyle="rgb(0,102,153)";


    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);

                cxt.closePath();

                cxt.fill();
            }

        }
    }
}/**
 * Created by jinjin on 15/9/5.
 */
