const GoToLink = (url) => {
    if (url === "phone") {
        return null;
    } else if (url === "resume") {
        const link = document.createElement('a');
        link.href = '../assets/Resume.pdf'; // Ensure this path is correct
        link.setAttribute('download', 'Resume.pdf');
        link.setAttribute('type', 'application/pdf');
        document.body.appendChild(link); // Append link to body
        link.click();
        document.body.removeChild(link); // Clean up the link
    } else {
        window.open(url, '_blank');
    }
}

export default GoToLink;
