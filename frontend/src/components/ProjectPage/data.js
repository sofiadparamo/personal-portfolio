let data = {
    projects: {
        lert:{
            name: 'Labor Expenses Recovery Tool',
            description: 'A tool to help IBM managers to adminstrate and track labor expenses derived from projects at the company. The projects was developed using NextJS with Chakra UI in React. It contains very complex own components in the UI and extends beyond the UI components provided by Chakra UI. The backend of the project uses PostgreSQL and Flaks. The project is fully documented and fully tested. It contains a large portion of automation including tests, CI/CD, and deployment. The project is also fully accessible and responsive. The architecture allows an horizontal scaling and load balacing thanks to the proxy architecuture view. Also, the whole project was developed under SCRUM methodology, with 1 week sprints.',
            date: 'February 2022-June 2022',
            skills: ['React', 'NextJS', 'Chakra UI', 'Flask', 'PostgreSQL', 'GitHub Actions', 'Jest', 'Pytest', 'Newman', 'Docker', 'Scrum', 'Kubernetes', 'PostgreSQL', 'NGINX'],
            media: [
                {
                    type: 'image',
                    src: '/images/lert-arch.png',
                    alt: 'Architecture diagram of the project'
                },
            ]
        },
        reservationsystem: {
            title: 'Reservation System',
            description: 'A reservation system for the ITESM Campus Guadalajara, that allows the user to make reservations for the rooms of the campus. It uses a fourth dimensional optimization algorithm to offer the best results in the fastest time possible. It receives rows of data and transforms them into clusters of information trees, which are accessed in memory inmediately, allowing to search for conflicts fast in an otherwise O(n^4) algorithm. It also offers a search engine that allows the user to search for rooms by name, capacity, or by type.',
            date: 'August 2021-March 2022',
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Advanced Algorithms'],
            media: [
                {
                    type: 'image',
                    src: '/images/reservation2.png',
                    alt: 'Reservation system search page with parameters to search for rooms and services'
                },
            ]
        },
        hitec: {
            title: 'HiTec Student Groups Quiz',
            description: 'I led the development of a quiz application for HiTec, a welcome event for new students in my university. I designed the architecture and structure of the App and organized the development tasks using GitHub projects. I also implemented CI/CD to speed up the development process by decreasing the time a branch review took from about an hour to just 5 to 15 minutes. The quiz is conformed by 10 question with a score associated with them, once you finish it, the app displays wich studen club matches the best with you. We also store feedback responses for the event and they\'re stored in Google Firestore. This app was a complete success and handled over 1000 requests on its launch day.',
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
            description: 'I was the frontend leader of a team of 5 developers. I was responsible for the design and layout for the app. I developed the frontend using VueJS, but I also contributed to the backend using NodeJS, Express and SQLite. The app was well recived by the client, but since this project was created as part of a school collaboration with the receiving company, I\'m unable to provide more details about the project.',
            date: 'February - May 2021',
            skills: ["VueJS", "Javascript", "Node", "Express", "GitHub", "CI/CD", "SQLite"],
            media: [
                {
                    type: 'image',
                    src: '/images/hiring.png',
                    alt: 'Hiring Management App Dashboard screenshot'
                }
            ]
        },
        endlessrunner: {
            title: 'Endless Runner',
            description: 'This project was developed for the videogames course. It was created using Unity with free assets. The game is a 2D platformer with procedural obstacle generation. There are collectibles that increase the score. The background also contains animation.',
            date: 'February - May 2021',
            skills: ["Unity 2D"],
            media: [
                {
                    type: 'image',
                    src: '/images/endlessrunner.png',
                    alt: 'Endless Runner gameplay screenshot'
                }
            ]

        },
        pedagog: {
            title: 'Pedagog',
            description: 'This project was developed in under 36 hours as part of the TreeHacks Standford Hackathon. I was responsible for the frontend of certains screens in the app, as well as the landing page. This was the first time I used React. I also implemented a chatbot to help kids research about topics in a simple and intuitive way by querying the OpenAI GPT-3 model with some specific and safe parameters. The team was conformed by 2 main developers, me and someone else, a UX designer and a beginner programmer. We demoed for Google and OpenAI, as well as the Treehacks jury.',
            github: 'https://github.com/ahiraaam/treehacks-pedagog',
            date: 'February 2021',
            skills: ["React", "Javascript", "Firestore", "GitHub", "Google App Engine", "OpenAI GPT-3"],
            media: [
                {
                    type: 'image',
                    src: '/images/pedagog.jpg',
                    alt: 'Branding and logo for Pedagog'
                }
            ]
        },
        opencv: {
            title: 'Computer Vision Project',
            description: 'We, as a team of 4 developers, created a Python program that can take images as imput to apply convolutions to them. Also, the programm opens a live preview with the camera of the device and the user can see the available convolutions applied to the video. The projects is also able to dectec faces and draw overlays in the live preview based on the face position. This project was developed using Python, OpenCV and DLib using a pretrained datased for the face recognition. The project took about a week to develop because it was created as part of a school project.',
            github: 'https://github.com/SofiaDParamo/Convolution',
            date: 'September 2020',
            skills: ["Python", "OpenCV", "DLib", "GitHub"],
            media: [
                {
                    type: 'image',
                    src: 'https://github.com/SofiaDParamo/Convolution/raw/master/Examples/ui.gif',
                    alt: 'Project Demo animation'
                }
            ]
        }
    }
}

export default data;