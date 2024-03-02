const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        


    })}
    if (close){
        close.addEventListener('click',()=>{
            nav.classList.remove('active');
            
    
    
        })}
        
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var formData = new FormData(this);

        
        showNotification('Form submitted successfully!');
        
       
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function showNotification(message) {
        var notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    }



        
        