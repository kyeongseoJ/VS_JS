const toggleIcon = $('.toggle_icon')
const openIcon = $('.open_icon')
const closeIcon = $('.close_icon')


toggleIcon.on('click', () => {
    console.log('cklicked')
    $('.menu_container').toggle('show')
})

openIcon.on('click', () => {
    console.log('open')
    $('.nav').addClass('show_nav')
    $('.nav_icons').addClass('static')
    $('.follow_channel').addClass('none')
    $('.close').addClass('flex')
})

closeIcon.on('click', () => {
    console.log('close')
    $('.nav').removeClass('show_nav')
    $('.nav_icons').removeClass('static')
    $('.follow_channel').removeClass('none')
    $('.close').removeClass('flex')
})

