'use strict';

let btnCalc = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItems = document.getElementsByClassName("expenses-item"),
	confirmRequiredBtn = document.getElementsByTagName("button")[0],
	confirmOptionalBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName("button")[2],
	optionalItems = document.querySelectorAll(".optionalexpenses-item"),
	addIncome = document.querySelector("#income"),
	savingsCheckbox = document.querySelector("#savings"),
	savingsSumm = document.querySelector("#sum"),
	savingsPercent = document.querySelector("#percent"),
	dateYear = document.querySelector(".year-value"),
	dateMonth = document.querySelector(".month-value"),
	dateDay = document.querySelector(".day-value"),

	buttons = document.querySelectorAll("button");

	buttons.forEach(function(item) {
		if (item.classList != "start") {
			item.disabled = true;
		}
	});

let money, time;

btnCalc.addEventListener("click", function() {
	buttons.forEach(function(item) {
		item.disabled = false;
	});

	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	dateYear.value = new Date(Date.parse(time)).getFullYear();
	dateMonth.value = new Date(Date.parse(time)).getMonth() + 1;
	dateDay.value = new Date(Date.parse(time)).getDate();

});

confirmRequiredBtn.addEventListener("click", function() {
	let sum = 0;

	for (let i = 0; i < expensesItems.length; i++) {
		let nesExpense = expensesItems[i].value,
			nesExpenseMoney = expensesItems[++i].value;

		if (typeof(nesExpense) === "string" && typeof(nesExpense) != null && typeof(nesExpenseMoney) != null && nesExpense.length < 10 && nesExpense != "" && nesExpenseMoney != "") {
			appData.expenses[nesExpense] = nesExpenseMoney;
			sum += +nesExpenseMoney;
		} else {
			--i;
		};
		expensesValue.textContent = sum;
	};
});

confirmOptionalBtn.addEventListener("click", function() {
	for (let i = 0; i < optionalItems.length; i++) {
		let optExpense = optionalItems[i].value;
		appData.optionalExpenses[i] = optExpense;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}
});

countBtn.addEventListener("click", function() {
	if (appData.budget != undefined) {

		appData.budgetPerDay = ((appData.budget - +expensesValue.innerHTML)/30).toFixed();
		dayBudgetValue.textContent = appData.budgetPerDay;

		if (appData.budgetPerDay < 100 && appData.budgetPerDay > 0) {
			levelValue.textContent = "Низкий уровень дохода";
		} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 200) {
			levelValue.textContent = "Средний уровень дохода";
		} else if (appData.budgetPerDay > 200) {
			levelValue.textContent = "Высокий уровень дохода";
		} else {
			levelValue.textContent = "Ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Произошла ошибка!";
	}
});

addIncome.addEventListener("input", function() {
	let items = addIncome.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener("click", function() {
	if (appData.savings == true) {
		appData.savings = false;

		monthSavingsValue.textContent = "";
		yearSavingsValue.textContent = "";
		savingsSumm.value = "";
		savingsPercent.value = "";
		delete appData.monthIncome;
		delete appData.yearIncome;
	} else {
		appData.savings = true;
	}
});

savingsSumm.addEventListener("input", function(){
	if (appData.savings == true && +savingsPercent.value != 0) {
		let sum = +savingsSumm.value,
			percent = +savingsPercent.value;
		
		appData.monthIncome = (sum/100/12*percent).toFixed(2);
		appData.yearIncome = (sum/100*percent).toFixed(2);

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;
	}
});

savingsPercent.addEventListener("input", function(){
	if (appData.savings == true && +savingsSumm.value != 0) {
		let sum = +savingsSumm.value,
			percent = +savingsPercent.value;
		
		appData.monthIncome = (sum/100/12*percent).toFixed(2);;
		appData.yearIncome = (sum/100*percent).toFixed(2);;

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};