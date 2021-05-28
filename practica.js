let bt = document.querySelectorAll('.bt')
/*con el foreach recorremos todos los elementos que esten en el bt*/
bt.forEach(e =>{
    e.addEventListener('click', function(e){
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation')
        padre.parentNode.children[1].classList.toggle('animation')
        
    })
})