const userItems = JSON.parse(localStorage.getItem('userItems'))
const repoList = JSON.parse(localStorage.getItem('repoList'))

var userFollowers = document.querySelector('p')
var userImg = document.querySelector('img')
var userName = document.querySelector('h1')

userFollowers.innerHTML = `
<strong>Seguidores:</strong> ${userItems.followers} &nbsp; &nbsp;
<strong>Seguindo:</strong> ${userItems.following}`

userImg.setAttribute('src', userItems.avatar)

userName.innerHTML = `Bem vindo <br> ${userItems.name}`

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
                <div>
                    <strong>${repoItem.nameRepo}</strong><br>
                    ${repoItem.descRepo}<br>
                    <mark id="star">stars: ${repoItem.starRepo}</mark>
                    <mark id="fork">forks: ${repoItem.forkRepo}</mark><br>
                    <mark id="commit">commits: ${commitsRepo}</mark>
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