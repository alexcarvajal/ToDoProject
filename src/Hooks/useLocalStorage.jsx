import { useEffect, useState } from "react";

  const defaulttodos = [
    { text: "Cortar element", completed: false },
    { text: "Tomar element", completed: false },
    { text: "Take element", completed: false },
  ];
  localStorage.setItem('TODOS_v1', JSON.stringify(defaulttodos));
   


function useLocalStorage(itemName,initialValue){
  const[item, setItem]= useState(initialValue)
  const[loading, setLoading]= useState(true)
  const [error,setError]=useState(false)
   
  useEffect(()=>{
   setTimeout(() => {
    try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=initialValue
        }else{
          parsedItem= JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
        }
        catch(error){
          setLoading(false)
          setError(true)
        }
      }, 5000);
  },[initialValue,itemName])


    const saveItem =(newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return{ 
      item, 
      saveItem,
      loading,
      error
    }
  }

  export default useLocalStorage

