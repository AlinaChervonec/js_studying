let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
let necessaryCosts = prompt('Введите обязательную статью расходов в этом месяце');
let necessaryCostsPrice = prompt('Во сколько обойдется?');
appData.optionalExpenses.necessaryCosts = necessaryCostsPrice;
alert('бюджет на 1 день составляет ' + appData.budget/30);


