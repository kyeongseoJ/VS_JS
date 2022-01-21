
const openMenu = $(`.open_menu`)
const closeMenu = $(`.close_menu`)
const nav = $(`.nav`)
const main = $('.main')

let isMove = true;

openMenu.on('click', () => {
    console.log('open menu')
    nav.addClass('show')
    closeMenu.css({'display':'flex'})
})

closeMenu.on('click', () => {
    console.log('close menu')
    nav.removeClass('show')
})

main.on('click', () => {
    console.log('click')
    nav.removeClass('show')
})

$(window).scroll(()=>{
    if(scrollY >= 700){
        if(isMove){
            $('.python_Per').addClass('python_tran')
            $('.html_per').addClass('html_tran')
            $('.javascript_per').addClass('js_tran')
        }
    }
})

$('.nav_link').on('click', ()=>{
    nav.removeClass('show')
    $(window).
}) 