import React from 'react';

const Doctor = ({ doctor, index, setDeletingDoctor }) => {
    const { img, name, email, specialization } = doctor
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <th>{name}</th>
            <td>{email}</td>
            <td>{specialization}</td>
            <td>
                <label htmlFor="my-modal-6" className="btn modal-button btn-circle rounded-full border-0 bg-red-500 font-semibold" onClick={() => setDeletingDoctor(doctor)}>
                    X
                </label>
            </td>
        </tr>
    );
};

export default Doctor;