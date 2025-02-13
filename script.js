const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result"); // Ensure you have an element to display age

function calculateAge() {
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === "") {
        alert("Please enter your date of birth");
    } else {
        const age = getAge(birthdayValue);
        resultE1.textContent = `Your age is: ${age} years old`; // Display result
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btnE1.addEventListener("click", calculateAge);
