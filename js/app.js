const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);
const idForm = ['day', 'month', 'year'];

function notice(id) {
    $$('.title-form').forEach((title) => {
        title.classList.remove('text-smokey_grey');
        title.classList.add('text-light_red');
    });
    $$('.border-form').forEach((bd) => {
        bd.classList.remove('border-light_grey');
        bd.classList.add('border-light_red');
    });
    $(`${id}-r`).classList.remove('hidden');
}

function success() {
    $$('.title-form').forEach((title) => {
        title.classList.add('text-smokey_grey');
        title.classList.remove('text-light_red');
    });
    $$('.border-form').forEach((bd) => {
        bd.classList.add('border-light_grey');
        bd.classList.remove('border-light_red');
    });
}

function calculate() {
    const d = parseInt($('#day').value);
    const m = parseInt($('#month').value);
    const y = parseInt($('#year').value);
    let n = 0;

    for (const id of idForm) {
        if ($(`#${id}`).value === '') {
            notice(`#${id}`);
            $(`#${id}-r`).textContent = 'This field is required';
        } else if (id === 'day' && (d > 31 || d <= 0 || (y % 4 === 0 && m === 2 && d > 29) || (y % 4 != 0 && m === 2 && d > 28))) {
            notice('#day');
            $(`#${id}-r`).textContent = 'Must be a valid date';
        } else if (id === 'month' && (m > 12 || m <= 0)) {
            notice('#month');
            $(`#${id}-r`).textContent = 'Must be a valid month';
        } else if (id === 'year' && (y > new Date().getFullYear() || y <= 0)) {
            notice('#year');
            $(`#${id}-r`).textContent = 'Must be in the past';
        } else {
            $(`#${id}-r`).classList.add('hidden');
            n += 1;
        }
    }

    if (n === 3) {
        success();
        let feb = 28;
        if (new Date().getFullYear() % 4 === 0) {
            feb = 29;
        }

        const tanggal = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let birthday = new Date(y, m-1, d);
        let year = new Date().getFullYear() - birthday.getFullYear();
        let month = new Date().getMonth() - birthday.getMonth();
        let day = new Date().getDate() - birthday.getDate();
        
        if (month < 0) {
            year--;
            month += 12;
            if (day < 0) {
                month--;
                day += tanggal[month-1];
            }
        } else if (month > 0) {
            if (day < 0) {
                month--;
                day += tanggal[month-1];
            }
        }

        $('#dy').textContent = year;
        $('#dm').textContent = month;
        $('#dd').textContent = day;

    }
}
