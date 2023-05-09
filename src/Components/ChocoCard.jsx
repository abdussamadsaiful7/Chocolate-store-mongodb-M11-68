import React from 'react';
import { HiPencil, HiTrash } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocoCard = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, photo, category } = chocolate;
    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/chocolate/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining =  chocolates.filter(cho=> cho._id !== _id);
                            setChocolates(remaining)
                        }
                    })
            }
        })
    }
    return (
        <>
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                </td>
                <td>
                    <p>{country}</p>
                </td>
                <td>
                    <p>{category}</p>
                </td>
                <td>
                    <Link to={`/updateChoco/${_id}`}>
                        <button className=" bg-orange-300 mr-2 btn btn-xs">
                            <HiPencil />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="bg-orange-300 btn btn-xs">
                        <HiTrash />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ChocoCard;