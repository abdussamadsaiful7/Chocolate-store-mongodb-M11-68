import React from 'react';
import { Link } from 'react-router-dom';
import { HiPencil, HiTrash } from "react-icons/hi2";


const Home = () => {
    return (
        <div className='px-14 py-14 bg-gray-100 '>
            <div className="overflow-x-auto w-full py-5 px-10 bg-white">
                <h1 className='text-center text-2xl bg-[#91572B] mx-80 mb-8 py-2 mt-4 text-white 
                font-semibold rounded'>
                    Chocolate Management System</h1>
                <Link to="/addChoco"> 
                <button className='p-2 border ml-4'><span className='mr-2 text-xl'>+</span>
                New Chocolates 🍭</button> 
                </Link>
                <table className="table w-full my-10">
                    {/* head */}
                    <thead className='bg-orange-200'>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                {1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="font-bold">Hart Hagerty</div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>
                                Purple
                            </td>
                            <td>
                                <button className=" bg-orange-300 mr-2 btn btn-xs"><HiPencil/></button>
                                <button className="bg-orange-300 btn btn-xs"><HiTrash/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;