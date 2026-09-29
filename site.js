const works = [
  ['02','Welcome / Bruchim Haba’im','Greeting, not scripture','welcome','Hebrew welcome and two open archways'],
  ['03','A Light to the Nations','Isaiah 42:6 · adapted excerpt','nations','Clay lamp and rays of light'],
  ['05','Shabbat Shalom','Greeting, not scripture','shabbat','Hebrew Shabbat Shalom and two candlesticks'],
  ['08','New Every Morning','Lamentations 3:23 · adapted excerpt','morning','Hebrew phrase over dawn hills'],
  ['09','Do Justly, Love Mercy','Micah 6:8 · excerpt; third imperative omitted','mercy','Three tied stems of olive, wheat and fig'],
  ['10','Dwell Together in Unity','Psalm 133:1 · adapted','unity','Hebrew phrase within a two-branch wreath'],
  ['12','Peace Be Within Thy Walls','Psalm 122:7 · KJV excerpt','walls','Stone wall and arched door with olive sprig']
];
const gallery = document.querySelector('#gallery');
if (gallery) works.forEach(([number,title,note,slug,subject]) => {
  const item = document.createElement('figure');
  item.className = 'gallery-card';
  const image = document.createElement('img');
  image.src = `${({"02":"4-12","03":"5-13","05":"7-15","08":"10-18","09":"11-19","10":"12-20","12":"13-21"})[number]}-bb-wall-art-${number}-${slug}-12x16-300dpi-web.jpg?v=olive-v2-20260928b`;
  image.alt = `${title} artwork: ${subject}`;
  image.width = 880; image.height = 1173; image.loading = 'lazy';
  const caption = document.createElement('figcaption');
  const numberLine = document.createElement('span'); numberLine.textContent = `${number} / BETHEL & BRASS`;
  const detailSlug = ({'02':'welcome-bruchim-habaim','03':'a-light-to-the-nations','05':'shabbat-shalom','08':'new-every-morning'})[number];
  const heading = document.createElement('strong'); if (detailSlug) { const link=document.createElement('a'); link.href='/products/'+detailSlug+'/'; link.textContent=title; heading.append(link); } else heading.textContent=title;
  const qualifier = document.createElement('small'); qualifier.textContent = note;
  const live = number === '02' || number === '03' || number === '05' || number === '08';
  const availability = document.createElement(live ? 'span' : 'b');
  if (live) {
    availability.className = 'buy-row';
    const price = document.createElement('span'); price.className = 'price'; price.textContent = '$32';
    const button = document.createElement('button'); button.className = 'add-cart'; button.type = 'button'; button.dataset.product = number; button.textContent = 'Add to Cart';
    availability.append(price, button);
  } else availability.textContent = 'COMING SOON';
  caption.append(numberLine, heading, qualifier, availability);
  if (detailSlug) { const artLink=document.createElement('a'); artLink.className='product-card-link'; artLink.href='/products/'+detailSlug+'/'; artLink.setAttribute('aria-label','View '+title+' product page'); artLink.append(image); item.append(artLink,caption); } else item.append(image,caption); gallery.append(item);
});

