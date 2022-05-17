import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({ doctor, setDeletingDoctor, email, refetch }) => {


    const handleDelete = () => {
        fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/doctor/${doctor._id}?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(({ deletedCount }) => {
                if (deletedCount) {
                    toast.success(`Doctor : ${doctor.name} deleted successfully`)
                    refetch()
                    setDeletingDoctor(null)

                } else {
                    toast.error('something is Wrong')
                }
            }).catch(error => console.log(error))
    }
    return (
        <>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You want to delete <span>{doctor?.name}</span></h3>
                    <p class="py-4">Are You Sure?</p>
                    <div class="modal-action">
                        <button class="btn btn-error" onClick={handleDelete}>Yes</button>
                        <label for="my-modal-6" class="btn" >Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteDoctorModal;