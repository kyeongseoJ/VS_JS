const openMenu = $('.open_menu')
const closeMenu = $('.close_menu')
const main = $('.main')
const nav = $('.nav')
let isMove = true

openMenu.on('click', () => {
  console.log('open menu')
  nav.addClass('show')
  closeMenu.css({'display': 'flex'})
})

closeMenu.on('click', () => {
  console.log('close menu')
  nav.removeClass('show')
})

main.on('click', () => {
  nav.removeClass('show')
})

$('.menu_items > a').on('click', () => {
  nav.removeClass('show')
})

$(window).scroll(scrollActive)

function scrollActive() {
    if(scrollY >= 700) {
      if(isMove) {
        $('.html_percentage').addClass('html_tran')
        $('.js_percentage').addClass('js_tran')
        $('.jquery_percentage').addClass('jquery')
        $('.react_percentage').addClass('react')
        $('.node_percentage').addClass('node')
        $('.mysql_percentage').addClass('mysql')
      }
    }
  }