for (let i = 0; i<=10; i++)
{
    console.log(i);
};

for (let i = 2; i<5; i++)
{
    console.log(`Hello ${i}`);
};


const todos = [

    {
        id : 1,
        text : "Take out trash",
        isComplete: true
    },
    {
        id : 2,
        text : "Meeting with boss",
        isComplete: true
    },
    {
        id : 3,
        text : "Dentist appt",
        isComplete: false
    },
];


for (let todo of todos)
{
    console.log(todo);
}

//or
for ( let todo = 0; todo<todos.length; todo++)
{
   console.log(todos[todo])
   console.log(todos[todo].text)
   console.log(todos[todo].id)
}

//foreach
todos.forEach(function(todo) {
    console.log(todo.text);
});


const todotext=todos.map(function(todo)
{
    return todo.text
})
console.log(todotext)


const todocompleted=todos.filter(function(todo)
{
    return todo.isComplete === true
}).map(function(todo) 
{
    return todo.text
})
console.log(todocompleted)