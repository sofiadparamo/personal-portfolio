let data = {
    projects: {
        hitec: {
            title: 'HiTec Student Groups Quiz',
            description: 'A web quiz for first-year students to meet the student groups at the university.',
            github: 'https://github.com/TECoding/hitec-2021',
            date: 'Summer 2021',
            skills: ["React", "Javascript", "Firestore", "GitHub", "CI/CD", "Project Management"],
            media: [
                {
                    type: 'image',
                    src: '/images/hitec.png',
                    alt: 'HiTec Quiz Landing Page screenshot'
                }
            ]
        },
        hiring: {
            title: 'Hiring Management System',
            description: 'Web application to manage candidates in various stages of a company. Built at Tec de Monterrey.',
            date: 'February - May 2021',
            skills: ["VueJS", "Javascript", "Node", "GitHub", "CI/CD", "SQLite"],
            media: [
                {
                    type: 'image',
                    src: '/images/hiring.png',
                    alt: 'Hiring Management App Dashboard screenshot'
                }
            ]
        },
        pedagog: {
            title: 'Pedagog',
            description: 'Educational platform powered with OpenAI for TreeHacks Stanford University Hackathon',
            github: 'https://github.com/ahiraaam/treehacks-pedagog',
            date: 'February 2021',
            skills: ["React", "Javascript", "Firestore", "GitHub", "Google App Engine", "OpenAI GPT-3"],
            media: [
                {
                    type: 'image',
                    src: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/396/000/datas/gallery.jpg',
                    alt: 'Branding and logo for Pedagog'
                }
            ]
        },
        opencv: {
            title: 'Computer Vision Project',
            description: 'Image convolution and face recognition project',
            github: 'https://github.com/SweetSofiMC/Convolution',
            date: 'September 2020',
            skills: ["Python", "OpenCV", "DLib", "GitHub"],
            media: [
                {
                    type: 'image',
                    src: 'https://github.com/SweetSofiMC/Convolution/raw/master/Examples/ui.gif',
                    alt: 'Project Demo animation'
                }
            ]
        }
    }
}

export default data;