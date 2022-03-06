const moleculaWrapper = document.querySelector(".molecula-wrapper")
// console.dir(moleculaWrapper)
for(let i = 0; i < 10; i++) {

    const img = document.createElement('img');
    img.classList.add('item-img')
    if (i % 2 === 0) {
        img.setAttribute('src','img/BOY.png')
    } else {
        img.setAttribute('src','img/girl.png')
    }
    // const winWidth = window.innerWidth;
    const winWidth = window.innerWidth;

    // const winHeight = window.innerHeight;
    const winHeight = moleculaWrapper.offsetTop;
    const randomTop = getRandomNumber(0, winHeight);
    const randomLeft = getRandomNumber(0, winWidth);
    // const xy = getRandomPosition(img);
    // console.log(xy)
      img.style.top = randomTop + 'px';
      img.style.left = randomLeft + 'px';

    moleculaWrapper.appendChild(img)
}

function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;

}


moleculaWrapper
// function getRandomPosition(element) {
//     const x = moleculaWrapper.offsetHeight - element.clientHeight;
//     const y = moleculaWrapper.offsetWidth - element.clientWidth;
//     console.log(x,"x")
//     console.log(y,"y")
//     const randomX = Math.floor(Math.random()*x);
//     const randomY = Math.floor(Math.random()*100);
//     console.log(randomX,"randomX")
//     console.log(randomY,"randomY")
//     return [randomX,randomY];
//
// }
