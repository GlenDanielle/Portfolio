
const GoToLink = (url) => {
    if (url === "phone") {
        return null;
    } else if (url === "resume"){
        const link = document.createElement('a');
        link.href = '/assets/Resume.pdf';  // Ensure this path is correct
        link.download = "Glen's_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }else {
        window.open(url, '_blank');
    }
}

export default GoToLink;
