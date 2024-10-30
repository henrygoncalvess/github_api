const userItems = JSON.parse(localStorage.getItem('userItems'))
const repoList = JSON.parse(localStorage.getItem('repoList'))

var userFollowers = document.querySelectorAll('p')
var userImg = document.querySelector('img')
var userName = document.querySelector('h1')

userFollowers[0].innerHTML = `
<strong>Seguidores:</strong> ${userItems.followers} &nbsp; &nbsp;
<strong>Seguindo:</strong> ${userItems.following}`

userImg.setAttribute('src', userItems.avatar)

userName.innerHTML = `Bem vindo <br> ${userItems.name}`

let repoQuantity = repoList.length

if(repoList.length == 100){
    repoQuantity = "100+"
}

userFollowers[1].innerHTML = `<strong>Repositórios:</strong> ${repoQuantity}`

if (repoList.length == 0){
    window.alert('Nenhum repositótio encontrado')

}else{
    repoList.forEach(async repoItem => {
        try{
            const repoCommit = await fetch(`${repoItem.commits.split('{')[0]}?per_page=100`)

            // const token = 'seu token aqui'
            // const repoCommit = await fetch(`${repoItem.commits.split('{')[0]}?per_page=100`, {
            //     headers: {
            //         authorization: `Bearer ${token}`
            //     }
            // })
        
            const commitData = await repoCommit.json()
        
            let commitsRepo = commitData.length
        
            if(commitData.length == 100){
                commitsRepo = "100+"
            }
        
            let card = document.createElement('a')
            card.setAttribute('href', repoItem.url)
            card.setAttribute('id', 'repo')
        
            card.innerHTML = `
                <div id="divRepo">
                    <strong>${repoItem.nameRepo}</strong><br>
                    ${repoItem.descRepo}<br>
                    <mark id="star">stars: ${repoItem.starRepo}</mark>
                    <mark id="commit">commits: ${commitsRepo}</mark>
                    <mark id="fork">forks: ${repoItem.forkRepo}</mark>
                </div>
            `
        
            document.getElementsByTagName('section')[0].appendChild(card)

        } catch (error){
            if (error){
                console.log({error: error})
                window.alert('Ooops... algo errado aconteceu, tente novamente mais tarde')
            }
        }
    })
}