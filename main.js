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
		dateDay = document.querySelector(".day-value");

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i=0; i<2; i++) {
			let nesExpense = prompt("Введите обязательную статью расходов в этом месяце"),
				nesExpenseMoney = +prompt("Во сколько обойдется?");

			if (typeof(nesExpense) === "string" && typeof(nesExpense) != null && typeof(nesExpenseMoney) != null && nesExpense.length < 10 && nesExpense != "" && nesExpenseMoney != "") {
				appData.expenses[nesExpense] = nesExpenseMoney;
			} else {
				--i;
			};
		};
	},
	detectDayBudget: function () {
		appData.budgetPerDay = (appData.budget/30).toFixed();
		alert("Ежедневный доход: " + appData.budgetPerDay);
	},
	detectLevel: function () {
		if (appData.budgetPerDay < 100 && appData.budgetPerDay > 0) {
			console.log("Низкий уровень дохода");
		} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 200) {
			console.log("Средний уровень дохода");
		} else if (appData.budgetPerDay > 200) {
			console.log("Высокий уровень дохода");
		} else {
			console.log("Ошибка");
		}	
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с Вашего депозита: " + appData.monthIncome)
		}
	},
	chooseOptExpenses: function () {
		for (let i = 1; i < 4; i++) {
			let optExpense = prompt("Статья необязательных расходов #" + i + "?", "");
			appData.optionalExpenses[i] = optExpense;
		}
	},
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход? (через запятую)", "");
		while (items == "" || items == null) {
			items = prompt("Что принесет дополнительный доход? (через запятую)", "");
		}
		appData.income = items.split(", ");
		appData.income.push(prompt("Может что-то еще?"));
		appData.income.sort();

		appData.income.forEach(function (item, i, arr) {
			appData.income[i] = (i+1) + ". " + item;
		});
		alert("Способы доп. заработка: " + appData.income.join(", "));
	},
	showData: function () {
		for(let key in appData) {
			console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
		}
	}
};