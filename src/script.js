var inputName = document.querySelector('#inputUsername').value
var button = document.querySelector('button')

class githubAPI {
    static async get(username){
        try{
            const response = await fetch(
                `https://api.github.com/users/${username}`
            )

            const data = await response.json()

            console.log(data);
        } catch (error){
            if (error){
                console.log({error: error})
            }
        }
    }
}

