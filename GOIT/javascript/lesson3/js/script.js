var element=document.createElement('div');
element.classList.add('wrapper');

document.body.appendChild(element);

var wrapper=document.querySelector('.wrapper');
element=document.createElement('div');
element.classList.add('header');
element.innerHTML="Тест по программированию";
wrapper.appendChild(element);

form=document.createElement('form');
element.classList.add('content');
wrapper.appendChild(form);

var questionList=document.createElement('ul');
questionList.classList.add('questionList');
form.appendChild(questionList);
questionList.style.listStyle='none';

for(var i=1;i<4;i++){

    var question=document.createElement('li');
    question.innerHTML='Вопрос №'+i;
    questionList.appendChild(question);
    var variantList=document.createElement('ul');
    question.appendChild(variantList);
    for(var j=1;j<4;j++){

        var variant=document.createElement('li');
        variant.style.listStyle='none';
        var check1=document.createElement('input');
        check1.setAttribute('type','checkbox');
        variant.appendChild(check1);
        var text=document.createElement('span');
        text.innerHTML='Вариант ответа №'+j;
        variant.appendChild(text);
        variantList.appendChild(variant);
    }

}

var button=document.createElement('input');
button.setAttribute('type','submit');
button.setAttribute('value','Мои результаты');
form.appendChild(button);


var test={
    theme:"Тест по программированию",
    questions:[],
    addQuestion:function(question){
        questions.add(question);
    }
}

var question={
    questionText:'',
    variants:'',
    addVariant:function(variantText){
        variants.add(variantText);
    }
}
