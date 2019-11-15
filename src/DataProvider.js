import React, {Component, useState, useEffect } from "react"
const UseFetch = () => {
    let tempdata = [["age" , "numbet"]]
    let page =1;
    let total_page = 1;
    const [data, setData] = useState([]);

    const fetchUser = async () => {
      debugger
      const response = await fetch("https://reqres.in/api/users?page="+page);
      const result = await response.json();
      debugger
      setData([data,...result.data]);
      total_page = result.total_page
    };
    
    useEffect(() => {
        fetchUser();
    }, []);
  
    return data;
  };

  export default  UseFetch