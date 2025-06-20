function changeGreeting() {
    const element = document.getElementById('title');
    element.innerText = "Halo Dunia, Saya lagi belajar di Gradient";
}

function addCircle() {
    const container = document.getElementById('circle-container');
    console.log(container);
    const circle = document.createElement('div')
    circle.className = "circle";

    container.appendChild(circle);
} 