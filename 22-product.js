const display=document.querySelector('#detail-image');
document.querySelectorAll('.gallery-thumb').forEach(button=>button.addEventListener('click',()=>{
 display.src=button.dataset.src; display.alt=button.dataset.alt;
 document.querySelectorAll('.gallery-thumb').forEach(other=>{other.classList.toggle('selected',other===button);other.setAttribute('aria-pressed',String(other===button));});
}));
