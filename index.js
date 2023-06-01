let k=1;

function handleNavLinkClick(event){
    const myElement=document.getElementsByClassName('skills-layout')[0].style.display = 'flex';

    if(k>0)
    {
        const main = document.querySelector('main');
        let string=['<i class="fa-brands fa-html5 fa-2xl" style="color:#f11100;"></i>','<i class="fa-brands fa-css3-alt fa-2xl" style="color: #1106ef;"></i>','<i class="fa-brands fa-js fa-2xl" style="color: #00602a;"></i>','<i class="fa-brands fa-bootstrap fa-2xl style:#<i class="fa-brands fa-bootstrap fa-2xl" style="color: #ffef00;"</i>'];
        let k=1;
        for (let i = 0; i < string.length; i++) {
            setTimeout(() => {
                main.innerHTML +=`<dfn>${string[i]}</dfn>`;
                console.log(main);
            }, (i+1) * 1200 );
        }
    }
 k--;
}
const navLink= document.getElementById('slink');
navLink.addEventListener('click', handleNavLinkClick);

window.addEventListener('scroll', handleNavLinkClick);
