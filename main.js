const task = [];
let time = 0;
//nueva funcion 
let timer = null;
let timerbrake = null ;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#bAdd');

form.addEventListener('submit',e =>{
    e.preventDefault();
    if (itTask.value != ''){
        createTask(itTask.value);
        itTask.value ='';
    };
});
//contiene elementeos y objetos
function createTask(value){
    const newTask ="";
}