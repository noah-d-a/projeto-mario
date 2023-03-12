const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModdal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModdal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModdal();
    video.setAttribute("src", "");
});