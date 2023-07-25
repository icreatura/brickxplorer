
function showRandomImage() {
  const imageNumber = Math.floor(Math.random() * 9999) + 1;
  const searchParams = new URLSearchParams(window.location.search)
  const filetype = searchParams.get('f')
  window.location.search = `?n=${imageNumber}&f=${filetype}`
}

function showNumberImage() {
  const imageNumber = parseInt(prompt("Brick ID"));
  const searchParams = new URLSearchParams(window.location.search)
  const filetype = searchParams.get('f')
  window.location.search = `?n=${imageNumber}&f=${filetype}`
}

function setFileType(filetype) {
  const searchParams = new URLSearchParams(window.location.search)
  const imageNumber = searchParams.get('n')
  window.location.search = `?n=${imageNumber}&f=${filetype}`
}

function updateImage() {

  const supportedFileTypes = ['mp4', 'png', 'gif']

  const searchParams = new URLSearchParams(window.location.search)
  const imageNumber = searchParams.get('n')
  let filetype = searchParams.get('f')

  if(!supportedFileTypes.includes(filetype)) {
    filetype = 'mp4'
  }
  
  if (imageNumber === undefined || isNaN(imageNumber) || imageNumber < 1 || imageNumber > 9999) {
    document.getElementById('downloadContainer').style.display = "none"
    document.querySelector('figure').style.display = "none"
    return;
  }

  document.getElementById('figurine').style.display = "none"

  // video container
  const imageContainer = document.getElementById("imageContainer");
  const videoUrl = `https://bricktopians.com/v1/${imageNumber}.${filetype}`;

  if(filetype === 'mp4') {
    imageContainer.innerHTML = `<video src="${videoUrl}" autoplay loop muted></video><figcaption>${imageNumber}</figcaption>`;
  } else {
    imageContainer.innerHTML = `<img src="${videoUrl}"></img><figcaption>${imageNumber}</figcaption>`;
  }
}

updateImage()