const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

let rightAns = 0;

let mathTabs = () => {
    let currentContent = document.querySelector('.active .task');

    const operations = ['+', '-', '/'];
    let num1 = Math.round(Math.random() * 5),
        operNumb = Math.round(Math.random() * 2),
        randOperation = operations[operNumb],
        num2 = 0;

    if (operNumb === 0) {
        num2 = Math.round(Math.random() * (5 - num1));
        rightAns = num1 + num2;
    } else if (operNumb === 1) {
        num1 = Math.round(Math.random() * 10);
        num2 = Math.round(Math.random() * num1);
        rightAns = num1 - num2;
    } else if (operNumb === 2) {
        num2 = num1;
        num1 = Math.round(Math.random() * 5) * num2;
        rightAns = num1 / num2;
    }
    currentContent.innerHTML = `${num1} ${randOperation} ${num2}`;
}


mathTabsInteract = ans => {
    console.log((ans + 1), rightAns);
    let chck = document.querySelector('.active .check-right');
    console.log(chck);
    if (((ans + 1) === rightAns && (ans + 1) < 5) || ((ans + 1) >= 5 && (rightAns >= 5 || rightAns == NaN)) || (rightAns == 0) && (ans == 0) ) {
        chck.innerText = 'Правильно!';
        chck.style.color = 'green';
    } else {
        chck.innerText = 'Не верно.';
        chck.style.color = 'red';
    }
}


const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
            mathTabsInteract(i);
            mathTabs();
        }
    }
});

mathTabs();


thePointer = () => {document.getElementById('tabs').style.cursor = "pointer";}
thePointer();