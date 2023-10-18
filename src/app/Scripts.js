//Script responsável pela animação

export default () => {
  const script = document.createElement('script');
  script.innerHTML = `(function () {

const target = document.querySelectorAll('[data-anime]');
const animationClass='animate';

function animeScroll(){
  const windowTop = window.scrollY + ((window.innerHeight * 3)/4);
  target.forEach(function(element){
    if((windowTop)> element.offsetTop){
      element.classList.add(animationClass);
    }else{
      element.classList.remove(animationClass);
    }
  })
}
window.addEventListener('scroll', function(){
  animeScroll();
}) })()`;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
};


