import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmallLeft } from "react-icons/hi2";
import Swal from 'sweetalert2';

const AddChoco = () => {

    const handleAddChocolate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.chocolate.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const newChocolate = { name, country, photo, category }
        console.log(newChocolate);

        //send data to the server;
        fetch('http://localhost:5000/chocolate', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChocolate),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='bg-gray-100 p-2'>
            <div className='bg-white m-10 px-8 py-10'>
                <h1 className='text-center text-2xl bg-[#91572B] mx-80 mb-8 py-2 text-white 
                font-semibold rounded'>
                    Chocolate Management System</h1>
                <Link to="/" className='ml-24 mb-10 flex items-center'> <HiArrowSmallLeft />All Chocolates</Link>
                <form onSubmit={handleAddChocolate} className='bg-gray-100 px-18 mx-10'>
                    <div className='text-center py-8'>
                        <h1 className='font-bold'>New Chocolates</h1>
                        <p>Use the below form to create a new product</p>
                    </div>
                    <div className='mx-32 py-4'>
                        <p className='font-bold mb-1'>Chocolate Name</p>
                        <input className='w-full p-3 rounded border' type="text" name="chocolate" id=""
                            placeholder='Hot Pink Chocolate' />
                    </div>
                    <div className='mx-32 py-4'>
                        <p className='font-bold mb-1'>Country</p>
                        <input className='w-full p-3 rounded border' type="text" name="country" id="" placeholder='Enter Country Name' />
                    </div>
                    <div className='mx-32 py-4'>
                        <p className='font-bold mb-1'>Photo URL</p>
                        <input className='w-full p-3 rounded border' type="text" name="photo" id="" placeholder='Enter Photo URL' />
                    </div>
                    <div className='mx-32 py-4'>
                        <p className='font-bold mb-1'>Category</p>
                        {/* <input className='w-full p-2 rounded' type="text" name="name" id=""
                            placeholder='Premium' /> */}
                        <select className="select select-bordered w-full" name="category">
                            <option disabled selected>Select Category</option>
                            <option>General</option>
                            <option>Premium silver</option>
                            <option>Premium Gold</option>
                            <option>Premium Diamond</option>
                        </select>
                    </div>
                    <div className='mx-32 py-4'>
                        <input className='w-full p-2 rounded border bg-[#91572B] text-white font-semibold'
                            type="submit" name="name" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddChoco;