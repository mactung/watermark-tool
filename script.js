var canvas = document.getElementById('canvas');
console.log(window.innerWidth);
var ctx = canvas.getContext('2d');
let cw = canvas.width;
let ch = canvas.height;
let fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', function () {
    const FR = new FileReader();
    FR.addEventListener('load', (evt) => {
        const img = new Image();
        img.src = evt.target.result;
        img.onload = function () {
            canvas.height = window.innerHeight;
            canvas.width = img.width * (window.innerHeight / img.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            drawLogo();
        };
    });
    FR.readAsDataURL(this.files[0]);
});

function drawLogo() {
    let logoImg = new Image();
    logoImg.src = './logo.png';
    logoImg.onload = function () {
        ctx.drawImage(
            logoImg,
            20,
            20,
            canvas.width / 3,
            logoImg.height * (canvas.width / 3 / logoImg.width)
        );
    };
}
