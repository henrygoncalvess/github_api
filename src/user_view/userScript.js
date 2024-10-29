var userFollowers = document.querySelector('p')
var userImg = document.querySelector('img')
var userName = document.querySelector('h1')

userFollowers.innerHTML = `
<strong>Seguidores:</strong> ${localStorage.getItem('followers')} &nbsp; &nbsp;
<strong>Seguindo:</strong> ${localStorage.getItem('following')}`

userImg.setAttribute('src', localStorage.getItem('avatar_url'))
userName.innerHTML = `Bem vindo <br> ${localStorage.getItem('name')}`