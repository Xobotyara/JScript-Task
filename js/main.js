'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.getElementById('left-side');
    let rightSide = document.getElementById('right-side');
    let leftSideWidth = 100 / (parseFloat(getComputedStyle(document.body).width) / parseFloat(getComputedStyle(leftSide).width));
    let rightSideWidth = 100 / (parseFloat(getComputedStyle(document.body).width) / parseFloat(getComputedStyle(rightSide).width));

    function animations(step, direction){
        let start = Date.now(); 
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            if (timePassed >= 420) {
                leftBtn.disabled = false;
                rightBtn.disabled = false;
                clearInterval(timer);
                return;
            };

            if(direction == 'left'){
                rightSideWidth += step;
                rightSide.style.width = rightSideWidth +'%';
                leftSideWidth -= step;
                leftSide.style.width = leftSideWidth + '%'
            } else{
                rightSideWidth -= step;
                rightSide.style.width = rightSideWidth +'%';
                leftSideWidth += step;
                leftSide.style.width = leftSideWidth + '%'
            };
        }, 20);
    };

    rightBtn.onclick = function() {
        leftBtn.disabled = true;
        if(rightSideWidth == 10){
            animations(4, 'left');
        } else if(leftSideWidth == 10){
            animations(2, 'right'); 
        } else{
            animations(2, 'left');
        }; 
    };

    leftBtn.onclick = function() {
        rightBtn.disabled = true;
        if(leftSideWidth == 10){
            animations(4, 'right');
        } else if(rightSideWidth == 10){
            animations(2, 'left'); 
        } else {
            animations(2, 'right'); 
        };
      };



})