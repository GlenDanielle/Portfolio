
const GoToLink = (url) => {
    if(url === "phone"){
        return null
    }
    else if(url === "resume"){
        const link= document.createElement('a')
        link.href = '../assets/Resume.pdf';
        link.setAttribute('download', "Resume.pdf")
        link.setAttribute('type', 'application/pdf')
        link.click();
    }else{
        window.open(url, '_blank')
    }
}

export default GoToLink