export function initCarousel() {

    document.querySelectorAll(".carousel").forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const nextButton = carousel.querySelector(".next");
        const prevButton = carousel.querySelector(".prev");

        let index = 0;
        const itemsToShow = 4;
        const gap = 20;

        function updateCarousel() {
            const card = track.querySelector(".card");
            const cardWidth = card.offsetWidth + gap;

            track.style.transform = `translateX(-${index * cardWidth}px)`;

        }

        nextButton.addEventListener("click", () => {
            if (index < track.children.length - itemsToShow) {
                index++;
                updateCarousel();
            }
        });

        prevButton.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateCarousel();
            }
        });
    });
}