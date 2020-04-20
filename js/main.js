//Mobile nav menu dropdown functionality 
const mobileNavController = (function() {
    $(".mobile-nav img").on("click", () => {
        if( $(".navigation__list").css("display") === "none" ) {
            $(".navigation__list").css("display", "flex");
        } else {
            $(".navigation__list").css("display", "none");
        }
    });

    $(window).resize(() => {
        if( $(window).innerWidth() > 975 ) {
            $(".navigation__list").css("display", "flex");
        } else if( $(window).innerWidth() < 975 ) {
            $(".navigation__list").css("display", "none");
        }
    })
}());


//Changing the underlined word in the header every 3 seconds
const headerController = (function() {
    const _wordsArray = ["Architecture", "Creative", "Design"];
    let index = 0;
    window.setInterval(() => {
        if(index === 3) {
            index = 0;
        }
        $(".heading span").fadeOut((() => {
            $(".heading span").html(_wordsArray[index]);
            $(".heading span").fadeIn()
            index++
        }));
    }, 5000);
}());


//Adding hover effect to team member's profile picture
const teamProfileController = (function() {
    const _profileList = document.querySelectorAll(".profile");
    const _socialOverlayList = document.querySelectorAll(".social-overlay");
    for(let i = 0; i < 4; i++) {
        _profileList[i].addEventListener("mouseover", () => {
            _socialOverlayList[i].style.transform = "translateY(0)";
            console.log($(window).width());
        });

        _profileList[i].addEventListener("mouseout", () => {
            _socialOverlayList[i].style.transform = "translateY(18rem)";
        });
    }
}());

