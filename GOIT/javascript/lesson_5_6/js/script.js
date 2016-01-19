var timer={
    millis:0,
    seconds:0,
    minutes:0,
    hours:0,
    timerStatus:0,
    timerID:undefined,
    display:document.querySelector(".timer"),

    runTimer:function(){

        timer.millis++;
		timer.displayTime();
        if(timer.millis==1000)
        {

            timer.millis=0;
            timer.seconds++;
            timer.displayTime();
            if(timer.seconds==60)
            {
                timer.seconds=0;
                timer.minutes++;
                if(timer.minutes==60)
                {
                    timer.minutes=0;
                    timer.hours++;
                }
            }
        }


    },
    displayTime:function(){
        var hoursC;
        var minutesC;
        var secondsC;
		var millisC;
        if(timer.hours>9)
        {
            hoursC=timer.hours;
        }
        else
        {
            hoursC="0"+timer.hours;
        }
        if(timer.minutes>9)
        {
            minutesC=timer.minutes;
        }
        else{
            minutesC="0"+timer.minutes;
        }

        if(timer.seconds>9)
        {
            secondsC=timer.seconds;
        }
        else{
            secondsC="0"+timer.seconds;
        }
		
		if(timer.millis>100)
		{
			millisC=timer.millis;
			}
			else{
					if(timer.millis>10)
					{
						millisC="0"+timer.millis;
						}
						
						else
						{
							millisC="00"+timer.millis;
							}
				}
		
		

        var str=""+hoursC+":"+minutesC+":"+secondsC+":"+millisC;
        timer.display.innerHTML=str;
    }




}
var timer;
timer.displayTime();
startButtonListener=function(){
    var startButton=document.querySelector(".startButton");

    if(timer.timerStatus!=1)
    {
        timer.timerStatus=1;

        timer.timerID=setInterval(timer.runTimer,1);
        startButton.innerHTML='<h1>Pause</h1>';}
    else {
        if(this.timerStatus=1)
        {
           timer.timerStatus=2;
            clearInterval(timer.timerID);
            startButton.innerHTML="<h1>Continue</h1>";
        }

    }


}

stopButtonListener=function(){
    timer.timerStatus=0;
    timer.millis=0;
    timer.seconds=0;
    timer.minutes=0;
    timer.hours=0;
    clearInterval(timer.timerID);
    timer.displayTime();
    startButton.innerHTML="<h1>Start</h1>"
}
var startButton=document.querySelector(".startButton");

startButton.addEventListener("click",startButtonListener);

var stopButton=document.querySelector(".stopButton");

stopButton.addEventListener("click",stopButtonListener);





