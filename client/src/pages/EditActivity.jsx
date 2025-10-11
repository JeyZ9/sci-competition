import React, { useEffect, useState } from "react";
import ActivityService from "../services/activity.service";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';

const EditActivity = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  useEffect(() => {
    const fetchItem = async () => {
        const response = await ActivityService.showAllActivityDetailsById(id);
        if(response.status === 200) {
            setEvent(response.data);
        }
        return response;
    }

    fetchItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted event:", event);
    const response = await ActivityService.updateActivity(id, event);
    console.log(response)
    if(response.status === 200) {
       Swal.fire({
          icon: "success",
          title: "Update activity successful!",
        });

        setEvent({
          name: "",
          description: "",
          type: "",
          level: "",
          team_size: "",
          date: "",
          location: "",
          reg_open: "",
          reg_close: "",
          contact_name: "",
          contact_email: "",
          contact_phone: "",
          status: "",
        });
        navigate("/");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl mt-10 p-5 space-y-3">
        <h2 className="text-xl font-bold text-center">Edit Activity</h2>

        <input type="text" name="name" placeholder="Event Name" value={event.name} onChange={handleChange} className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" value={event.description} onChange={handleChange} className="textarea textarea-bordered w-full" />

        <input type="text" name="type" placeholder="Type" value={event.type} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="level" placeholder="Level" value={event.level} onChange={handleChange} className="input input-bordered w-full" />
        <input type="number" name="team_size" placeholder="Team Size" value={event.team_size} onChange={handleChange} className="input input-bordered w-full" />

        <input type="text" name="date" placeholder="Event Date (e.g., 4-9-2568)" value={event.date} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleChange} className="input input-bordered w-full" />

        <input type="text" name="reg_open" placeholder="Register Open (e.g., 4-9-2568)" value={event.reg_open} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="reg_close" placeholder="Register Close (e.g., 4-9-2568)" value={event.reg_close} onChange={handleChange} className="input input-bordered w-full" />

        <input type="text" name="contact_name" placeholder="Contact Name" value={event.contact_name} onChange={handleChange} className="input input-bordered w-full" />
        <input type="email" name="contact_email" placeholder="Contact Email" value={event.contact_email} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="contact_phone" placeholder="Contact Phone" value={event.contact_phone} onChange={handleChange} className="input input-bordered w-full" />

        <select name="status" value={event.status} onChange={handleChange} className="select select-bordered w-full">
          <option value="draft">draft</option>
          <option value="open">เปิดรับสมัคร</option>
        </select>

        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};

export default EditActivity;
