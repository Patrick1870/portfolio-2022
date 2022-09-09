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

    

    return (
        <>
            <Header />

            

            <Footer />
        </>
    )
}