const cartKey = 'bb-cart-06';
const priorCartKey = 'bb-cart-05';
const legacyCartKey = 'bb-cart-01';
const products = {
  '01': {title: 'Shalom in This Home', variant: 'bf19f662-ced7-4ed3-81eb-0dea92735d0a', image: '/3-11-bb-wall-art-01-shalom-12x16-300dpi-web.jpg?v=olive-v2-20260928b'},
  '02': {title: 'Welcome / Bruchim Haba’im', variant: '0e026778-cb34-4ed6-a9ad-72da28e5e287', image: '/4-12-bb-wall-art-02-welcome-12x16-300dpi-web.jpg?v=olive-v2-20260928b'},
  '03': {title: 'A Light to the Nations', variant: 'd2069209-2c3d-4858-b92a-de86a8a130e8', image: '/5-13-bb-wall-art-03-nations-12x16-300dpi-web.jpg?v=olive-v2-20260928b'},
  '07': {title: 'I Will Lift Up Mine Eyes', variant: 'a50df63b-e70a-4c7c-bfcb-d73c8052af02', image: '/9-17-bb-wall-art-07-eyes-12x16-300dpi-web.jpg?v=olive-v2-20260928b'},
  '05': {title: 'Shabbat Shalom', variant: '1340c0c2-553c-4c74-b9a8-74c95198653b', image: '/7-15-bb-wall-art-05-shabbat-12x16-300dpi-web.jpg?v=olive-v2-20260928b'},
  '08': {title: 'New Every Morning', variant: '7dafe6c7-042c-4fb3-8002-4f638852253c', image: '/10-18-bb-wall-art-08-morning-12x16-300dpi-web.jpg?v=olive-v2-20260928b'}
};
const cartPanel = document.querySelector('#shop-cart');
const scrim = document.querySelector('.cart-scrim');
const cartTrigger = document.querySelector('.cart-trigger');
const cartCheckout = document.querySelector('.cart-checkout');
function clampQuantity(value) { const q = Number(value); return Number.isFinite(q) ? Math.max(0,Math.min(20,Math.floor(q))) : 0; }
function readCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(cartKey) || '{}');
    if (stored && typeof stored === 'object') return Object.fromEntries(Object.keys(products).map(id => [id,clampQuantity(stored[id])]));
  } catch {}
  return {'01':0,'02':0};
}
function saveCart(cart) { try { localStorage.setItem(cartKey,JSON.stringify(cart)); } catch {} renderCart(); }
function setQuantity(id,q) { if (!products[id]) return; const cart=readCart(); cart[id]=clampQuantity(q); saveCart(cart); }
function renderCart() {
  const cart=readCart(), total=Object.values(cart).reduce((a,q)=>a+q,0);
  document.querySelector('.cart-count').textContent=total;
  const items=document.querySelector('.cart-items'); items.replaceChildren();
  Object.entries(products).forEach(([id,product]) => {
    if (!cart[id]) return;
    const row=document.createElement('div'); row.className='cart-product'; row.dataset.product=id; row.style.marginBottom='22px';
    const img=document.createElement('img'); img.src=product.image; img.alt=product.title+' print';
    const body=document.createElement('div');
    const title=document.createElement('strong'); title.textContent=product.title;
    const price=document.createElement('p'); price.textContent='12 x 16 in · $32.00';
    const label=document.createElement('label'); label.textContent='Quantity ';
    const input=document.createElement('input'); input.className='cart-qty'; input.type='number'; input.min='0'; input.max='20'; input.value=cart[id]; input.setAttribute('aria-label',product.title+' quantity'); label.append(input);
    const remove=document.createElement('button'); remove.className='cart-remove'; remove.type='button'; remove.textContent='Remove '+product.title;
    body.append(title,price,label,remove); row.append(img,body); items.append(row);
  });
  if (!total) {const empty=document.createElement('p'); empty.textContent='Your cart is empty.'; items.append(empty);}
  const subtotal=total*32;
  document.querySelector('.cart-subtotal').textContent='$'+subtotal.toFixed(2);
  const shipping=document.querySelector('.shipping-progress');
  if(shipping) shipping.textContent=subtotal>75?'Your cart qualifies for free shipping.':subtotal?'Add $'+(76-subtotal).toFixed(2)+' more for free shipping on orders over $75.':'Free shipping on orders over $75.';
  cartCheckout.hidden=!total;
  if (total) cartCheckout.href='https://checkout.bethelandbrass.com/cart/checkout?products='+Object.keys(products).filter(id=>cart[id]).map(id=>products[id].variant+':'+cart[id]).join(',')+'&currency=USD';
  else cartCheckout.removeAttribute('href');
}
function toggleCart(open) { cartPanel.hidden=!open; scrim.hidden=!open; cartTrigger.setAttribute('aria-expanded',String(open)); document.body.classList.toggle('cart-open',open); if(open) document.querySelector('.cart-close').focus(); else cartTrigger.focus(); }
try { if (!localStorage.getItem(cartKey)) { const prior=localStorage.getItem(priorCartKey); if (prior) localStorage.setItem(cartKey,prior); else { const old=clampQuantity(localStorage.getItem(legacyCartKey)); if(old) localStorage.setItem(cartKey,JSON.stringify({'01':old,'02':0})); } } } catch {}
document.querySelectorAll('.add-cart').forEach(button=>button.addEventListener('click',()=>{ const id=button.dataset.product; setQuantity(id,readCart()[id]+1); toggleCart(true); }));
cartTrigger.addEventListener('click',()=>toggleCart(true));
document.querySelector('.cart-close').addEventListener('click',()=>toggleCart(false));
scrim.addEventListener('click',()=>toggleCart(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!cartPanel.hidden)toggleCart(false);});
cartPanel.addEventListener('change',e=>{if(e.target.matches('.cart-qty'))setQuantity(e.target.closest('[data-product]').dataset.product,e.target.value);});
cartPanel.addEventListener('click',e=>{if(e.target.matches('.cart-remove'))setQuantity(e.target.closest('[data-product]').dataset.product,0);});
renderCart();
