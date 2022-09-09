import { useRouter } from "next/router";
import Header from './header';
import Footer from './footer';
import Image from './image';

const projects = [
    {
        slug: 'digitalAgencies',
        name: 'Digital Agencies',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-[#AA27E8]">incididunt ut labore</span> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <span class="text-[#272ED9]">reprehenderit</span> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tech: 'WP CUSTOM DEVELOPMENT: PHP, HTML, JAVASCRIPT, DESIGN',
        images: [
            '../img/projects/screen1.jpg', '../img/projects/screen2.jpg', '../img/projects/screen3.jpg',
        ]
    }
]


export default function ProjectView() {
    const router = useRouter();

    const selectedProject = projects.find((e) => e.slug == router.query.project_name);

    let projectName = '';
    let desc = '';
    let tech = '';
    let imagesArr = '';

    if(selectedProject) {
        projectName = selectedProject.name;
        desc = selectedProject.desc;
        tech = selectedProject.tech;
        imagesArr = selectedProject.images;
    }

    return (
        <>
            <Header />

            <div className='container mx-auto text-left mb-6'>
                <div onClick={() => router.back()} className='back-button hover:text-[#272ED9] cursor-pointer -ml-[58px] flex gap-4 items-center mt-36'>
                    <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.749615 6.83196C0.359091 7.22248 0.359091 7.85564 0.749615 8.24617L7.11358 14.6101C7.5041 15.0007 8.13727 15.0007 8.52779 14.6101C8.91831 14.2196 8.91831 13.5864 8.52779 13.1959L2.87094 7.53906L8.52779 1.88221C8.91831 1.49168 8.91831 0.858519 8.52779 0.467995C8.13727 0.0774704 7.5041 0.0774704 7.11358 0.467995L0.749615 6.83196ZM43.0078 6.53906L1.45672 6.53906V8.53906L43.0078 8.53906V6.53906Z" fill="white"/>
                    </svg>
                    <h6>GO BACK</h6>
                </div>

                <div className='project-section flex flex-col mb-12 mt-12'>
                    <div className='flex gap-4 items-center mb-12'>
                        <h1>Test</h1>
                    </div>

                    <div className='leading-7'>
                        <p className="text-white mb-4">DESCRITPTION</p>
                        <p className="text-white opacity-70">{desc ? desc : ''}</p>
                    </div>
                    <div className='leading-7 mt-16'>
                        <p className="text-white mb-4">TECH STACK</p>
                        <p className="text-white opacity-70">{tech ? tech : ''}</p>
                    </div>
                </div>

                <div className="project-screens flex flex-col gap-6">
                  
                    {imagesArr ? imagesArr.map(img => <div key={img} className="z-10"><Image image={img} /></div>) : ''}


                    {/*<div className="flex gap-6">
                        <img src="../img/projects/screen2.jpg" className="w-full object-cover" />
                        <img src="../img/projects/screen3.jpg" className="w-full object-cover" />
                    </div>*/}
                </div>

            </div>

            <Footer />
        </>
    )
}
