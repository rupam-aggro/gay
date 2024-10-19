const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = '';
    yesBtn.remove();
    let icon = document.getElementById("icon"); 
    
    if (icon.classList.contains("fa-circle-question")) {
    
        icon.remove();
    
    } else {
        icon.classList.add("fa-circle-question"); 
    }
    wrapper.style.backgroundImage = 'url("1_3xfBNV0-ENkNRG4ZZFs6tg@2x.webp")'; 
    wrapper.style.backgroundSize = 'cover';  
    wrapper.style.backgroundPosition = 'center';
    noBtn.remove();  


});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});