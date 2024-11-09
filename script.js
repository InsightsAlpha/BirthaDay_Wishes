let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);

 
let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)



function showPopup(profilePic, birthdayImage, message, name) {
    // Set the profile picture, birthday image, message, and name
    document.querySelector('.profile-pic').src = profilePic;
    document.querySelector('.birthday-image').src = birthdayImage;
    document.querySelector('.popup-content p').textContent = message;
    document.querySelector('.popup-content h4').textContent = name; // Set the h6 text
  
    // Show the popup
    document.getElementById('popup').style.display = 'block';
}

// Add click event listeners for each gift box with specific content
document.getElementById('gf1').addEventListener('click', function() {
    showPopup('profile-picture1.png', 'birthday-image1.png', 'Happy Birthday! Wishing you a day filled with love and joy!', 'Raghav Talwar');
});
document.getElementById('gf2').addEventListener('click', function() {
    showPopup('profile-picture2.png', 'birthday-image2.png', 'Happy Birthday! May your day be filled with happiness and surprises!', 'Alice Johnson');
});
document.getElementById('gf3').addEventListener('click', function() {
    showPopup('profile-picture3.png', 'birthday-image3.png', 'Happy Birthday! Here’s to another year of wonderful adventures!', 'Bob Smith');
});
document.getElementById('gf4').addEventListener('click', function() {
    showPopup('profile-picture4.png', 'birthday-image4.png', 'Happy Birthday! Celebrate your special day with lots of joy!', 'Charlie Brown');
});
document.getElementById('gf5').addEventListener('click', function() {
    showPopup('profile-picture5.png', 'birthday-image5.png', 'Happy Birthday! May all your dreams come true this year!', 'Daisy Miller');
});

// Close popup when the close button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup if the user clicks anywhere outside of the popup
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}