import React from 'react';

const Doctor = ({ doctor, index, setDeletingDoctor }) => {
    const { img, name, email, specialization } = doctor
    return (
        <tr>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <th>{name}</th>
            <td>{email}</td>
            <td>{specialization}</td>
            <td>
                <label for="my-modal-6" class="btn modal-button btn-circle rounded-full border-0 bg-red-500 font-semibold" onClick={() => setDeletingDoctor(doctor)}>
                    X
                </label>
            </td>
        </tr>
    );
};

export default Doctor;