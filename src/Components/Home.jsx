import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChocoCard from './ChocoCard';


const Home = () => {
    const loadedChocolate = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolate);
    console.log(loadedChocolate)
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
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            chocolates.map(chocolate => <ChocoCard key={chocolate._id}
                                 chocolates={chocolates}
                                 setChocolates={setChocolates}
                                chocolate={chocolate}></ChocoCard>

                                
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;