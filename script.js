document.querySelector(".card").addEventListener("mouseover", function() {
    this.style.boxShadow = "0 6px 12px rgba(255, 51, 102, 0.6)";
});

document.querySelector(".card").addEventListener("mouseout", function() {
    this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
});
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let fullImage = document.getElementById("fullImage");
    fullImage.src = img.src;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
