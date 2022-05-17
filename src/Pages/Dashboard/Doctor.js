import React from 'react';

const Doctor = ({ doctor, index }) => {
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
                <button class="btn btn-circle rounded-full border-0 bg-red-500 font-semibold">
                    X
                </button>
            </td>
        </tr>
    );
};

export default Doctor;