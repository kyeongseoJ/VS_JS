const toggleIcon = document.querySelector('.toggle_icon')
const openIcon = document.querySelector('.open_icon')
const closeIcon = document.querySelector('.close_icon')


toggleIcon.addEventListener('click', () => {
    console.log('cklicked')
    document.querySelector('.menu_container').toggle('show')
})

openIcon.addEventListener('click', () => {
    console.log('close')
    document.querySelector('.nav').classList.add('show_nav')
    document.querySelector('.nav_icons').classList.add('static')
    document.querySelector('.follow_channel').classList.add('none')
    document.querySelector('.close').classList.add('flex')
    document.querySelector('.user_box').classList.add('none')
})

closeIcon.addEventListener('click', () => {
    console.log('open')
    document.querySelector('.nav').classList.remove('show_nav')
    document.querySelector('.nav_icons').classList.remove('static')
    document.querySelector('.follow_channel').classList.remove('none')
    document.querySelector('.close').classList.remove('flex')
})

