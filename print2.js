document.querySelector('#imprimer').addEventListener('click', function () {
    let wspFrame = document.getElementById('framedis').contentWindow;
    wspFrame.focus();
    wspFrame.print();
    
    
    
});