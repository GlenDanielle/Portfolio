import Images from "./Images"
    const {rtuLostNFound, ScratchGame, AS, BBC} = Images

const ProjectObj =
[
    {
        "status": "On Development",
        "name":"Blissful Bite Cafe",
        "link": "phone",
        "image": BBC,
        "desc": "A POS side project using react JS as front end and php Laravel for the back end with mysql in the database"
    },
    {
        "status": "Check Out",
        "name":"Rtu Lost And Found",
        "link": "https://www.rtu-lostandfound.online/",
        "image": rtuLostNFound,
        "desc": "A monitoring solution for my university as a capstone project, utilizing MERN stack with google oauth and JWT"
    },
    {
        "status": "Check Out",
        "name":"Scratch Game",
        "link": "https://github.com/GlenDanielle/Scratch",
        "image": ScratchGame,
        "desc": "A simple isometric shooter game made from the website Scratch inspired by stalker, and metro fallout games."
    },
    {
        "status": "Check Out",
        "name":"Monsieur Connoisseur",
        "link": "https://github.com/GlenDanielle/EcommerceAS",
        "image": AS,
        "desc": "A Java and Firebase, Point Ordering System mobile application in Android Studio for my simple side project"
    }
]

export default ProjectObj