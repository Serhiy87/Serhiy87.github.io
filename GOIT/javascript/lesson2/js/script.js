var namesMas=[];

for(var i=0;i<5;i++){
	namesMas[i]=prompt('Введите имя '+(i+1));
}

var userName=prompt('Введите свое имя');
var flag=false;
for(var i=0;i<userName.length;i++){
	if(namesMas[i]===userName){
		alert(userName+", Вы успешно вошли.");
		flag=true;
		break;
	}
}
if(flag===false){
	alert("Ошибка!");
}