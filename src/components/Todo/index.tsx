
import { ChangeEvent, FormEvent, useState } from 'react';
import { Container, Empty, Todos } from './styles';
import { BsFillCaretRightFill } from "react-icons/bs";

import empty from '../../assets/images/empty.png';


interface TodoList{
  id: number;
  title: string;
  text: string;
}

interface TodoHolder extends Omit<TodoList, 'id'>{}

const TodoList = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [id, setId] = useState(0);


  const [todo,setTodo] = useState<TodoList[]>(()=>{
    const todoStoregeList = localStorage.getItem('@todolist:list')

    if(todoStoregeList){
      return JSON.parse(todoStoregeList)
    }

    return[]
  })

  console.log(todo)

  function addTodo({title, text}:TodoHolder){
    
    const newTodo ={
      id: id,
      title: title,
      text: text
    }
    if(title !== '' && text !== ''){
      const updateList = [...todo,{...newTodo}]
      setTodo(updateList)
      localStorage.setItem('@todolist:list', JSON.stringify(updateList));
      return
    }
  }

  function ShowTodoList(){
    return(
      <Todos>
        <ul>
        <h2>Aqui estão suas tarefas</h2>
        {todo.map(todo =>(
          <li key={todo.id}>
              <strong>{todo.title}</strong>
              <label>{todo.text}</label>
          </li>
        ))}
        </ul>
      </Todos>
    )
  }

  function DontShowTodoList(){
    return(
      <Empty>
        <div>
          <strong>Sem Todos por aqui</strong>
          <img src={empty} alt="empty" />
        </div>
      </Empty>
    )
  }

  function todoListExist(){
    if(todo.length === 0){
      return <DontShowTodoList />
    }else{
      return <ShowTodoList/>
    }
      
    
  }

  function resetTodoList(){
    setTodo([])
    localStorage.setItem('@todolist:list', JSON.stringify([]));
  }


  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    
    const newId = Math.round(Date.now()*Math.random())
    setId(newId)
    
    addTodo({title,text})

  }

  function handleTitleChange(e:ChangeEvent<HTMLInputElement>){
    setTitle(e.target.value)
  }

  function handleTextChange(e:ChangeEvent<HTMLInputElement>){
    setText(e.target.value)
  }

  return (
    <Container>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>

        <label>Escreva o titulo da tarefa</label>
        <input type='text' name='name' value={title} required placeholder='Escreva aqui' onChange={handleTitleChange}/>
        <label>Descreva a tarefa</label>
        <input maxLength={90} name='text' value={text} required placeholder='Escreva aqui' onChange={handleTextChange}/>
        <input type="submit" value="Criar tarefa" />
          

      </form>

      <button onClick={resetTodoList}>Reset</button>

      {todoListExist()}
      
    </Container>
  );
};

export default TodoList;
