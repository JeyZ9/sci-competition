import React from 'react'
import { Link, useNavigate } from "react-router"
import ActivityService from './../services/activity.service';
import Swal from 'sweetalert2';

const Card = (props) => {
    const { id, name, description, team_size, level, reg_open, reg_close, fetchItem } = props;

    const navigate = useNavigate();

    const handleOnClick = async (activityId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            const response = await ActivityService.deleteActivityById(activityId);

            if(response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Delete Activity",
                    description: response.message,
                });
                fetchItem()
                navigate("/");
            }
        }
    }

  return (
    <div>
        <>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title truncate text-ellipsis w-[235px]">{name}</h2>
                    <p className='text-wrap truncate text-ellipsis w-[235px] h-[42px]'>{description}</p>
                    <div className="card-actions flex flex-col items-start justify-center">
                        <p>{team_size} คน, {level}</p>
                        <p>เปิดรับสมัคร {reg_open.split("T")[0]} ถึง {reg_close.split("T")[0]}</p>
                    </div>
                    <div className="">
                        <Link to={`/update/${id}`}>Edit</Link>
                        <button onClick={() => handleOnClick(id)}>Deleted</button>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default Card