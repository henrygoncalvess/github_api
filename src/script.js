var inputName = document.querySelector('#inputUsername')
var button = document.getElementsByTagName('a')[0]

class githubAPI {
    static async get(){
        try{
            const response = await fetch(`https://api.github.com/users/${inputName.value}`)

            const data = await response.json()

            if (!data.name){
                window.alert('Usuário não encontrado, verifique se o nome de usuário está correto')
            }else{
                console.log(data);

                localStorage.setItem('avatar_url', data.avatar_url)
                localStorage.setItem('name', data.name)
                localStorage.setItem('followers', data.followers)
                localStorage.setItem('following', data.following)

                window.location.replace('./user_view/user.html')
            }

        } catch (error){
            if (error){
                console.log({error: error})
                window.alert('Ooop... algo errado aconteceu, tente novamente mais tarde')
            }
        }
    }
}

button.addEventListener('click', githubAPI.get)