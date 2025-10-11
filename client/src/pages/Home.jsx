import React, { useEffect, useState } from 'react'
import ActivityService from './../services/activity.service';
import ShowActivity from '../components/ShowActivity';

const Home = () => {
  const [ items, setItems ] = useState([]);
  const [ filterItems, setFilterItems ] = useState([]);

  const fetchItem = async () => {
    try{
      const response = await ActivityService.showAllActivityDetails();
      if(response.status === 200){
        setItems(response.data);
        setFilterItems(response.data) 
      }
      return response.data;
    }catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
      fetchItem();
  }, [])

  const handleSearch = async (keyword) => {

    if(keyword === ""){
      setFilterItems(items);
      return;
    }
    const response = await itemService.search(keyword);
    setFilterItems(response.data);
  }

  return (
    <div>
      <ShowActivity items={filterItems} fetchItem={fetchItem} />
    </div>
  )
}

export default Home