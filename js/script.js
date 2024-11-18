function setImages(){
  var imgElements = document.querySelectorAll('img');
  imgElements.forEach(function(img, index) {
      img.setAttribute('tabindex', '0');
      console.log('Image ' + (index + 1));
  });
}
setImages();