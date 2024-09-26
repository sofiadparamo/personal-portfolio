import Landing from "./Landing";
import Title from "./Title";
import Entry from "./Entry";

let Home = () => {
    return (
        <div>
            <Landing/>
            <Title title={"Projects I've Worked On"}/>
            <div className={"entries-container"} id={"work"}>
                <Entry
                    title={"Labor Expenses Recovery Tool"}
                    description={"A tool developed for the IBM management teams to administrate the expenses and resources of a project. The tool has a very complex architecture and its development was as close to a comercial software as possible."}
                    image={"images/lert.png"}
                    id={"lert"}

                />
                <Entry 
                    title={"ITESM Classroom reservation system"}
                    description={"A system for the scholar team to manage the classrooms and their reservations allowing them to book and organize schedules in a matter of seconds, avoiding conflicts between reservations."}
                    image={"images/itesm.png"}
                    id={"reservationsystem"}
                />
                <Entry
                    title={"HiTec Student Groups Quiz"}
                    description={"A web quiz for first-year students to meet the student groups at the university."}
                    code={"https://github.com/TECoding/hitec-2021"}
                    image={"images/hitec.png"}
                    id={"hitec"}
                    demo={"https://hitec.tecoding.org/"}
                />
                <Entry
                    title={"Hiring Management System"}
                    description={"Web application to manage candidates in various stages of a company. Built at Tec de Monterrey."}
                    image={"images/hiring.png"}
                    id={"hiring"}
                />
                <Entry 
                    title={"Endless Runner"}
                    description={"A game developed for the Unity course. The game is a simple platformer with a endless runner and a collectible object."}
                    image={"images/endlessrunner.png"}
                    id={"endlessrunner"}
                    demo={"https://play.sweetsofimc.dev/"}
                />
                <Entry
                    title={"Pedagog"}
                    description={"Educational platform powered with OpenAI for TreeHacks Stanford University Hackathon"}
                    demo={"https://www.youtube.com/watch?v=FovBurrPZOU"}
                    code={"https://github.com/ahiraaam/treehacks-pedagog"}
                    image={"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/396/000/datas/gallery.jpg"}
                    id={"pedagog"}
                />
                <Entry
                    title={"Computer Vision Project"}
                    description={"Image convolution and face recognition project"}
                    code={"https://github.com/SofiaDParamo/Convolution"}
                    image={"https://github.com/SofiaDParamo/Convolution/raw/master/Examples/ui.gif"}
                    id={"opencv"}
                />
            </div>
            <Title title={"My programming Languages"} style={{background: "linear-gradient(135deg, #EF4136 0%, #FBB040 100%)"}}/>
            <div className={"badge-container"} style={{background: "linear-gradient(135deg, #FFE985 0%, #FA742B 100%)"}} id={"languages"}>
                <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                <img src="https://img.shields.io/badge/4%20years-69b34c?style=for-the-badge" alt="4 years" />
                <br/>
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript" />
                <img src="https://img.shields.io/badge/2%20years-acb334?style=for-the-badge" alt="2 years" />
                <br/>
                <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
                <img src="https://img.shields.io/badge/2%20years-acb334?style=for-the-badge" alt="2 years" />
                <br/>
                <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                <img src="https://img.shields.io/badge/1%20year-fab733?style=for-the-badge" alt="1 year" />
                <br/>
                <img src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=whit" alt="Swift" />
                <img src="https://img.shields.io/badge/6%20months-ff8e15?style=for-the-badge" alt="6 months" />
                <br/>
                <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
                <img src="https://img.shields.io/badge/beginner%20(proficient)-ff4e11?style=for-the-badge" alt="Beginner (proficient)" />
                <br/>
                <img src="https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white" alt="R" />
                <img src="https://img.shields.io/badge/beginner%20(proficient)-ff4e11?style=for-the-badge" alt="Beginner (proficient)" />
                <br/>
                <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
                <img src="https://img.shields.io/badge/Learning-ff0d0d?style=for-the-badge" alt="Learning" />
                <br/>
                <img src="https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
                <img src="https://img.shields.io/badge/Learning-ff0d0d?style=for-the-badge" alt="Learning" />
            </div>
            <Title title="Technologies I use" style={{background: "linear-gradient(135deg, #FF00D4 0%, #00DDFF 100%)"}}/>
            <div className="badge-container" style={{background: "linear-gradient(135deg, #28313B 0%, #485461 100%)"}} id={"technologies"}>
                <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextJS"/>
                <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
                <img src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity"/>
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
                <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
                <img src="https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white" alt="CircleCI"/>
                <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="VueJS"/>
                <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
                <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
                <img src="https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white" alt="OpenCV"/>
                <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"/>
                <img src={"https://img.shields.io/badge/Discord_API-5865F2?style=for-the-badge&logo=discord&logoColor=white"} alt="Discord"/>
                <img src="https://img.shields.io/badge/Kubernetes-3069de?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes"/>
                <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud"/>
                <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic"/>
                <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions"/>
                <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
                <img src="https://img.shields.io/badge/IBM_Cloud-00c9db?style=for-the-badge&logo=ibm&logoColor=black" alt="IBM Cloud"/>
                <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify"/>
                <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="NGINX"/>
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
                <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
                <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"/>
                <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS"/>
                <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" alt="Cloudflare"/>
                <img src="https://img.shields.io/badge/Postman-ff6c37?style=for-the-badge&logo=postman&logoColor=black" alt="Postman"/>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
                <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
                <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" alt="Jenkins"/>
                <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=black" alt="Oracle"/>
            </div>
        </div>
    );
}

export default Home;