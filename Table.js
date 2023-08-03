import React from "react";

const Table=({data})=>{
    return(
        <div className="table-container">
            <h2>Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index)=>(
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table