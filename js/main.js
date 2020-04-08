//Changing the background color of the nav on scroll
const navController = (function() {
    const _navigation = document.querySelector(".navigation");

    const onScroll = () => {
        if( window.scrollY > 50 ) {
            _navigation.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            _navigation.style.background = 'transparent';
        }
    };

    window.addEventListener("scroll", onScroll);
}());


//Changing the underlined word in the header every 3 seconds
const headerController = (function() {
    let _underlinedWord = document.querySelector(".heading span");
    const _wordsArray = ["Architecture", "Creative", "Design"];
    let index = 0;
    window.setInterval(() => {
        if(index === 3) {
            index = 0;
        }
        _underlinedWord.textContent = _wordsArray[index];
        index++;
        console.log(index);
    }, 5000);
}());


//Adding hover effect to team member's profile picture
const teamProfileController = (function() {
    const _profileList = document.querySelectorAll(".profile");
    const _socialOverlayList = document.querySelectorAll(".social-overlay");
    for(let i = 0; i < 4; i++) {
        _profileList[i].addEventListener("mouseover", () => {
            _socialOverlayList[i].style.transform = "translateY(0)";
        });

        _profileList[i].addEventListener("mouseout", () => {
            _socialOverlayList[i].style.transform = "translateY(18rem)";
        });
    }
}());

