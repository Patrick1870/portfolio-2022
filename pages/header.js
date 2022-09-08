import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex justify-between items-center px-4 lg:px-8 py-4 mx-auto'>
            <div className="flex gap-8">
                <Link href="/">
                    <div>
                        <img src="../img/adach-logotype.png" className='w-auto h-[30px] rotate-180'/>
                    </div>
                </Link>

                {/* <div className='flex gap-4'>
                    <div className='flex items-center gap-4 text-white'>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_381_35)">
                        <path d="M24.7659 13.0748L27.277 10.3933L23.6109 9.64713L21.7422 6.51562V15.1932L25.1629 16.6675L24.7659 13.0748Z" fill="#3D3D3D"/>
                        <path d="M19.877 9.64713L16.2109 10.3933L18.7221 13.0748L18.3251 16.6675L21.7457 15.1932V6.51562L19.877 9.64713Z" fill="#1D1D1D"/>
                        <path d="M16.512 25.6701C11.3821 24.4357 7.46094 19.7404 7.46094 14.1484C7.46094 8.55644 11.3821 3.86116 16.512 2.6268C18.2197 2.21553 19.8997 2.18062 21.4604 2.4588C19.4008 1.30953 17.0115 0.648438 14.4609 0.648438C6.72841 0.648438 0.460938 6.69262 0.460938 14.1484C0.460938 21.6043 6.72841 27.6484 14.4609 27.6484C17.0115 27.6484 19.4008 26.9873 21.4604 25.8381C19.8997 26.1163 18.2197 26.0813 16.512 25.6701Z" fill="#1D1D1D"/>
                        <path d="M14.4609 14.1471C14.4609 9.15133 17.2773 4.79206 21.4604 2.45751C19.8997 2.17933 18.2197 2.21424 16.512 2.62551C11.3821 3.85988 7.46094 8.55515 7.46094 14.1471C7.46094 19.7391 11.3821 24.4344 16.512 25.6688C18.2197 26.0801 19.8997 26.115 21.4604 25.8368C17.2773 23.5022 14.4609 19.143 14.4609 14.1471Z" fill="#3D3D3D"/>
                        <path d="M27.916 19.3345L26.0933 18.9635L25.1641 17.4062L25.1641 21.721L26.8651 22.454L26.6675 20.6677L27.916 19.3345Z" fill="#3D3D3D"/>
                        <path d="M24.2368 18.9635L22.4141 19.3345L23.6626 20.6677L23.4653 22.454L25.1661 21.721L25.166 17.4062L24.2368 18.9635Z" fill="#1D1D1D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_381_35">
                        <rect width="28" height="27" fill="white" transform="translate(0.1875 0.648438)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <div className='text-[16px]'>Dark mode</div>
                    </div>
                    <div className='flex items-center gap-4 text-white'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.04688 12.1484C2.04688 17.6712 6.52402 22.1484 12.0469 22.1484C17.5697 22.1484 22.0469 17.6712 22.0469 12.1484C22.0469 6.62559 17.5697 2.14844 12.0469 2.14844C6.52402 2.14844 2.04688 6.62559 2.04688 12.1484Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.0469 2.19922C13.0469 2.19922 16.0469 6.14984 16.0469 12.1498C16.0469 18.1498 13.0469 22.1005 13.0469 22.1005" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.0469 22.1005C11.0469 22.1005 8.04688 18.1498 8.04688 12.1498C8.04688 6.14984 11.0469 2.19922 11.0469 2.19922" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.67969 15.6484H21.4204" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.67969 8.64844H21.4204" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='text-[16px]'>EN | <span className='opacity-50'>PL</span></div>
                    </div>
            </div>*/}
            </div>

            <div className='menu flex gap-8 items-center'>
                <div className='hidden md:flex gap-8'>
                <a>Home</a>
                <a>Projects</a>
                <Link href="#reviews-section"><a>Reviews</a></Link>
                </div>
                
                <div className="rounded-md cta-button-border">
                    <button className='rounded-md bg-black py-3 px-6'>Contact</button>
                </div>
            </div>
      </div>
    )
}