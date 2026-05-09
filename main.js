let btn = document.getElementById("btn");
let tableBody = document.getElementById("table");
let form = document.getElementById('form_data')
let clear_button = document.querySelector('.clear-button')
let filter_dropdown = document.getElementById('filter')
let filter_state = filter_dropdown.value

let expenses = []

function sort_rows(sort_by) {
    if (sort_by == 'Date') {
        expenses.sort(function(a, b) {
            return b.date - a.date
        })
    } else if (sort_by == 'Cost') {
        expenses.sort(function(a, b) {
            return b.cost - a.cost
        })

        let rows = document.querySelectorAll('#table tr')
        for (let row of rows) {
            row.remove() 
        }
        for (let expense of expenses) {
            let row = document.createElement('tr');
            row.className = 'row'
            for (let i in expense){
                let data = document.createElement('td')
                data.textContent = expense[i];
                row.appendChild(data)
            }
            tableBody.appendChild(row)
        }
    }
}

btn.addEventListener("click", function(){
    let item = form.elements.myitem.value;
    let date = form.elements.date.value;
    let cost = form.elements.cost.value;
    let category = form.elements.category;
    let label = category.options[category.selectedIndex].text

    let row = document.createElement('tr');
    row.className = 'row'
    for (let i of [item, date, cost, label]){
        let data = document.createElement('td')
        data.textContent = i;
        row.appendChild(data)
    }
    let expense = {item: item, date: new Date(date), cost: cost, label: label}

    expenses.push(expense)
    tableBody.appendChild(row);

    row.addEventListener('mousedown', function() {
        if (row.className == 'row') {
            row.className = 'row-checked'
        } else {
            row.className = 'row'
        }
    })
});

clear_button.addEventListener('click', function() {
    for (let i = tableBody.children.length-1;i>-1;i--) {
        row = tableBody.children[i]
        if (row.className == 'row-checked') {
            row.remove()
        }
    }
})


filter_dropdown.addEventListener('change', function() {
    filter_state = filter_dropdown.value
    sort_rows(filter_state)
    console.log(filter_state)
})
