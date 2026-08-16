function calculateSimpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

function calculateTotalPayableAmount(p, interest) {
    return p + interest; // FIXED for Task 7
}

const calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("years").value);

    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);

    let result = document.getElementById("result");

    result.innerHTML = `
        <div>Principal Amount: <span>${p.toFixed(2)}</span></div>
        <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
        <div>Total Amount: <span>${amount.toFixed(2)}</span></div>
    `;
};

if (typeof module !== 'undefined')
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };

// Task 4: ID verified
// Task 5: Number() conversion verified
// Task 6: Jasmine tests added
// Task 7: Fixed total payable amount


