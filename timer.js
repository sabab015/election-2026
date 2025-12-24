document.addEventListener("DOMContentLoaded", function () {

    const countdownEl = document.querySelector(".events-cd");
    if (!countdownEl) return;

    const targetDate = new Date(countdownEl.getAttribute("data-countdown")).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("days").innerText = "০০";
            document.getElementById("hours").innerText = "০০";
            document.getElementById("minutes").innerText = "০০";
            document.getElementById("seconds").innerText = "০০";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("days").innerText = days.toLocaleString("bn-BD", { minimumIntegerDigits: 2 });
        document.getElementById("hours").innerText = hours.toLocaleString("bn-BD", { minimumIntegerDigits: 2 });
        document.getElementById("minutes").innerText = minutes.toLocaleString("bn-BD", { minimumIntegerDigits: 2 });
        document.getElementById("seconds").innerText = seconds.toLocaleString("bn-BD", { minimumIntegerDigits: 2 });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
