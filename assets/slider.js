var i = 0;
var imgslide = [];
var time = 2500;

imgslide[0] = 'assets/images/img1.jpg';
imgslide[1] = 'assets/images/img2.jpg';
imgslide[2] = 'assets/images/img3.jpg';
imgslide[3] = 'assets/images/img4.jpg';
imgslide[4] = 'assets/images/img5.jpg';

function changeslider(){
    document.slider.src = imgslide[i];
    if(i < imgslide.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeslider()", time);
}

window.onload = changeslider;