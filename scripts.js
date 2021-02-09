window.onload = () => {

    const display = document.getElementById("display");
    const clearBtn = document.getElementById("clearBtn");
    const opUsed = document.getElementById("opUsed");
    const btns = document.querySelectorAll(".digit");
    const opBtns = document.querySelectorAll(".opBtn");


    btns.forEach( btn => {
        btn.addEventListener('click', () => {

            display.innerText = display.innerText + btn.textContent;
            parseInt(display.innerText)
            console.log();
        });
    });

    opBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            opUsed.innerText =  btn.textContent;
        });
    });

    clearBtn.addEventListener("click", () => {
        display.innerText = '';
        opUsed.innerText = '';
    });






}
