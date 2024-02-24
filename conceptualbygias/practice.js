document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#buttonContainer button");
    const accountBalance = document.getElementById("accountBalance");
    const currentBalance = document.getElementById("currentBalance");

    let totalMoney = 0;
    let totalCount = 0;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const moneyToAdd = parseFloat(button.dataset.amount);
            totalMoney += moneyToAdd;
            totalCount++;
            updateBalance();
        });
    });

    function updateBalance() {
        accountBalance.innerText = `$${totalMoney.toFixed(2)}`;
        currentBalance.innerText = `$${totalMoney.toFixed(2)}`;
        document.getElementById("totalCount").innerText = totalCount;
    }
});
