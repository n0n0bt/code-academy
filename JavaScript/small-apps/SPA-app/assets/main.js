window.onload = function () {
    const navLinks = document.querySelectorAll("#navList li");
    const galleryImages = document.querySelectorAll("#gallery img");

    navLinks.forEach(link => {
        link.addEventListener("click", pageLoad);
    });

    galleryImages.forEach(img => {
        img.addEventListener("click", createImageModal)
    });
}

function pageLoad() {
    window.scrollTo({ top: 0 });
    // fist we get the id from the link text
    let sectionID = this.textContent.toLocaleLowerCase();

    // Then we need to clear the active class then set it to
    // the link item that is clicked        
    document.querySelectorAll("#navList li").forEach(link => {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
        }
    });
    this.classList.add("active");

    // And then we change the display of the sections with the same id
    // as the link text
    document.querySelectorAll("main section").forEach(sec => {
        if (sec.id === sectionID) {
            sec.classList.remove("d-none");
        } else if (!sec.classList.contains("d-none")) {
            sec.classList.add("d-none");
        }
    });
}

function createImageModal() {
    const modal = document.querySelector(".image-modal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = this.src;

    modal.style.display = "flex";
    document.querySelector(".modal-overlay").addEventListener("click", function () {
        modal.style.display = "none";
    });
    document.querySelector(".modal-span").addEventListener("click", function () {
        modal.style.display = "none";
    });
}