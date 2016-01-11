alert("hello");
var app={
	createElement:function(params){
		var elem=document.createElement(params.tagName);
			if(params.tagName==='input')
			{
				elem.setAttribute('type',params.inputType)
			}
			if(params.className)
			{
				elem.className=params.className;
			}
			if(params.parentElement){
				params.parentElement.appendChild(elem);
			}
			elem.innerHTML=params.content;
		}
}
body=document.querySelector('body');
app.createElement({
	tagName:"h1",
	className:"title",
	parentElement:body,
	content:"Тест по программированию"
});

app.createElement({
	tagName:"input",
	parentElement:body,
	content:"Проверить мои результаты",
	inputType:"submit"
});