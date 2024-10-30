const userItems = JSON.parse(localStorage.getItem('userItems'))
const repoList = JSON.parse(localStorage.getItem('repoList'))
console.log(repoList);

var userFollowers = document.querySelector('p')
var userImg = document.querySelector('img')
var userName = document.querySelector('h1')

userFollowers.innerHTML = `
<strong>Seguidores:</strong> ${userItems.followers} &nbsp; &nbsp;
<strong>Seguindo:</strong> ${userItems.following}`

userImg.setAttribute('src', userItems.avatar)

userName.innerHTML = `Bem vindo <br> ${userItems.name}`

repoList.forEach(repoItem => {
    var card = document.createElement('a')
    card.setAttribute('href', repoItem.url)
    card.setAttribute('id', 'repo')

    card.innerHTML = `
        <div>
            <strong>${repoItem.nameRepo}</strong><br>
            ${repoItem.descRepo}<br>
            <mark id="star">stars: ${repoItem.starRepo}</mark>
            <mark id="fork">forks: ${repoItem.forkRepo}</mark>
        </div>
    `

    document.getElementsByTagName('section')[0].appendChild(card)
})