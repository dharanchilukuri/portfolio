

const main = document.querySelector('main');
let string=['<i class="fa-brands fa-html5 fa-2xl" style="color:#ff0000;"></i>','<i class="fa-brands fa-css3-alt fa-2xl" style="color: #1106ef;"></i>','<i class="fa-brands fa-js fa-2xl" style="color: #00602a;"></i>','<i class="fa-brands fa-bootstrap fa-2xl style:#<i class="fa-brands fa-bootstrap fa-2xl" style="color: #ffef00;"</i>'];

for (let i = 0; i < string.length; i++) {
  setTimeout(() => {
    main.innerHTML +=`<dfn>${string[i]}</dfn>`;
    console.log(main);
  }, i * 1500 );
}

