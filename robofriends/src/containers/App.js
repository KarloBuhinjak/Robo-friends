import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import { useState, useEffect } from 'react';



function App() {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
          const jsonData = await response.json();
          setRobots(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    const onSearchChange = (event) => {
      setSearchField(event.target.value);
    };
  
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
            <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
  
  export default App;
