const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size =  carouselImages[0].clientWidth;
 //clientWidth: A Number, representing the viewable *width of an element* in pixels, including padding
 //The reason why the "viewable" word is specified, is because if the element's content is wider than the
 //actual width of the element, this property will only return the width that is visible

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
//for the transition that the next/prev image to appear, the current image has to travel/translate on X-axis by
//the length of width of the image.

nextBtn.addEventListener('click', () => {
//The EventTarget method addEventListener() sets up a function that will be \
//called whenever the specified event is delivered to the target.
  if(counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  //console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <=0) return ;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  //console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

//The transitionend event occurs when a CSS transition has completed, it's a predefined keyword.
carouselSlide.addEventListener('transitionend',()=>{
  //console.log(carouselImages[counter]);
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
});
