var toggle = document.querySelector('#menu')
  var links = document.querySelector('.nav')
  var head = document.querySelector('.head')
  var sign = document.querySelector('.Signup-btn')

  toggle.addEventListener('click', () => {
    links.classList.toggle('active')
    head.classList.toggle('bg')
  })

  window.onscroll = function(){
      var top = window.scrollY;
      console.log(top);
        if (top >= 95){
            head.classList.add('scroll-header')
            sign.classList.add('sign')
        }
        else{
            head.classList.remove('scroll-header')
            sign.classList.remove('sign')
        }
    }