const toggleIcon = $('.toggle_icon')

toggleIcon.on('click', () => {
    console.log('cklicked')
    $('.menu_container').toggle('show')
})