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
    closeMenu.css({'display':'flex'})
})