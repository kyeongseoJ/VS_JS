const toggleIcon = document.querySelector('.toggle_icon');
const openIcon = document.querySelector('.open_icon');
const closeIcon = document.querySelector('.close_icon');
const information = document.querySelectorAll('.information');
const main = document.querySelector('.main');

toggleIcon.addEventListener('click', () => {
    console.log('cklicked')
    document.querySelector('.menu_container').classList.toggle('show')
})

openIcon.addEventListener('click', () => {
    console.log('close')
    document.querySelector('.nav').classList.add('show_nav')
    document.querySelector('.nav_icons').classList.add('static')
    document.querySelector('.follow_channel').classList.add('none')
    document.querySelector('.recommend_channel').classList.add('none')
    document.querySelector('.close').classList.add('flex')
    for (let i of information) {
        i.classList.add('none')
    }
    document.querySelector('.follow_icon').classList.add('flex')
    document.querySelector('.recommend_icon').classList.add('flex')
    document.querySelector('.group_icon').classList.add('flex')
    document.querySelector('.more').classList.add('none')
    document.getElementById('nav-search').classList.add('none')
    main.classList.add('wide')
})

closeIcon.addEventListener('click', () => {
    console.log('open')
    document.querySelector('.nav').classList.remove('show_nav')
    document.querySelector('.nav_icons').classList.remove('static')
    document.querySelector('.follow_channel').classList.remove('none')
    document.querySelector('.recommend_channel').classList.remove('none')
    document.querySelector('.close').classList.remove('flex')
    for (let i of information) {
        i.classList.remove('none')
    }
    document.querySelector('.follow_icon').classList.remove('flex')
    document.querySelector('.recommend_icon').classList.remove('flex')
    document.querySelector('.group_icon').classList.remove('flex')
    document.querySelector('.more').classList.remove('none')
    document.getElementById('nav-search').classList.remove('none')
    main.classList.remove('wide')
})

const body = document.getElementsByTagName('body')

window.onresize = () => {
    let innerWidth = window.innerWidth
    if (innerWidth <= 1200) {
        console.log('true')
        document.querySelector('.nav').classList.add('show_nav')
        document.querySelector('.nav_icons').style.display = 'none'
        document.querySelector('.follow_channel').classList.add('none')
        document.querySelector('.recommend_channel').classList.add('none')
        // document.querySelector('.close').classList.add('flex')
        for (let i of information) {
            i.classList.add('none')
        }
        document.querySelector('.follow_icon').classList.add('flex')
        document.querySelector('.recommend_icon').classList.add('flex')
        document.querySelector('.group_icon').classList.add('flex')
        document.querySelector('.more').classList.add('none')
        document.getElementById('nav-search').classList.add('none')
        main.classList.add('wide')
    }else{
        console.log('false')
        document.querySelector('.nav').classList.remove('show_nav')
        document.querySelector('.nav_icons').style.display = 'flex'
        document.querySelector('.follow_channel').classList.remove('none')
        document.querySelector('.recommend_channel').classList.remove('none')
        // document.querySelector('.close').classList.remove('flex')
        for (let i of information) {
            i.classList.remove('none')
        }
        document.querySelector('.follow_icon').classList.remove('flex')
        document.querySelector('.recommend_icon').classList.remove('flex')
        document.querySelector('.group_icon').classList.remove('flex')
        document.querySelector('.more').classList.remove('none')
        document.getElementById('nav-search').classList.remove('none')
        main.classList.remove('wide')
    }
    let size = window.innerWidth
    if (size <= 1000) {
        document.querySelector('.grid:nth-child(5)').classList.add('none')
        document.querySelector('.grid:nth-child(6)').classList.add('none')
    }else {
        document.querySelector('.grid:nth-child(5)').classList.remove('none')
        document.querySelector('.grid:nth-child(6)').classList.remove('none')
    }

    if(innerWidth <= 820) {
        document.querySelector('.follow').innerHTML = `<i class='bx bx-heart'></i>`
        document.querySelector('.find').innerHTML= `<i class='bx bx-copy'></i>`
    } else{
        document.querySelector('.follow').innerHTML = `팔로잉`
        document.querySelector('.find').innerHTML= `탐색`
    }
} 

