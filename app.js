let input = document.querySelector('.input')
let btn = document.querySelector('.form')
let userGithubName = document.querySelector('.user-github-name')
let loginName = document.querySelector('.login-name')
let userProfile = document.querySelector('.user_profile')
let userBio = document.querySelector('.user_bio')
let repo = document.querySelector('.repo')
let followers = document.querySelector('.followers')
let following = document.querySelector('.following')
let github = document.querySelector('.github_user_container')
let searchLoader = document.querySelector('.search-loader')
let joinedDate = document.querySelector('.date')
let githubUrl = document.querySelector('.github-url')
btn.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchLoader.innerHTML =`<p class='loader'></p>`
    setTimeout(()=>{
        github.classList.remove('active')
        fetch(`https://api.github.com/users/${input.value}`)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            userGithubName.innerHTML = data.name
            loginName.innerHTML = data.login
            userProfile.src = data.avatar_url
            userBio.innerHTML = data.bio
            repo.innerHTML = data.public_repos
            followers.innerHTML = data.followers
            following.innerHTML = data.following
            let create = data.created_at
            let a = create.slice(0,10)
            joinedDate.innerHTML = a
            githubUrl.innerHTML = `<a target='blank' href='${data.html_url}'><i class='bx bxl-github'></i></a>`
            
            
        })
        .catch(err=>console.log(err))
        searchLoader.innerHTML =''
        input.value = ''

    },3000)
 

})
