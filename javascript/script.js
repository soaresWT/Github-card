
async function getProfile(user) {
    const url = `https://api.github.com/users/${user}`;
    fetch(url).then(response => response.json()).then(data => {
        if(data.message === 'Not Found') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuário não encontrado'
              })
        } else {
        const nome = document.querySelector('#name');
        const avatar = document.querySelector('#bg-img');
        const bio = document.querySelector('#bio');
        const repos = document.querySelector('#rp');
        const followers = document.querySelector('#fw');
        const localization = document.querySelector('#lc');

        if(data.location==null){
            localization.innerHTML = 'S/L';
        }else{
            localization.innerHTML = data.location;
        }
        followers.innerHTML = data.followers;
        repos.innerHTML = data.public_repos;
        nome.innerHTML = data.login;
        avatar.src = data.avatar_url;
        bio.innerHTML = data.bio;
        console.log(data);
        }
    })
}

getProfile('soaresWT');



get_input  = () => {
    const user = document.querySelector('#user').value;
    getProfile(user);
}





