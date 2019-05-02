// This is a JavaScript file

$(document).on('click', '#camera', function(){
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
      console.log(navigator.camera);
  }
});


function cameraCallback(imageData) {
  var image = document.getElementById('myImage');
  image.src = "data:image/jpeg;base64," + imageData;
}


$(document).on('click', '#limpar', function(){
  navigator.camera.cleanup(onSuccess, onFail);
  function onSuccess() {
      console.log("Camera cleanup success.")
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
});



