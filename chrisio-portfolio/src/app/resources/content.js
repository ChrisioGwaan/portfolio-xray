import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Weixi (Chrisio)',
    lastName:  'Guan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Australia/Melbourne',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Cantonese', 'Mandarin']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I love programming!</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ChrisioGwaan',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/weixi-guan-705a48208/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:chris322322@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer</>,
    subline: <>I'm Chrisio, a Graduate Software Engineer from <InlineCode>RMIT University</InlineCode>, where I acquire software development skills.<br/> After hours, I work on my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: ''
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Chrisio is a workaholic software engineer with hands-on experience in full stack development, API design, and cloud-native solutions. My expertise includes working with multi-module Spring projects, open source frameworks like Pig4Cloud, and tools such as Alibaba Nacos for efficient configuration management. I am interested in solving complicated problems and making practical solutions, leveraging a strong foundation in software engineering and a commitment to continuous learning.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Guangdong Provincial Academy of Building Research Group Co.Ltd (广东建科创新技术研究院有限公司)',
                timeframe: '2023 - 2024',
                role: 'Software Engineer Internship',
                achievements: [
                    <>Developed Customer Relationship Management (CRM) software system using Spring Boot backend and Vue.js frontend, providing customers with a platform to effectively manage data, interactions, and activities, resulting in enhanced customer service.</>,
                    <>Debugged software, identified bugs, and proposed solutions to address software issues efficiently.</>,
                    <>Developed REST APIs utilizing Postman and Navicat for MySQL database design and querying, and compiled comprehensive API documentation for the frontend team.</>,
                    <>Developed and maintained software across multiple programming languages, including Java and JavaScript.</>,
                    <>Implemented in multiple microservices architecture using Pig4Cloud Spring with MyBatis Plus technology, which enhanced system modularity and reduced inter-component dependencies.</>,
                    <>Collaborated with cross-functional teams via Chandao to devise innovative solutions, ensuring alignment with stakeholder needs and project requirements.</>,
                    <>Utilized Alibaba Nacos for cloud-native solutions, facilitating streamlined management of configuration files and ensuring simplicity and efficiency in deployment.</>,
                    <>Facilitated the deployment process by assisting the team in transitioning software from a Docker container to Jenkins for compilation, subsequently orchestrating the deployment to the production environment.</>
                ],
                images: [ // Leave the array empty to hide
                    {
                        src: '/images/projects/project-01/p1-pic1.png',
                        alt: 'GDJK Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/p1-pic2.png',
                        alt: 'GDJK Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Royal Melbourne Institute of Technology (RMIT)',
                description: <>Studied Bachelor of Software Engineer.</>,
            },
            {
                name: 'Royal Melbourne Institute of Technology (RMIT)',
                description: <>Studied Foundation Studies</>,
            },
            {
                name: 'University of Melbourne',
                description: <>[OFFER ONLY] Master of Software Engineering (2 Years) <br/>
                    Received an offer with 100 units awarded of advanced standing.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Spring Boot',
                description: <>Able to create JWT Authentication microservices using JPA or MyBatis Plus data mapping framework, with Swagger UI extension for API documentation and cloud native solution.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-02.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Vue.js',
                description: <>Implement SaaS pages for the client's project.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        // {
        //     src: '/images/gallery/img-10.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-11.jpg',
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        // {
        //     src: '/images/gallery/img-12.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-13.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-14.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };