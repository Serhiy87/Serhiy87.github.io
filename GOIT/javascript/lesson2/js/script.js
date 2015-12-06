function pow(x,y){
	if(y===0)
	{
		return 1;
	}
	else{
			var result=1;
		  	for (var i = 0; i<Math.abs(y); i++) 
		  	{
		  		result*=x;
		  	}
		  	if(y<0)
		  	{
		  		result=1/result;
		  	}
		  	return result;
		}
  }

var x=+prompt("Enter x");
var y=+prompt("Enter y");
  
console.log("Result:"+pow(x,y));
