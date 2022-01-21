const openMenu = $(`.open_menu`)
const closeMenu = $(`.close_menu`)
const nav = $(`.nav`)

openMenu.on('click', () => {
    console.log('open menu')
    nav.addClass('show')
    closeMenu.css({'display':'flex'})
})

closeMenu.on('click', () => {
    console.log('close menu')
    nav.removeClass('show')
})

let isMove = false;
if(window.scrollY >= 800){
    if(isMove){
        $(`.html_per`).addClass('python_tran')
        $(`.html_per`).addClass('html_tran')
        $(`.javascript_per`).addClass('js_tran')
    }
}

