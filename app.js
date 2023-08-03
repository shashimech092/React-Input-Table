import React, {useState} from "react";
import Table from "./Table";
import './app.css'


const App=()=>{
    const [name, setName]=useState('')
    const [mobile, setMobile]=useState('')
    const [data, setData]=useState([])

    const handleSubmit=()=>{
        if(name && mobile){
            const newData={name, mobile}
            setData([...data, newData])
            setName('')
            setMobile('')
        }
    }
    return(
        <div className="App">
            <h1>React Form Table</h1>
             <div className="input-container">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/><br/>
                <label>Mobile Number:</label>
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}></input><br/><br/>
                <button onClick={handleSubmit}>Add to Table</button>
                <Table data={data}/>
             </div>
        </div>
    )
}

export default App