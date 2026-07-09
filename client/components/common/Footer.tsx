import Image from "next/image";
import Link from "next/link";

import { Monitor } from "lucide-react";

const Footer = () => {
    return(
        <footer className='bg-foreground/60 font-inter'>
            <div className='flex flex-col sm:flex-row justify-between items-center py-8 max-w-7xl mx-auto px-2'>
                <div className='flex flex-col gap-6 text-xl text-black font-bold underline underline-offset-4'>
                    <Link className="hover:text-income duration-200" href={'/privacy-policy'}>Privacy Policy</Link>
                    <Link className="hover:text-income duration-200" href={'/terms-of-service'}>Terms of Service</Link>
                </div>
                <Image alt="Logo" src={'/Trackerify.svg'} width={400} height={60}/>
            </div>
            <div className='text-black flex flex-col gap-1 sm:gap-0 sm:flex-row border-t-2 p-2 items-center justify-around'>
                <p className="text-sm flex gap-1 items-center"> All data is stored in LocalStorage <Monitor fill="black" size={16}/></p>
                <p className="text-xs text-center"> © 2026 Trackerify. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer;