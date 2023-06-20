const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const memberText = document.getElementById('memberText');
const signloginBtn = document.getElementById('signloginBtn');


signinBtn.addEventListener('click',()=>{
    if(nameField.innerHTML === ""){
        alert("Please enter the details")
    }
})


signupBtn.addEventListener('click',()=>{
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    signinBtn.value = "Sign Up";
    memberText.innerHTML = "Already a customer ?";
    signloginBtn.style.display = "block";
    signupBtn.style.display = "none";
})


signloginBtn.addEventListener('click',()=>{
    title.innerHTML = "Log In";
    nameField.style.display = "none";
    signinBtn.value = "Login";
    memberText.innerHTML = "Not a member ?";
    signupBtn.style.display = "block";
    signloginBtn.style.display = "none";
})