let input_task = document.getElementById('input-task')
let add_button = document.getElementById('add-button')
let task = document.querySelector('.task')
let tbody = document.getElementById('tbody')

add_button.addEventListener('click', function() {
    let text = input_task.value
    if (text != '') {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        tr.textContent = text
        tr.appendChild(td)
        tbody.appendChild(tr)
        
    }
})