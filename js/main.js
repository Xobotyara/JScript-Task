'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.getElementById('left-side');
    let rightSide = document.getElementById('right-side');
    let leftItemInfo = document.getElementById('left__item-info');
    let leftImg = document.getElementById('left__item-img');
    let leftCalculator = document.querySelector('.left-side__item-calculator');
    
    rightBtn.onclick = function() {

        if(rightSide.classList.contains('minimaized')){

            rightSide.classList.remove('minimaized');
            leftSide.classList.remove('maximaized');
            rightSide.classList.add('maximaized');
            leftSide.classList.add('minimaized');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');
            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');
        } else if(leftSide.classList.contains('minimaized')){

            leftSide.classList.remove('minimaized');
            rightSide.classList.remove('maximaized');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');
        } else{

            leftSide.classList.add('minimaized');
            rightSide.classList.add('maximaized');

            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');
        }; 
    };
    leftBtn.onclick = function() {
        if(rightSide.classList.contains('minimaized')){

            leftSide.classList.remove('maximaized');
            rightSide.classList.remove('minimaized');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');
        } else if(leftSide.classList.contains('minimaized')){

            rightSide.classList.remove('maximaized');
            rightSide.classList.add('minimaized');
            leftSide.classList.add('maximaized');
            leftSide.classList.remove('minimaized');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');
            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');
        } else{

            leftSide.classList.add('maximaized');
            rightSide.classList.add('minimaized');

            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');
        };

        if(rightSide.classList.contains('minimaized')){
            leftImg.classList.add('animated');
            leftCalculator.style.top = '44px';
        } else {
            leftImg.classList.remove('animated');
            leftCalculator.style.top = ''; 
        }
        
        if (leftItemInfo.classList.contains('hidden')) {
            leftItemInfo.classList.remove('hidden');
            setTimeout(function () {
                leftItemInfo.classList.remove('visibleHidden');
            }, 20);
        } else {
            leftItemInfo.classList.add('visibleHidden');
            setTimeout(function () {
                leftItemInfo.classList.add('hidden');
            }, 400);
        };



    };
       



})