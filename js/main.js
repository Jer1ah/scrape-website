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


const headerController = (function() {
    const underlinedWord = document.querySelector(".heading span");
    
    const changeWord = (word) => {
        underlinedWord.textContent = word;
    };

    return {
        changeWord: changeWord
    }
}());


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

