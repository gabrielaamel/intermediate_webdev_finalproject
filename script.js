function calculate() {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    if (principal <= 0 || rate <= 0 || years <= 0) {
        document.getElementById("result").innerText = "Please enter valid values.";
        return;
    }

    const interest = (principal * rate * years) / 100;
    document.getElementById("result").innerText = `Total Interest: $${interest}`;
    return interest;
}
