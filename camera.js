const democamera=document.getElementById('democamera');


navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
    democamera.srcObject=stream;
})