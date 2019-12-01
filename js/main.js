'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.getElementById('left-side');
    let rightSide = document.getElementById('right-side');
    let leftContainer = document.querySelector('.left-side__container');
    let leftItemInfo = document.getElementById('left__item-info');
    let leftSelector = document.querySelector('.left-side__selector');
    let leftImg = document.getElementById('left__item-img');
    let leftCalculator = document.querySelector('.left-side__item-calculator');
    let leftCostBox = document.querySelector('.item-calculator__cost');
    let leftAvatars = document.querySelector('.item-calculator__avatars');
    let formSelector = document.querySelector('.selector');

    function toggleLeftContentAnimation(){
        leftImg.classList.toggle('animated');
        leftCalculator.classList.toggle('animated');
        leftCostBox.classList.toggle('animated');
        leftAvatars.classList.toggle('animated');
        leftAvatars.classList.toggle('visibleHidden');
    }

    function switchHidden(elementToSwitch){
        if (elementToSwitch.classList.contains('hidden')) {
            elementToSwitch.classList.remove('hidden');
            setTimeout(function () {
                elementToSwitch.classList.remove('visibleHidden');
            }, 20);
        } else {                                            
            elementToSwitch.classList.add('visibleHidden');
            setTimeout(function () {
                elementToSwitch.classList.add('hidden');
            }, 400);
        };
    }


    rightBtn.onclick = function() {

        if(rightSide.classList.contains('minimaized')){ //Левая створка раскрыта, нажимаем правую кнопку

            rightSide.classList.remove('minimaized');
            leftSide.classList.remove('maximaized');
            rightSide.classList.add('maximaized');
            leftSide.classList.add('minimaized');

            leftContainer.classList.add('scrolled');
            leftSelector.classList.add('hidden');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');
            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');

            toggleLeftContentAnimation();
            switchHidden(leftItemInfo);

        } else if(leftSide.classList.contains('minimaized')){ //Правая створка раскрыта, нажимаем правую кнопку

            leftSide.classList.remove('minimaized');
            rightSide.classList.remove('maximaized');

            leftContainer.classList.remove('scrolled');
            leftSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');

        } else{                                              //Пополам, нажимаем правую кнопку

            leftSide.classList.add('minimaized');
            rightSide.classList.add('maximaized');

            leftContainer.classList.add('scrolled');
            leftSelector.classList.add('hidden');

            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');
        }; 

    };


    leftBtn.onclick = function() {
        
        if(rightSide.classList.contains('minimaized')){ //Левая створка раскрыта, нажимаем левую кнопку

            leftSide.classList.remove('maximaized');
            rightSide.classList.remove('minimaized');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');

            toggleLeftContentAnimation();
            switchHidden(leftItemInfo);

        } else if(leftSide.classList.contains('minimaized')){ //Правая створка раскрыта, нажимаем левую кнопку

            rightSide.classList.remove('maximaized');
            rightSide.classList.add('minimaized');
            leftSide.classList.add('maximaized');
            leftSide.classList.remove('minimaized');

            leftContainer.classList.remove('scrolled');
            leftSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');
            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');

            toggleLeftContentAnimation();
            switchHidden(leftItemInfo);

        } else{                                                 //Пополам, нажимаем левую кнопку

            leftSide.classList.add('maximaized');
            rightSide.classList.add('minimaized');

            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');

            toggleLeftContentAnimation();
            switchHidden(leftItemInfo);
        };

    };





    formSelector.onclick = function(){
        document.querySelector('.checked').classList.remove('checked');     
        let inputChecked = document.querySelector('input[type="radio"]:checked');
        inputChecked.parentElement.classList.add('checked');   
    }



})