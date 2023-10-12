//get the numbers from the page
function getValues() {
    //get the start number
    let startNumber = document.getElementById('startValue').value; // "0"

    //get the end number
    let endNumber = document.getElementById('endValue').value; // "100"

    //turn values into actual numbers
    startNumber = parseInt(startNumber); // 0
    endNumber = parseInt(endNumber); // 100

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber) && startNumber < endNumber) {
        //generate the range of numbers
        let generatedNumbers = generateValues(startNumber, endNumber);

        displayValues(generatedNumbers);

    } else {

        //Uh oh! Something is wrong!
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'You think this is a game? Read the rules, do it right, try again.'
        });
    }
}

//generate a list of all numbers between start and end
function generateValues(start, end) {
    //create a variable that can hold multiple numbers
    let numbers = [];

    //put a number into that variable
    //add one to that number, then add THAT to the variable
    //keep adding one and continue putting it into the variable UNTIL we get to the end number
    for (let n = start; n <= end; n = n + 1) {
        numbers.push(n);
    }

    return numbers;
}

//display each number on page
function displayValues(numbers) {

    let html = '';

    //make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index += 1) {

        let className = '';

        let currentNumber = numbers[index];

        if (currentNumber % 2 == 0) {
            //currentNumber is even
            className = 'even';
        } else {
            //curentNumber is odd
            className = 'odd';
        }

        // html = '<tr><td>5</td></tr>'
        html += `<tr><td class="${className}">${currentNumber}</td></tr>`;

    }

    //with each number, put it on the page
    //e.g.-----> <tr><td> 4 </td></tr>
    let tbody = document.getElementById('results');

    tbody.innerHTML = html;
}

