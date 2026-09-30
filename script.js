const modal=document.querySelector('#lightbox');
const fullPhoto=document.querySelector('#full-photo');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{fullPhoto.src=button.dataset.photo;fullPhoto.alt=button.querySelector('img').alt;modal.showModal();}));
document.querySelector('#close-photo').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close();});
let celebrationTimer;
document.querySelector('#celebrate').addEventListener('click',()=>{
 const wish=document.querySelector('#wish');wish.textContent='Que nunca faltem motivos pra soltar um “hahai”. Te adoro, Ma! 💗';wish.classList.add('pop');clearTimeout(celebrationTimer);celebrationTimer=setTimeout(()=>wish.classList.remove('pop'),1200);
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 document.querySelectorAll('.confetti').forEach(item=>item.remove());
 for(let i=0;i<32;i++){const item=document.createElement('span');item.className='confetti';item.textContent=i%3?'♥':'✦';item.style.left=Math.random()*100+'vw';item.style.color=['#bc91ef','#f79fcb','#f6e7ff'][i%3];item.style.fontSize=(12+Math.random()*15)+'px';item.style.animationDelay=Math.random()*.6+'s';document.body.append(item);setTimeout(()=>item.remove(),3500);}
});

// Native buttons support touch, click, Enter and Space.
document.querySelectorAll('.flashcard').forEach(card => {
 const front = card.querySelector('.flash-front');
 const back = card.querySelector('.flash-back');
 const question = card.querySelector('.flash-question').textContent;
 const answer = card.querySelector('.flash-answer').textContent;
 const note = card.querySelector('.flash-note').textContent;
 card.addEventListener('click', () => {
  const revealed = card.getAttribute('aria-expanded') !== 'true';
  card.classList.toggle('is-flipped', revealed);
  card.setAttribute('aria-expanded', String(revealed));
  front.setAttribute('aria-hidden', String(revealed));
  back.setAttribute('aria-hidden', String(!revealed));
  card.setAttribute('aria-label', revealed
   ? `Resposta: ${answer} ${note} Voltar à pergunta.`
   : `${question} Mostrar resposta.`);
 });
});
