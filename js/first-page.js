//Показ элементов плавный
// function showBlocks(classBlock, classBlock_2){
//     let blocks1 = Array.prototype.slice.call(document.querySelectorAll(classBlock));
//     let blocks2 = Array.prototype.slice.call(document.querySelectorAll(classBlock_2));
//     const blocks = blocks1.concat(blocks2);


//     function isVisible (block) {
//         const distance = block.getBoundingClientRect().top;
//         console.log(distance < window.innerHeight);
//         return distance < window.innerHeight;
//     };

//     // const isVisible = (block) => {
//     //     const distance = block.getBoundingClientRect().top;
//     //     console.log(distance < window.innerHeight);
//     //     return distance < window.innerHeight;
//     // };

//     blocks.forEach(block => {
//         if (isVisible(block)) {
//             block.classList.add('animate__fadeIn');
//             block.style.animation = 'fadeIn 1s';
//         }
//     });
// }
// window.addEventListener('scroll', showBlocks('.recipe-modul', '.compil-modul'));

// let buttons = document.querySelectorAll('button');
// function hoverElement(el, animation, time) {
//     console.log(el);
//     let nameAnimation = animation.split("animate__").pop();
//     // if(el.classList.contains(animation)){
//     //     el.classList.remove(animation);
//     // } else {
//     //     el.classList.add(animation);
//     //     el.style.animation = `${nameAnimation} ${time}s`;
//     // }
//     el.classList.add(animation);
//     el.style.animation = `${nameAnimation} ${time}s`;
//     // el.classList.remove(animation);
// }

// function removeAnimation(el, animation) {
//     el.classList.remove(animation);
// }

// buttons.forEach(el => {
//     el.addEventListener('mouseover', function(){
//         hoverElement(el, 'animate__pulse', 0.5);
//         }
//     );

//     // el.addEventListener('mouseout', function(){
//     //     removeAnimation(el, 'animate__pulse');
//     // });
// });

// // console.log(buttons[0].classList.contains('animate__'));




