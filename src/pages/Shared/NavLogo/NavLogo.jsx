import React from 'react';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const NavLogo = () => {
    return (
        <div  className='flex items-center justify-center '>
            <MdOutlineCheckBoxOutlineBlank size={46}/>
            <div>
                <h2 className='text-2xl font-semibold'>CodeSandbox</h2>
                <p className='text-sm text-gray-300'>a together ai company</p>
            </div>
        </div>
    );
};

export default NavLogo;