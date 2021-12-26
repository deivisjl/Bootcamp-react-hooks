import { useEffect, useState, useMemo, useCallback } from 'react';
import './App.css';
import List from './List';

const initialUsers = [
   {id: 1, name:"Luis"},
   {id: 2, name:"María"}
]

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [text,setText] = useState("")
  const [search, setSearch] = useState("")

  const handleAdd = () =>{
    const newUser = {id: Date.now(), name: text}
    setUsers([...users,newUser])
  }

  const handleSearch = () =>{
    setSearch(text)
  }

  const handleDelete = useCallback((userId) =>{
    setUsers(users.filter(user => user.id !== userId))
  },[users])

  const filteredUsers = useMemo(()=>
    users.filter(user =>{
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  ,[search,users])

  const printUsers = useCallback(() =>{
    console.log('users',users)  
  },[users])

  useEffect(()=>{

  })

  useEffect(()=>{
    printUsers()
  },[users,printUsers])

  return (
    <div className="App">
        {/* <MouseApp/> */}
        {/* <CounterApp/> */}
        {/* <ConditionApp/> */}
        {/* <ErrorApp/> */}
        {/* <ProductoApp/> */}
        {/* <ShoppingCart/> */}
        {/* <FetchCard/> */}
        {/* <ResizeApp/> */}
        {/* <button onClick={()=> setShow(!show)}>Show/Hide</button>
        {show && <Lyfecycle/>} */}
        {/* <FocusApp/> */}
        {/* <CopyApp/> */}
        {/* <MediaPlayer/> */}
        {/* <ScrollAnimation/> */}
        {/* <RenderApp/> */}
        {/* <LoadingApp/> */}
        {/* <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleAdd}>Add</button>
        <List users={filteredUsers} handleDelete={handleDelete}/> */}
    </div>
  );
}

export default App;
