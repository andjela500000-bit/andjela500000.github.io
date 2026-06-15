

const projectsData = {
    "fashion-blog": {
        title: "Fashion Blog Design",
        time: "1 day",
        description: "A simple design for a fashion blog, with the newest three articles shown on the right side while the main article is shown on the left.",
        skills: ["HTML", "CSS"],
        images: ["images for portfolio/fashion blog main.JPG", "images for portfolio/fashion blog article.JPG", "images for portfolio/fashion blog footer.JPG"]
    },
    "travel-site": {
        title: "Travel Site",
        time: "2 days",
        description: "Simple website made for a travel agency, with 4 distinct pages related to different topics of the website.",
        skills: ["HTML", "CSS"],
        images: ["images for portfolio/nm main page.JPG", "images for portfolio/nm history.JPG", "images for portfolio/nm prices.JPG", "images for portfolio/nm footer.JPG"]
    },
    "bakery-app": {
        title: "Pastry Shop Website Mockup",
        time: "2 days",
        description: "Website mockup for mobile phones, for showcasing all the products of a pastry shop and their ingredients as well as the ability to learn the history and get in contact with the pastry shop.",
        skills: ["Figma"],
        images: ["images for portfolio/main page.jpg", "images for portfolio/more information.jpg", "images for portfolio/contact.jpg", "images for portfolio/products.jpg", "images for portfolio/products filter.jpg"]
    },
    "weather-tracker": {
        title: "Weather Tracker App Mockup",
        time: "2 days",
        description: "App mockup for a weather app, primarily made for mobile phones with a lot of different looks for different weather conditions.",
        skills: ["Figma"],
        images: ["images for portfolio/sunny.jpg", "images for portfolio/mostly sunny.jpg", "images for portfolio/partly cloudy.jpg", "images for portfolio/cloudy.jpg", "images for portfolio/light rain.jpg", "images for portfolio/rain.jpg", "images for portfolio/thunderstorm.jpg", "images for portfolio/light snow.jpg", "images for portfolio/snow.jpg"]
    },
    "food-for-thought": {
        title: "Food For Thought",
        time: "1 day",
        description: "Informative website about fun and interesting facts of all kinds, with the newest article shown on the left and the three following articles shown on the right, as well as the ability to comment on the bottom of each open article.",
        url: "https://live-food-for-thoughts.pantheonsite.io/",
        skills: ["WordPress"],
        images: ["images for portfolio/wp main.JPG", "images for portfolio/wp article.JPG", "images for portfolio/wp about.JPG", "images for portfolio/wp contribute.JPG", "images for portfolio/wp footer.JPG"]
    },
    "know-your-parrots": {
        title: "Know Your Parrots",
        time: "2 days",
        description: "Informative website about parrots, with some articles that are SEO optimized and different sections for different topics related to parrots.",
        url: "https://live-know-your-parrots.pantheonsite.io/",
        skills: ["WordPress"],
        images: ["images for portfolio/wp kyp main.JPG", "images for portfolio/wp kyp content.JPG", "images for portfolio/wp kyp footer.JPG"]
    },
    "adobe-illustrator-1": {
        title: "3D Drawing Of A Tomato",
        time: "1 hour",
        description: "A 3D drawing of a tomato.",
        skills: ["Adobe Illustrator"],
        images: ["images for portfolio/adobe i tomato.jpg"]
    },
    "adobe-illustrator-2": {
        title: "Drawing Of A Giraffe",
        time: "3 hour",
        description: "A cartoony drawing of a giraffe.",
        skills: ["Adobe Illustrator"],
        images: ["images for portfolio/adobe i giraffe.jpg"]
    },
    "adobe-photoshop-1": {
        title: "Magazine",
        time: "2 hours",
        description: "A front page of a magazine.",
        skills: ["Adobe Photoshop"],
        images: ["images for portfolio/adobe p magazine.jpg"]
    },
    "adobe-photoshop-2": {
        title: "Mockup For A Book Cover",
        time: "2 hour",
        description: "A mockup for a book cover.",
        skills: ["Adobe Photoshop"],
        images: ["images for portfolio/adobe p book.jpg"]
    }
}

function popUpWindow (projectId) {
    const data = projectsData[projectId];
    const popUp = document.querySelector('.pop-up-window-visibility');

    popUp.querySelector('.project-name').innerHTML = data.title;
    popUp.querySelector('.time').innerHTML = data.time;
    popUp.querySelector('.description').innerHTML = data.description;
    
    const skillsList = popUp.querySelector('.skills-list');
    skillsList.innerHTML = (Array.isArray(data.skills) ? data.skills : [data.skills]).map(skill => `<li>${skill}</li>`).join('');

    const carouselLine = popUp.querySelector('.carousel-line');
    const images = Array.isArray(data.images) ? data.images : [data.images];
    carouselLine.innerHTML = images.map(imgSrc =>
        `<div class="image"><img src="${imgSrc}" alt=""></div>`
    ).join('');

    const linkButton = popUp.querySelector('.project-link');
    if (data.url) {
        linkButton.href = data.url;
        linkButton.style.display = "inline-block";
    } else {
        linkButton.style.display = "none"
    }

    popUp.style.display = "flex";

    initializeCarousel(popUp)
}

function initializeCarousel (container) {
    const carousel = container.querySelector('.carousel-line');
    const nextBtn = container.querySelector('.next-button');
    const previousBtn = container.querySelector('.previous-button');
    const exitBtn = container.querySelector('.exit-button');
    const slides = container.querySelectorAll('.image');

    if (slides.length === 0) return; 

    if (slides.length === 1) {
        nextBtn.style.display = "none";
        previousBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block"; 
        previousBtn.style.display = "block";
    }

    let currentIndex = 0;

    function updateSlide() {
        const slideWidth = slides[0].clientWidth;
        carousel.scrollTo({
            left: currentIndex * slideWidth, 
            behavior: 'smooth'
        });
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlide();
    };

    previousBtn.onclick = () => {
        currentIndex = (currentIndex > 0 ? currentIndex - 1 : slides.length - 1 );
            updateSlide();
    };

    exitBtn.onclick = closePopUp;

    updateSlide();
}

function closePopUp () {
    const popUpWrapper = document.querySelector('.pop-up-window-visibility'); 
    popUpWrapper.style.display = "none";
    document.body.style.overflow = "auto";
};