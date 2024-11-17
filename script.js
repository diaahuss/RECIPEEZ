function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('welcome-page').style.display = 'block';
    } else {
        alert('Please enter both email and password.');
    }
}

function logout() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('upload-recipe-page').style.display = 'none';
    document.getElementById('retrieve-recipe-page').style.display = 'none';
    document.getElementById('invite-page').style.display = 'none';
}

function showUploadPage() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('upload-recipe-page').style.display = 'block';
}

function showRetrievePage() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('retrieve-recipe-page').style.display = 'block';
}

function showInvitePage() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('invite-page').style.display = 'block';
}

function goBack() {
    document.getElementById('upload-recipe-page').style.display = 'none';
    document.getElementById('retrieve-recipe-page').style.display = 'none';
    document.getElementById('invite-page').style.display = 'none';
    document.getElementById('welcome-page').style.display = 'block';
}

function saveRecipe() {
    alert('Recipe saved successfully!');
    goBack();
}

function searchRecipe() {
    alert('Search functionality coming soon!');
}

function sendInvite() {
    alert('Invite sent successfully!');
    goBack();
}
