const task = [];
let time = 0;
//nueva funcion 
let timer = null;
let timerbrake = null ;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#bAdd');

// una vez que se ingresa al arreglo
form.addEventListener('submit',e =>{
    e.preventDefault();
    if (itTask.value != ''){
        createTask(itTask.value);
        itTask.value ='';
        rederTask();
    };
});
//contiene elementeos y objetos
function createTask(value){
    //genera 3 caracteres
    const newTask ={
        id:(Math.random()*100).toString(36).slice(3),
        title : value,
        completed:falsed
    };
    task.unshift(newTask);
}

// toma los elementos y genera un html y inyecta a un conetdeor 
function rederTask(){
    const html= task.map((task => {
        retunr `
        <div class= "task>
            <div class = "completed"></div>
            <div class = "completed"></div>
        </div>
    `;

    });