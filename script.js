document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".container button");
    const squares = document.querySelectorAll(".square");

    let currentIndex = -1;

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            squares.forEach(function (square) {
                square.classList.remove("falling");
            });

            squares.forEach(function (square) {
                square.classList.remove("falling");
                square.style.backgroundColor = "transparent";
            });

            squares[index].classList.add("falling");
            squares[index].style.borderColor = buttons[index].style.borderColor;

            if (currentIndex > 0) {
                squares[currentIndex].style.backgroundColor = squares[currentIndex].style.borderColor;
                squares[currentIndex].classList.remove("falling");
            }

            currentIndex = index;
        });
    });
});
