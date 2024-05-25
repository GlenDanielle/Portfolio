import Resume from '../assets/Resume.pdf'
const GoToLink = (url) => {
    if (url === "phone" || url === "resume") 
    {
        return null;
    } else {
        window.open(url, '_blank');
    }
}

export default GoToLink;
