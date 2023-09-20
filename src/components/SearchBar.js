import React, { useState } from "react";
import "./SearchBar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from "../DataManager";

function SearchBar({ placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [hasSelected, setSelect] = useState(false);

  const selectedNum = (value) => {
    
    setWordEntered(value)
    setFilteredData([])
    setSelect(true)
  }

  const notify = (con) => {
    
    if(con){
      toast.success('ထိုးလို့ရပါသည်', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      toast.error('ထို့းလို့မရပါ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  const checkAvailable = () => {
     
   
     db.ref("Customers/"+wordEntered).get().then((snapshot)=>{
       const ticketData = snapshot.val();
       const result = JSON.stringify(ticketData)
       notify(result.length==4)
      })

      
   }


  const handleFilter = (event) => {
    setSelect(false);
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    setFilteredData([]);
    if(isNaN(searchWord)){
      return;
    }
    
    var num = parseInt(searchWord)

    if(num>40000){
      return;
    }

    var data = []
    for(let i=num; i<Math.min(40001,num+5); i++){
        data.push(i)
    }
    setFilteredData(data);

  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setSelect(false);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">

          {
            (hasSelected || wordEntered.length === 0) ? (
              <i class="fa-sharp fa-solid fa-search" onClick={checkAvailable}></i>
            ) : (
              <i class="fa-solid fa-xmark" onClick={clearInput}></i>
            )
          }
        </div>
      </div>
      {filteredData.length != 0 && 
      (
        
        <div className="dataResult">
          {filteredData.map((value, key) => {
            
            return (
              <p className="dataItem" key={key} onClick={()=>selectedNum(value)} >
                <span>
                    {value}
                </span>
              </p>
            );
          })}
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

    </div>
    
  );
}

export default SearchBar;