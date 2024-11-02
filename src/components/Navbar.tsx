'use client'
import * as React from 'react';
import Image from 'next/image'
import Drawer from '@mui/material/Drawer';
import { Menu, X, MoveRight } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {

    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, top: open });
            };


    const closeDrawer = () => {
        setState({ ...state, top: false });
    }

    const handleNavigation = (id: string) => {
        closeDrawer(); // Close the drawer
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }

    const list = () => (
        <div className='text-white w-screen md:w-auto'>
            <div className='flex justify-between items-center px-4'>
                <Image
                    src="/logo1.png"
                    alt='strikebit-logo-1'
                    height={100}
                    width={100}
                />
                <div className=''>
                    <button
                        className='gap-[10px] flex justify-center items-center bg-white text-blue px-[20px] py-[15px] xl:px-7 xl:py-4'
                        onClick={closeDrawer}
                    >
                        <p className='flex items-center justify-center font-semibold'>Close</p>
                        <X />
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 text-4xl px-2 md:px-16 md:py-16 gap-8 font-semibold'>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("about")}>
                    <p>About</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("technology")}>
                    <p>Technology</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("product")}>
                    <p>Product</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("token")}>
                    <p>Token</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("features")}>
                    <p>Features</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("roadmap")}>
                    <p>Roadmap</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
            </div>

            <div className='flex justify-center items-center sm:hidden px-8 py-8 w-full'>
                <Link
                    href="https://app.strikebit.io/"
                    target='_blank'
                    className='text-white rounded-none border text-center border-white/20 py-[15px] w-full'
                >
                    Try Our MVP
                </Link>
            </div>
        </div>
    );

    return (
        <div className='flex justify-between items-center py-0 px-4 xl:px-[5rem]'>
            <Image
                src="/logo1.png"
                alt='strikebit-logo-1'
                height={100}
                width={100}
            />

            <div className='flex gap-4'>
                <Link
                    href="https://app.strikebit.io/"
                    target='_blank'
                    className='text-white hidden sm:flex gap-[10px] rounded-none border border-white/20 px-[20px] py-[15px] xl:px-7 xl:py-4'

                >
                    Try Our MVP
                </Link>

                <button
                    className='gap-[10px] rounded-none flex justify-center items-center blue-btn'
                    onClick={toggleDrawer(true)}
                >
                    <p className='flex items-center justify-center font-semibold'>Menu</p>
                    <Menu />
                </button>
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: 'rgba(0, 0, 0, 0.2)', // half-transparent background
                            backdropFilter: 'blur(100px)', // blur effect
                        },
                    }}
                    anchor="top"
                    open={state.top}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
        </div>
    )
}