let input1 = document.getElementById("image1")
let input2 = document.getElementById("image2")

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

let button = document.querySelector("button")

button.addEventListener('click', readUrl)
    
function readUrl() {
  const [file] = input1.files
  const [file2] = input2.files
  if(file) {
    img1.src = URL.createObjectURL(file)
    img2.src = URL.createObjectURL(file2)
    setTimeout(() => {
      window.onload = canvas()
    }, 300)
  }
}

function canvas() {
  const canvas = document.getElementById("my-house");
  const ctx = canvas.getContext("2d");
  const imgWidth = img1.width;
  const imgHeight = img1.height;
  const imgWidht2 = img2.width;
  const imgHeight2 = img2.height;
  const imgWidth3 = imgWidth + imgWidht2
  const imgHeight3 = imgHeight + imgHeight2
  console.log(imgHeight + ' ' + imgWidth)
  ctx.canvas.width  = imgWidth3
  ctx.canvas.height = imgHeight3
  ctx.drawImage(img1, 0, 0);
  ctx.drawImage(img2, imgWidth, 0);
}
