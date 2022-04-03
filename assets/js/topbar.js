const deleteButton = document.querySelector('.btn-delete');

deleteButton.addEventListener('click', removeTopbar);

function removeTopbar() {
    const topbar = document.querySelector('.topbar');
    
    if(topbar.classList.contains('d-none')) {
        topbar.classList.remove('d-none');
    } else {
        topbar.classList.add('d-none');
    }
}