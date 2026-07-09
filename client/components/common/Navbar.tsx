'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {

    const isActive = (path: string) => {
        const pathname = usePathname();
        return pathname === path;
    }
    return(
        <nav className='bg-foreground/60'>
            <div className='flex justify-between items-center p-1 max-w-7xl mx-auto text-black'>
                <Image alt="Logo" src={'/Trackerify.svg'} width={230} height={60}/>
                <div className='flex gap-4'>
                    <FaLinkedin size={30} className="hover:text-income duration-300 cursor-pointer"/>
                    <FaGithub size={30} className="hover:text-income duration-300 cursor-pointer"/>
                </div>
            </div>
            <div className="bg-background text-foreground font-inter flex justify-center border-b-1 text-xs gap-8">
                <Link href={'/'} className={`px-4 py-2 hover:bg-income/5 duration-300 hover:text-income ${isActive('/') ? 'bg-income/5 text-income' : ''}`}> Dashboard </Link>
                <Link href={'/transactions'} className={`px-4 py-2 hover:bg-income/5 duration-300 hover:text-income ${isActive('/transactions') ? 'bg-income/5 text-income' : ''}`}> Transactions </Link>
            </div>
        </nav>
    )
}

export default Navbar;