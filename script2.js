// You can add interactivity using JavaScript here
// For example, you can add an event listener to change the profile picture on click

const profileImage = document.querySelector('.profile img');
profileImage.addEventListener('click', function () {
    profileImage.src = 'new-profile-picture.jpg';
});
