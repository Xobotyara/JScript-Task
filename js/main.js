'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.getElementById('left-side');
    let rightSide = document.getElementById('right-side');
    let leftSideWidth = 100 / (parseFloat(getComputedStyle(document.body).width) / parseFloat(getComputedStyle(leftSide).width));
    let rightSideWidth = 100 / (parseFloat(getComputedStyle(document.body).width) / parseFloat(getComputedStyle(rightSide).width));

    function animations(interval, timeToClear, step, direction){
        let start = Date.now(); 
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            if (timePassed >= timeToClear) {
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
        }, interval);
    };

    leftBtn.onclick = function() {
        leftBtn.disabled = true;
        if(rightSideWidth == 4){
            animations(20, 480, 4, 'left');
        } else if(leftSideWidth == 4){
            animations(20, 480, 2, 'right'); 
        } else{
            animations(20, 480, 2, 'left');
        }; 
    };

    rightBtn.onclick = function() {
        rightBtn.disabled = true;
        if(leftSideWidth == 4){
            animations(20, 480, 4, 'right');
        } else if(rightSideWidth == 4){
            animations(20, 480, 2, 'left'); 
        } else {
            animations(20, 480, 2, 'right'); 
        };
      };



})