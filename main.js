function changeHeading() {
    const heading = document.getElementById('main-heading');
    const keywords = ['Front End Developer', 'UI/UX Designer'];
    let index = 0;
    let isDeleting = false;
    let text = '';

    function type() {
        const currentText = keywords[index];
        if (isDeleting) {
            text = currentText.substring(0, text.length - 1);
        } else {
            text = currentText.substring(0, text.length + 1);
        }

        heading.textContent = `Hi! I'm Yan Qi, ${text}`;

        let typeSpeed = 80; // Adjust typing speed here
        if (isDeleting) {
            typeSpeed /= 2; // Adjust deleting speed
        }

        if (!isDeleting && text === currentText) {
            isDeleting = true;
            typeSpeed = 1000; // Pause at end of typing
        } else if (isDeleting && text === '') {
            isDeleting = false;
            index = (index + 1) % keywords.length;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

window.onload = changeHeading;


let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work'
    },
    animation: {
        duration: 300
    }
}); 


// Select all elements with the class 'work-item' and store them in the linkWork variable
const linkWork = document.querySelectorAll('.work-item');

// Define a function called activeWork, which will be used to remove the 'active-work' class from all 'work-item' elements
// and add the 'active-work' class to the clicked 'work-item' element
function activeWork() {
    // Remove the 'active-work' class from all 'work-item' elements
    linkWork.forEach(l => l.classList.remove('active-work'));
    // This line adds the active-work class to the clicked .work-item element. The this keyword refers to the element that triggered the event (i.e., the clicked element).
    this.classList.add('active-work');
}

// This line adds a click event listener to each .work-item element. 
// When any .work-item element is clicked, the activeWork function is called, 
// which removes the active-work class from all elements and adds it to the clicked element, 
// effectively highlighting it as the active filter button.
linkWork.forEach(l => l.addEventListener("click", activeWork));



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px"
    
}