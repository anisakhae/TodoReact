import './TodoList.css'


const TodoList = (props) => {
    console.log(props.dataTodos)
    return (
        <ul>{
            props.dataTodos.map( (todo) => { //map
                return <li key={todo.id}>{todo.title}</li>
            })
        }  
        </ul>
    )
}

export default TodoList