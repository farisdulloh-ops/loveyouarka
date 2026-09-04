function showLove() {

    const message = document.getElementById("loveMessage");

    message.scrollIntoView({
        behavior: "smooth"
    });

}


function openLetter() {

    const envelope = document.getElementById("envelope");

    envelope.classList.toggle("open");

}