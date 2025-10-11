import React, { useEffect, useState } from 'react'
import ActivityService from '../services/activity.service';

const Activity = () => {
    const [ activities, setActivities ] = useState([]);
    useEffect(() => {
        const fetchDate = async () => {
            const response = await ActivityService.showAllActivityDetails();
            if(response.status === 200){
                setActivities(response.data);
            }
        }
        fetchDate();
    },[])
  return (
    <div>
        {activities.length === 0 && <p>ยังไม่มีกิจกรรม</p>}
        {activities.length > 0 && activities.map((item) => (
            <div>{item.name}</div>
        ))}
    </div>
  )
}

export default Activity