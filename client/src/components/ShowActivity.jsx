import React from 'react'
import Card from './Card';

const ShowActivity = (props) => {
    const { items, fetchItem } = props;
  return (
    <div>
        <>
            <div className='container grid grid-cols-3 gap-4'>
                {items &&
                items.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        team_size={item.team_size}
                        level={item.level}
                        reg_open={item.reg_open}
                        reg_close={item.reg_close}
                        fetchItem={fetchItem}
                    />
                ))}
            </div>
        </>
    </div>
  )
}

export default ShowActivity