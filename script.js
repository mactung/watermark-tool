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
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.style.width = '50%';
            canvas.style.height =
                (canvas.style.width / canvas.width) * canvas.height + 'px';
            ctx.drawImage(img, 0, 0);
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
            canvas.width / 3.2,
            logoImg.height * (canvas.width / 3.2 / logoImg.width)
        );
    };
}
