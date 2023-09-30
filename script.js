const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementsList = document.querySelectorAll('.requirement-list li')

// an array of password requirements with corresponding
// regular expressions and index of the requirement list item
const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^a-zA-Z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4},
]

passwordInput.addEventListener('keyup', (e) => {
    requirements.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementsList[item.index];

        // updating class and icon of requirement item if requirement matched or not
        if(isValid){
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    })

})

eyeIcon.addEventListener('click', () => {
    // toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'

    // update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});