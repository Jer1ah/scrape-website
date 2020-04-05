const headerController = (function() {
    const underlinedWord = document.querySelector(".heading span");
    
    const changeWord = (word) => {
        underlinedWord.textContent = word;
    };

    return {
        changeWord: changeWord
    }
}());
