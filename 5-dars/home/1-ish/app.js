async function fetchUserData() {
    const username = document.getElementById('username').value;
    const errorElement = document.getElementById('error');
    const userInfo = document.getElementById('user-info');
    errorElement.textContent = '';
    userInfo.style.display = 'none';

    if (!username) {
        errorElement.textContent = 'Please enter a username.';
        return;
    }
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found.');
        }
        const data = await response.json();
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'No name provided';
        document.getElementById('login').textContent = `@${data.login}`;
        document.getElementById('bio').textContent = data.bio || 'No bio available';
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;

        userInfo.style.display = 'block';
    } catch (error) {
        errorElement.textContent = error.message;
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        fetchUserData();
    }
}