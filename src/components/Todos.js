import React, { useState, useEffect } from "react";
import { getList } from '../utils/routes';


const TodoList = (props) => {

    const [listData, setListData] = useState('');
    const [toggle, setToggle] = useState(true);



    const search = (rows) => {
        if (props.inputTextData) {
            return rows.filter((row) =>
              row.title.toLowerCase().indexOf(props.inputTextData)>-1
            );
        } else {
            return rows
        }
        
    }


    console.log(props.inputTextData);


    const renderObject = listData
      ? toggle
        ? search(listData)
            .sort((a, b) => a.id - b.id)
            .map((a, lisIdx) => {
              return (
                <tr key={lisIdx}>
                  <th scope="row">{a.id}</th>
                  <td>{a.title}</td>
                  <td>{a.status ? "completed" : "incomplete"}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.clickHnadler(a.userId, a.title);
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })
        : search(listData)
            .sort((a, b) => b.id - a.id)
            .map((a, lisIdx) => {
              return (
                <tr key={lisIdx}>
                  <th scope="row">{a.id}</th>
                  <td>{a.title}</td>
                  <td>{a.status ? "completed" : "incomplete"}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.clickHnadler(a.id, a.title);
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })
      : "loading";


    useEffect(() => {
        fetch(getList).then(res => {
            res.json().then(resp => {
                setListData(resp);
           }
            )
       })
    }, [])

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">TodoId <button onClick={(e)=>{setToggle(!toggle)}}>v</button></th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           { renderObject }
          </tbody>
        </table>
      </div>
    );
}
 
export default TodoList;