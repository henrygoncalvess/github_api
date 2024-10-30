var inputName = document.querySelector('#inputUsername')
var button = document.getElementsByTagName('a')[0]

class githubAPI {
    static async get(){
        try{
            const userInfo = await fetch(`https://api.github.com/users/${inputName.value}`)

            const userData = await userInfo.json()
            
            if (!userData.name || userData.status === "404"){
                window.alert('Usuário não encontrado, verifique se o nome de usuário está correto')
                inputName.value = ''
                inputName.focus()

            }else{
                localStorage.setItem('avatar_url', userData.avatar_url)
                localStorage.setItem('name', userData.name)
                localStorage.setItem('followers', userData.followers)
                localStorage.setItem('following', userData.following)


                const repoInfo = await fetch(`https://api.github.com/users/${inputName.value}/repos`)

                const repoData = await repoInfo.json()

                console.log(repoData);

                const nameRepo = []
                const descRepo = []
                const starRepo = []
                const forkRepo = []

                repoData.forEach(data => {
                    nameRepo.push(data.name)
                    descRepo.push(data.description)
                    starRepo.push(data.stargazers_count)
                    forkRepo.push(data.forks_count)
                })

                localStorage.setItem('nameRepo', nameRepo)
                localStorage.setItem('descRepo', descRepo)
                localStorage.setItem('starRepo', starRepo)
                localStorage.setItem('forkRepo', forkRepo)

                window.location.replace('./user_view/user.html')
            }

        } catch (error){
            if (error){
                window.alert('Ooops... algo errado aconteceu, tente novamente mais tarde')
                console.log({error: error})
            }
        }
    }
}

button.addEventListener('click', githubAPI.get)