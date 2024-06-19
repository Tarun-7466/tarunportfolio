let circle = document.querySelector('.circle');

document.body.addEventListener('mousemove', function (event) {
    let xValue = event.clientX;
    let yValue = event.clientY;

    // Update the circle's position with a slight delay for smoother motion
    setTimeout(function () {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 10); // Adjust the delay (in milliseconds) as needed for smoother animation
});
