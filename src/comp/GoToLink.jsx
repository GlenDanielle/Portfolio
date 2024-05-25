const GoToLink = (url) => {
    if (url === "phone") {
        return null;
    } else if (url === "resume") {
        const link = document.createElement('a');
        link.href = '/path/to/Resume.pdf'; // Ensure this path is correct and accessible
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
