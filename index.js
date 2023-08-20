const menuItem = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#message-notification');
const messages =document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const changeActiveItem = ()=> {
    menuItem.forEach(item => {
        item.classList.remove ('active');
    })
}


menuItem.forEach(item=>{
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active'); 
        if(item.id !="notifications") {
            document.querySelector('notification-popup')
            style.display = 'none';
        }
        else{
            document.querySelector('notification-popup')
            style.display = 'block';
            document.querySelector('#notifications . notification-count').style.display = 'none';
        }
    })
})

const searchMessage = () => {
    const val=  messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) !=-1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
   
    })
}
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click',() =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'; 
    }, 2000);
})

