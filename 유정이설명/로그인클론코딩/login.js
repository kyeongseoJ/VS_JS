const btn = $(`.login_btn`)
const idInput = $(`.id`)
const pwInput = $(`.pw`)
const iconV = $(`.vision-icon`)
const iconS = $(`.show-icon`)

// btn.on('click', ()=>{
//     console.log('clicked')
// })

// btn.on('click', ()=>{
//     const idValue = idInput.val()
//     const pwValue = pwInput.val() //value 값 확인 
//     console.log(idValue, pwValue)
// })


btn.on('click', ()=>{
    if(idInput.val()===''){
        $(`.id_text`).css({'display': 'block'})
        $(`.login_fail`).css({'display':'none'})
        $(`.pw_text`).css({'display':'none'})
        idInput.focus()
    }else if(pwInput.val()===''){
        $(`.pw_text`).css({'display':'block'})
        $(`.id_text`).css({'display':'none'})
        $(`.login_fail`).css({'display':'none'})
        pwInput.focus()
    }else if(idInput.val().length > 1 && pwInput.val().length > 1){
        $(`.pw_text`).css({'display':'none'})
        $(`.id_text`).css({'display':'none'})
        $(`.login_fail`).css({'display':'block'})
    }
})

// 비밀번호 눈 아이콘 모양 기능
// iconV.on('click', ()=>{
//     pwInput.focus()
//     if(pwInput.is('text')){
//     pwInput.attr('type', 'password')
//     }else if(pwInput.is('password')){
//     pwInput.attr('type', 'text')
//     }

//     $(`.show`).css({'display':'block'})
//     $(`.vision`).css({'display':'none'})
// })

iconV.on('click', () => {
    pwInput.focus()
    if(pwInput.attr('type', 'password')){
        pwInput.attr('type', 'text')
    }
    $(`.show`).css({'display':'block'})
    $(`.vision`).css({'display':'none'})
})

iconS.on('click', () => {
    pwInput.focus()
    if(pwInput.attr('type', 'text')){
        pwInput.attr('type', 'password')
    }
    $(`.show`).css({'display':'none'}) 
    $(`.vision`).css({'display':'block'})
})

function idEvent() {
    idInput.focus( ()=>{
        $(`.icon-id`).css({'color':'salmon'}) //객체 : {}
        $(`.id_container`).css({'border-color':'salmon'})
    })
    
    idInput.blur( ()=>{
        $(`.icon-id`).css({'color':'slategray'}) 
        $(`.id_container`).css({'border-color':'slategray'})
    })
}

function pwEvent() {
    pwInput.focus( ()=>{
        $(`.icon-pw`).css({'color':'salmon'}) //객체 : {}
        $(`.pw_container`).css({'border':'1px solid salmon'})
        $(`.id_container`).css({'border-bottom':'none'})
    })
    
    pwInput.blur( ()=>{
        $(`.icon-pw`).css({'color':'slategray'}) 
        $(`.id_container`).css({'border':'1px solid slategray'})
        $(`.pw_container`).css({'border-color':'slategray', 'border-top':'none'})
    })
}

idEvent()
pwEvent()