function toggleMenu() {
    const dropdown = document.querySelector('#dropdown-menu');
    dropdown.classList.toggle('show');
}

function tabl() {
    let avg_cell = document.querySelector('#avg');
    const tab = document.querySelector('table');
    const person = document.querySelector('#person');
    const interest = document.querySelector('#interest');
    const age = document.querySelector('#age');

    let row = tab.insertRow(tab.rows.length-1);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = person.value;
    cell2.textContent = interest.value;
    cell3.textContent = age.value;
    let avg = 0;

    for(let i = 1; i < tab.rows.length - 1; i++) {
        avg += parseInt(tab.rows[i].cells[2].innerHTML);
    }

    avg_cell.textContent = avg/(tab.rows.length - 2);
    
}

function supp() {
    const tab = document.querySelector('table');
    for (;tab.rows.length > 2;) {
        tab.deleteRow(1);
    }
    document.querySelector('#avg').textContent = '';

}

function supp1() {
    const tab = document.querySelector('table');
    for (let i = 1; i < tab.rows.length - 1; i++) {
        if(tab.rows[i].cells.length == 3) {
            const cell = tab.rows[i].insertCell(3);
            cell.innerHTML = `<button onclick="_supp1(${i})">x</button>`;
        }
        
    }

}

function _supp1(i) {
    const tab = document.querySelector('table');
    tab.deleteRow(i);
    for (let d = i; d < tab.rows.length - 1; d++) {
        tab.rows[d].cells[3].innerHTML = `<button onclick="_supp1(${d})">x</button>`;
    }

    if (tab.rows.length === 2) {
        document.querySelector('#avg').innerHTML = '';
    }

}