var inputName = document.querySelector('#inputUsername')
var button = document.getElementsByTagName('a')[0]

class githubAPI {
    static async get(){
        try{
            const userInfo = await fetch(`https://api.github.com/users/${inputName.value}`)
            
            // const token = 'seu token aqui'
            // const userInfo = await fetch(`https://api.github.com/users/${inputName.value}`, {
            //     headers: {
            //         authorization: `Bearer ${token}`
            //     }
            // })

            const userData = await userInfo.json()

            if (!userData.name || userData.status === "404"){
                window.alert('Usuário não encontrado, verifique se o nome de usuário está correto')
                inputName.value = ''
                inputName.focus()

            }else{
                // capturando e armazenando dados que serão utilizados
                const userItems = {
                    avatar: userData.avatar_url,
                    name: userData.name,
                    followers: userData.followers,
                    following: userData.following
                }

                localStorage.setItem('userItems', JSON.stringify(userItems))


                // requisição aos repositórios
                const repoInfo = await fetch(`https://api.github.com/users/${inputName.value}/repos`)

                const repoData = await repoInfo.json()
                
                const repoList = []
                
                // capturando e armazenando dados que serão utilizados
                repoData.forEach(data => {
                    let repoItems = {
                        nameRepo: data.name,
                        descRepo: data.description,
                        starRepo: data.stargazers_count,
                        forkRepo: data.forks_count,
                        url: data.html_url,
                        commits: data.commits_url
                    }

                    repoList.push(repoItems)
                })

                localStorage.setItem('repoList', JSON.stringify(repoList))

                // troca para página de vizualização do perfil
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