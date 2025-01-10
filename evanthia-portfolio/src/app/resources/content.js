import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Evanthia (Eva)',
    lastName:  'Evgenidis',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Digital Media Designer',
    avatar:    '/images/avatar.jpg',
    location:  'Australia/Melbourne',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Greek', 'Japanese']  // optional: Leave the array empty if you don't want to display languages
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
        link: 'https://github.com/eva-e',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/eva-evgenidis/',
    },
    {
        name: 'Youtube',
        icon: 'youtube',
        link: 'https://www.youtube.com/@evanthia1222',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:evanthianything@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Digital Media Designer</>,
    subline: <>My name is Evanthia (Eva) Evgenidis and I am a first year Design Student at the Royal Melbourne Institute of Technology (RMIT), currently undertaking a Bachelor of Design (Digital Media).</>
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
        description: <>My name is Evanthia (Eva) Evgenidis and I am a second year Design Student at the Royal Melbourne
            Institute of Technology (RMIT), currently undertaking a Bachelor of Design (Digital Media). From a young age
            I have had a passion for expressing my emotions and thoughts through design using a diverse range of visual
            arts, such as painting, sketching, photography, videography and crafts. Presently, I am beginning to
            discover my areas of interest and techniques in design, while also representing my originality and
            personality throughout it. <br/><br/>

            My journey as a creative practitioner in design began with the production of a variety of design projects
            which entailed distinct design modes and techniques, including videography, sound composition, film editing,
            two dimensional graphic design, three dimensional environment design and finally website design. <br/><br/>

            Across all my projects I have remained with the theme of growth, peace, tranquility and hope. Creatively, I
            strive for audiences to feel calm and intrigued by the appreciation of nature through design, building a
            connection between my admiration and love for nature to the wider community of viewers to also find wonder
            in the smaller details. Nature is a common feature within each of my projects as well as my favoured colour
            palette, consisting of the colour green, pink and white or cream. <br/><br/>

            In regards to my future aspirations of web design, my most admired inspiratons surround the classical and
            impressionism art movement, which I have articulated in many of my projects. Both themes represent my
            interest and appreciation of classical, poetic and elegant design which embody my personality. Specifically,
            I have attempted to closely base my design reference from Claude Monet, my most admired artist and his
            artwork, due to my passion of nature and art. <br/><br/>

            As I continue this expedition through design and digital media, I hope my creative ideas and productions
            portray my soft and poetic styles and how there is more in less, as the smallest of details can make an
            immense impact through the expression of emotion, nature and personality through design.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Total Game Development',
                timeframe: '2024 - Present',
                role: 'Digital Designer Summer Internship',
                achievements: [
                ],
                images: [ // Leave the array empty to hide
                    // {
                    //     src: '/images/projects/project-01/p1-pic2.png',
                    //     alt: '',
                    //     width: 16,
                    //     height: 9
                    // }
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
                description: <>Studying Bachelor of Design (Digital Media).</>,
            },
            {
                name: 'Royal Melbourne Institute of Technology (RMIT)',
                description: <>Studied Bachelor of Information Technology</>,
            }
        ]
    },
    honors: {
        display: true,
        title: 'Honors & Awards',
        achievements: [
            {
                title: 'Friends of Buckley Park Award',
                description: <>Award presented annually to a student in Year 10 who has demonstrated excellent work habits, good academic results, excellent attendance and a positive attitude to schooling in general.</>,
                images: []
            },
            {
                title: 'Values and Positive Behaviours Awards Years 7-10',
                description: <></>,
                images: []
            },
            {
                title: 'Positive Student Leadership Award',
                description: <></>,
                images: []
            },
            {
                title: 'Education Perfect Language Championships',
                description: <>Elite Award <br/>
                    Total Points: 10,000 <br/>
                    Total Questions Answered: 26,226</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Collaborative Problem Solving',
                description: <></>,
                images: []
            },
            {
                title: 'Report Writing',
                description: <></>,
                images: []
            },
            {
                title: 'Figma (Software)',
                description: <></>,
                images: []
            },
            {
                title: 'Canva',
                description: <></>,
                images: []
            },
            {
                title: 'Unreal Engine',
                description: <></>,
                images: []
            },
            {
                title: 'Adobe Creative Cloud',
                description: <></>,
                images: []
            },
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
            src: '/images/gallery/img-01.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-02.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-04.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        // {
        //     src: '/images/gallery/img-06.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-07.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-08.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-09.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
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