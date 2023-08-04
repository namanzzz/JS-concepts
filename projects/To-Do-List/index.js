
const todoList = [];


renderTodoList()
function renderTodoList(){

        let todoListhtml=''

        todoList.forEach((todoObject, index)=>{
            // destructuring 
            const { name, dueDate } = todoObject

            const html = ` 
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button onclick="
            todoList.splice(${index},1)
            renderTodoList()
            " class="delete-todo-btn">Delete</button>
            
            ` //Generating the html
            todoListhtml += html

        })

        document.querySelector('.js-todo-list').innerHTML=todoListhtml
}
document.querySelector('.js-add-todo-btn').addEventListener('click',
(event)=>{
    AddTask()
})

function AddTask(){
 
        const inputElement = document.querySelector('.js-name-input')
        
        const name=inputElement.value

        const inputDate = document.querySelector('.js-date-input')
        const date = inputDate.value
        todoList.push({
            name:name
            ,dueDate:date
        })
        // console.log(todoList)

        // task.value=null
        inputElement.value='';

}

