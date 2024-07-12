// № 1

// const students = ['Vika','Artem', 'Vyacheslav', 'Ruslan'];
// function logItems (array) {
//     let num = 1;
//     for (let student of array) {
//         console.log(`${num} - ${student}`);
//         num ++
//     }
// }
// console.log(logItems(students));

// № 2

// const text = prompt('Напишіть речення яке присутнє на прикрасі:');
// const qestionPrice = prompt('Напишіть прайс за одне слово:');

// function calculateEngravingPrice (message, pricePerWord) {
//     const messageArray = message.split(" ");
//     const price = Number(qestionPrice);
//     let priceAllWords = 0;
//     for (let word of messageArray) {
//         priceAllWords += price
//     }
//     return priceAllWords
// }
// console.log(calculateEngravingPrice(text, qestionPrice))

// № 3

// const qestionString = prompt('Напишіть довільний радок:');

// function findLongestWord (string) {
//     const bigArray = string.split(' ')
//     let longestWord = bigArray[0]

//     for (let i = 0; i < bigArray.length; i ++) {
//         if (longestWord.length < bigArray[i].length) {
//             longestWord = bigArray[i]
//         }
//     }
//     return longestWord
// }
// console.log(`Найбільше слово в рядку - ${findLongestWord(qestionString)}`);

// № 4

// const askParagraph = prompt('Напишіть речення:');
// function formatString (string) {
//     let text = string;
//     if (string.length > 40) {
//         text = string.slice(0, 37) + '...';
//     }
//     return text;
// }
// console.log(formatString(askParagraph));

// № 5

// const sentence =prompt('Напишіть рядок:');

// function checkForSpam(message) {
//     const lowerMessage = message.toLowerCase();
//     const findWord1 = lowerMessage.includes("spam");
//     const findWord2 = lowerMessage.includes("sale");
//     let returnWord = "";
//     if (findWord1 === true || findWord2 === true) {
//         returnWord = "true";
//     } else {
//         returnWord = "false";
//     }
//     return returnWord;
// }
// console.log(checkForSpam(sentence));

// № 6

// const numbers = [];
// let total = 0;
// let input;

// while (input !== null) {
//     input = prompt("Введіть число:");
//     let num = Number(input);
//     numbers.push(num);
//     const audit = Number.isNaN(num);
//     if (audit === true) {
//         alert("Було введено не число, попробуйте ще раз");
//         numbers.pop();
//     }
// }
// for (let num of numbers) {
//     total += num;
// }
// console.log(`Загальна сума чисел дорівнює ${total}`);

// № 7

const logins = ["V1ky_ch", "Go_1", "L0L_c", "Poly_PoP"];
const newLogin = prompt('Введіть логін:')

function addLogin(allLogins, login) {
    let resultValid;
    let resultUnique;
    let message;

    function isLoginValid(login) {
        if (login.length < 4 || login.length > 16) {
            message = alert('Помилка! Логін повинен бути від 4 до 16 символів');
            resultValid = false;
        } else {
            resultValid = true;
        }
    }
    console.log(isLoginValid(login));

    function isLoginUnique(allLogins, login) {
        for (let nik of allLogins) {
            if (login === nik) {
                message = alert('Такий логін уже використовується!');
                resultUnique = false;
                break
            } else {
                resultUnique = true;
            }
        }
    }
    console.log(isLoginUnique(allLogins, login))

    if (resultUnique === true && resultValid === true) {
        allLogins.push(login)
        message = alert('Логін успішно доданий!');
    }
    return message
}
console.log(addLogin(logins, newLogin));