setInterval(clock,1000);
var alarmtime,isAlarmSet=false;
var ring=new Audio("image/Alarm.mp3");
var btn=document.querySelector('.btn');
function clock(){
	var a=document.getElementById('hrs');
	var b=document.getElementById('min');
	var c=document.getElementById('sec');
	var d=document.getElementById('ampm');

	var time=new Date();
	var hrs=time.getHours();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	var ampm;

	if(hrs<=12){
		ampm='AM';
	}
	else{
		ampm='PM';
	}
	if(hrs>12){
		hrs=hrs-12;
	}
	if(hrs<10){
		hrs='0'+hrs;
	}
	if(min<10){
		min='0'+min;
	}
	if(sec<10){
		sec='0'+sec;
	}
	if(hrs==0){
		hrs=12;
	}
	a.innerHTML=hrs;
	b.innerHTML=min;
	c.innerHTML=sec;
	d.innerHTML=ampm;
	var cl=hrs+':'+min+':'+ampm;

	if(alarmtime==cl){
		ring.play();
		ring.loop=true;
	}
}

function alarm(){
	if(isAlarmSet){
		alarmtime="";
		ring.pause();
		btn.innerHTML='Set Alarm';
		return isAlarmSet=false;
	}
	var one=document.getElementById('one').value;
	var two=document.getElementById('two').value;
	var three=document.getElementById('three').value;
	var cl1=one+':'+two+':'+three;
	isAlarmSet=true;
	alarmtime=cl1;
	btn.innerHTML='stop';

}