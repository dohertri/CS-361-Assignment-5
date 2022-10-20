let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let msg = document.getElementById('clockMsg');
let infoSubmitBtn = document.getElementById('infoSubmit');

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    if(modalBtn.textContent === "Clock In"){
        msg.textContent = "Clocking In"
    }else{
        msg.textContent = "Clocking Out"
    }
});

modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
    if(modalBtn.textContent === "Clock In"){
        modalBtn.textContent = "Clock Out";
    }else{
        modalBtn.textContent = "Clock In";
    }
});

infoSubmitBtn.addEventListener('click', function(){
    document.getElementById("employeePortal").removeAttribute('disabled')
    document.getElementById("clockBtn").removeAttribute('disabled')

});
