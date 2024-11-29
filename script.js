let images = document.querySelectorAll('.slideFirst .slider img');

let controlImages = document.querySelectorAll('.slideFirst .controller .selections button');


let index = 0;

let bestSellerTitle = document.getElementById("bestSellerTitle");
let sideSlogan = document.getElementById("sideSlogan");
let rate = document.getElementById("rate");
let firstMealWord = document.getElementById("firstMealWord");
let secondMealWord = document.getElementById("secondMealWord");
let rotationStar = document.getElementById("starRotate");

const fontSizes = ["porkFontSize", "fishFontSize", "chickenFontSize", "beefFontSize"];

let rotationAngle = 0;

function textDisplay() {

    if (index == 0) {
        bestSellerTitle.textContent = "#1 Best Seller";
        sideSlogan.innerHTML = 'Unleash the Flavor: <span>Pork Sisig</span> Done Right!';
        
        fontSizes.forEach(fontSize => sideSlogan.classList.remove(fontSize));

        sideSlogan.classList.add("porkFontSize");

        rate.textContent = "4.8";
        firstMealWord.textContent = "PORK";
        secondMealWord.textContent = "SISIG";

    }
    else if(index == 1) {
        bestSellerTitle.textContent = "#2 Best Seller";
        sideSlogan.innerHTML = "Crispy, Tangy, and Unforgettable: The Best <span>Daing na Bangus</span>!"

        fontSizes.forEach(fontSize => sideSlogan.classList.remove(fontSize));
        
        sideSlogan.classList.add("fishFontSize");


        rate.textContent = "4.7";   
        firstMealWord.textContent = "DAING NA";
        secondMealWord.textContent = "BANGUS";

    }
    else if(index == 2) {
        bestSellerTitle.textContent = "#3 Best Seller";
        sideSlogan.innerHTML = "A Taste of Tradition in Every Bite of <span>Chicken Adobo</span>!"

        fontSizes.forEach(fontSize => sideSlogan.classList.remove(fontSize));

        sideSlogan.classList.add("chickenFontSize");

        rate.textContent = "4.9";   
        firstMealWord.textContent = "CHICKEN";
        secondMealWord.textContent = "ADOBO";

    }
    else if(index == 3) {
        bestSellerTitle.textContent = "#4 Best Seller";
        sideSlogan.innerHTML = "One Taste and You’ll Be Hooked on Our <span>Beef Pares</span>!"

        fontSizes.forEach(fontSize => sideSlogan.classList.remove(fontSize));

        sideSlogan.classList.add("beefFontSize");

        rate.textContent = "4.7";   
        firstMealWord.textContent = "BEEF";
        secondMealWord.textContent = "PARES";

    }
}


// Check if images were found
if (images.length > 0) {
    initial();
} 
else {
    console.error("No images found. Check your selector.");
}

function initial() {
    index = Math.floor(Math.random() * images.length); 

    textDisplay();
    images[index].classList.replace('hide', 'show');
    controlImages[index].style.setProperty('--var-button-background2', 'linear-gradient(to bottom, rgb(187, 0, 255), rgb(255, 0, 234))');
    setInterval(next, 5000);
}

function fadeOutEffect() {
    firstMealWord.classList.add('fade-out');
    secondMealWord.classList.add('fade-out');
    rate.classList.add('fade-out');
    bestSellerTitle.classList.add('fade-out');
    sideSlogan.classList.add('fade-out');

    // Wait for the fade-out transition to complete before changing the text
    setTimeout(() => {
        textDisplay();
        firstMealWord.classList.remove('fade-out');
        secondMealWord.classList.remove('fade-out');
        rate.classList.remove('fade-out');
        bestSellerTitle.classList.remove('fade-out');
        sideSlogan.classList.remove('fade-out');
    }, 500); // Match this duration to your CSS transition duration
}

function next() {

    fadeOutEffect();

    rotationAngle += 90;

    rotationStar.style.transform = `rotate(${rotationAngle}deg)`;


    const currentImage = images[index];
    const currentControlImage = controlImages[index];


    currentControlImage.style.background = "#D9D9D9";

    index = (index >= images.length - 1) ? 0 : index + 1;

    const nextImage = images[index];
    const nextControlImage = controlImages[index];

    nextControlImage.style.background = "linear-gradient(to bottom, rgb(187, 0, 255), rgb(255, 0, 234))";


    nextImage.classList.replace('hide', 'prevHide'); // Show the next image immediately

    setTimeout(() => {
        // Slide in the new image from the left
        nextImage.classList.replace('prevHide', 'show');
        
        // Slide out the current image to the right
        currentImage.classList.replace('show', 'nextHide');
        
        // Clean up classes after the transition
        setTimeout(() => {
            currentImage.classList.replace('nextHide', 'hide'); // Hide the old image
        }, 500); // Match the transition duration in CSS
    }, 20); // Small delay to ensure the `prevHide` class applies before `show`

    

}


function fadeInEffect() {
    firstMealWord.classList.add('fade-in');
    secondMealWord.classList.add('fade-in');
    rate.classList.add('fade-in');
    bestSellerTitle.classList.add('fade-in');
    sideSlogan.classList.add('fade-in');

    // Wait for the fade-out transition to complete before changing the text
    setTimeout(() => {
        textDisplay();
        firstMealWord.classList.remove('fade-in');
        secondMealWord.classList.remove('fade-in');
        rate.classList.remove('fade-in');
        bestSellerTitle.classList.remove('fade-in');
        sideSlogan.classList.remove('fade-in');
    }, 500); // Match this duration to your CSS transition duration
}

function prev() {

    fadeInEffect();
    //previous image

    rotationAngle -= 90;

    rotationStar.style.transform = `rotate(${rotationAngle}deg)`;

    const currentImage = images[index];
    const currentControlImage = controlImages[index];

    currentControlImage.style.background = "#D9D9D9";

    index = (index <= 0) ? images.length - 1 : index - 1;

    const nextImage = images[index];
    const nextControlImage = controlImages[index];

    nextControlImage.style.background = "linear-gradient(to bottom, rgb(187, 0, 255), rgb(255, 0, 234))";

    nextImage.classList.replace('hide', 'nextHide');

    setTimeout(() => {
        // Slide in the new image from the left
        nextImage.classList.replace('nextHide', 'show');
        
        // Slide out the current image to the right
        currentImage.classList.replace('show', 'prevHide');
        
        // Clean up classes after the transition
        setTimeout(() => {
            currentImage.classList.replace('prevHide', 'hide'); // Hide the old image
        }, 500); // Match the transition duration in CSS
    }, 20); // Small delay to ensure the `prevHide` class applies before `show`


}


