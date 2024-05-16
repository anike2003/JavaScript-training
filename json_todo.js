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


const JSONtodo=JSON.stringify(todos);
console.log(JSONtodo);