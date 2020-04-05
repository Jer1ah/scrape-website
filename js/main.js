const navController = (function() {
    const navigation = document.querySelector(".navigation");

    const onScroll = () => {
        if( window.scrollY > 50 ) {
            navigation.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navigation.style.background = 'transparent';
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