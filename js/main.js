'use strict';

document.addEventListener('DOMContentLoaded', function(){
    let leftSide = document.getElementById('left-side');
    let rightSide = document.getElementById('right-side');
    let leftContainer = document.querySelector('.left-side__container');
    let rightContainer = document.querySelector('.right-side__container');
    let leftItemInfo = document.getElementById('left__item-info');
    let rightItemInfo = document.getElementById('right__item-info');
    let leftSelector = document.querySelector('.left-side__selector');
    let rightSelector = document.querySelector('.right-side__selector');
    let leftImg = document.getElementById('left__item-img');
    let rightImg = document.getElementById('right__item-img');
    let leftCalculator = document.querySelector('.left__item-calculator');
    let rightCalculator = document.querySelector('.right__item-calculator');
    let leftCostBox = document.querySelector('.item-calculator__cost.left');
    let rightCostBox = document.querySelector('.item-calculator__cost.right');
    let leftAvatars = document.querySelector('.item-calculator__avatars.left');
    let rightAvatars = document.querySelector('.item-calculator__avatars.right');
    let formSelector = document.querySelectorAll('.selector');

    function toggleLeftContentAnimation(){
        leftImg.classList.toggle('animated');
        leftCalculator.classList.toggle('animated');
        leftCostBox.classList.toggle('animated');
        leftAvatars.classList.toggle('animated');
        leftAvatars.classList.toggle('visibleHidden');
    }

    function toggleRightContentAnimation(){
        rightImg.classList.toggle('animated');
        rightCalculator.classList.toggle('animated');
        rightCostBox.classList.toggle('animated');
        rightAvatars.classList.toggle('animated');
        rightAvatars.classList.toggle('visibleHidden');
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
            }, 300);
        };
    }


    rightBtn.onclick = function() {

        if(rightSide.classList.contains('minimaized')){ //Левая створка раскрыта, нажимаем правую кнопку

            rightSide.classList.remove('minimaized');
            leftSide.classList.remove('maximaized');
            rightSide.classList.add('maximaized');
            leftSide.classList.add('minimaized');

            leftContainer.classList.add('scrolled');
            rightContainer.classList.remove('scrolled');
            leftSelector.classList.add('hidden');
            rightSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');
            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');

            toggleRightContentAnimation();
            toggleLeftContentAnimation();
            switchHidden(leftContainer);
            switchHidden(rightContainer);
            switchHidden(leftItemInfo);
            switchHidden(rightItemInfo);
            switchHidden(leftAvatars);
            switchHidden(rightAvatars);

        } else if(leftSide.classList.contains('minimaized')){ //Правая створка раскрыта, нажимаем правую кнопку

            leftSide.classList.remove('minimaized');
            rightSide.classList.remove('maximaized');

            leftContainer.classList.remove('scrolled');
            leftSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');

            toggleRightContentAnimation();
            switchHidden(leftContainer);
            switchHidden(rightItemInfo);
            switchHidden(rightAvatars);

        } else{                                              //Пополам, нажимаем правую кнопку

            leftSide.classList.add('minimaized');
            rightSide.classList.add('maximaized');

            leftContainer.classList.add('scrolled');
            leftSelector.classList.add('hidden');

            leftBtn.classList.add('go-left');
            rightBtn.classList.add('go-left');

            toggleRightContentAnimation();
            switchHidden(leftContainer);
            switchHidden(rightItemInfo);
            switchHidden(rightAvatars);
        }; 

    };


    leftBtn.onclick = function() {
        
        if(rightSide.classList.contains('minimaized')){ //Левая створка раскрыта, нажимаем левую кнопку

            leftSide.classList.remove('maximaized');
            rightSide.classList.remove('minimaized');

            rightContainer.classList.remove('scrolled');
            rightSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-right');
            rightBtn.classList.remove('go-right');

            toggleLeftContentAnimation();
            switchHidden(rightContainer);
            switchHidden(leftItemInfo);
            switchHidden(leftAvatars);

        } else if(leftSide.classList.contains('minimaized')){ //Правая створка раскрыта, нажимаем левую кнопку

            rightSide.classList.remove('maximaized');
            rightSide.classList.add('minimaized');
            leftSide.classList.add('maximaized');
            leftSide.classList.remove('minimaized');


            rightContainer.classList.add('scrolled');
            rightSelector.classList.add('hidden');
            leftContainer.classList.remove('scrolled');
            leftSelector.classList.remove('hidden');

            leftBtn.classList.remove('go-left');
            rightBtn.classList.remove('go-left');
            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');

            toggleRightContentAnimation();
            toggleLeftContentAnimation();
            switchHidden(leftContainer);
            switchHidden(rightContainer);
            switchHidden(leftItemInfo);
            switchHidden(rightItemInfo);
            switchHidden(rightAvatars);
            switchHidden(leftAvatars);

        } else{                                                 //Пополам, нажимаем левую кнопку

            leftSide.classList.add('maximaized');
            rightSide.classList.add('minimaized');

            rightContainer.classList.add('scrolled');
            rightSelector.classList.add('hidden');

            leftBtn.classList.add('go-right');
            rightBtn.classList.add('go-right');

            toggleLeftContentAnimation();
            switchHidden(rightContainer);
            switchHidden(leftItemInfo);
            switchHidden(leftAvatars);
        };

    };





    formSelector[0].onclick = function(){
        formSelector[0].querySelector('.checked').classList.remove('checked');     
        let inputChecked = formSelector[0].querySelector('input[type="radio"]:checked');
        inputChecked.parentElement.classList.add('checked');   
    }
    formSelector[1].onclick = function(){
        formSelector[1].querySelector('.checked').classList.remove('checked');     
        let inputChecked = formSelector[1].querySelector('input[type="radio"]:checked');
        inputChecked.parentElement.classList.add('checked');   
    }



})