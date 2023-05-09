import React from 'react';
import { HiPencil, HiTrash } from "react-icons/hi2";

const ChocoCard = ({chocolate, chocolates, setChocolates}) => {
    const { name, country, photo, category } = chocolate;
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
                    <button className=" bg-orange-300 mr-2 btn btn-xs"><HiPencil /></button>
                    <button className="bg-orange-300 btn btn-xs"><HiTrash /></button>
                </td>
            </tr>
        </>
    );
};

export default ChocoCard;