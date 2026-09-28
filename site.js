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
works.forEach(([number,title,note,slug,subject]) => {
  const item = document.createElement('figure');
  item.className = 'gallery-card';
  const image = document.createElement('img');
  image.src = `${({"02":"4-12","03":"5-13","05":"7-15","08":"10-18","09":"11-19","10":"12-20","12":"13-21"})[number]}-bb-wall-art-${number}-${slug}-12x16-300dpi-web.jpg?v=olive-v2-20260928b`;
  image.alt = `${title} artwork: ${subject}`;
  image.width = 880; image.height = 1173; image.loading = 'lazy';
  const caption = document.createElement('figcaption');
  const numberLine = document.createElement('span'); numberLine.textContent = `${number} / BETHEL & BRASS`;
  const heading = document.createElement('strong'); heading.textContent = title;
  const qualifier = document.createElement('small'); qualifier.textContent = note;
  const availability = document.createElement('b'); availability.textContent = 'COMING SOON';
  caption.append(numberLine, heading, qualifier, availability);
  item.append(image, caption); gallery.append(item);
});

const cartKey = 'bb-cart-01';
const cartPanel = document.querySelector('#shop-cart');
const scrim = document.querySelector('.cart-scrim');
const cartTrigger = document.querySelector('.cart-trigger');
const cartCheckout = document.querySelector('.cart-checkout');
const variantId = 'bf19f662-ced7-4ed3-81eb-0dea92735d0a';
function cartQuantity() { try { return Math.max(0, Math.min(20, Math.floor(Number(localStorage.getItem(cartKey)) || 0))); } catch { return 0; } }
function setCartQuantity(q) { try { localStorage.setItem(cartKey, String(Number.isFinite(q) ? Math.max(0, Math.min(20, Math.floor(q))) : 0)); } catch {} renderCart(); }
function renderCart() {
  const q = cartQuantity();
  document.querySelector('.cart-count').textContent = q;
  document.querySelector('.cart-items').innerHTML = q ? '<div class="cart-product"><img src="3-11-bb-wall-art-01-shalom-12x16-300dpi-web.jpg?v=olive-v2-20260928b" alt="Shalom in This Home print"><div><strong>Shalom in This Home</strong><p>12 x 16 in · $32.00</p><label>Quantity <input class="cart-qty" type="number" min="0" max="20" value="' + q + '"></label><button class="cart-remove" type="button">Remove</button></div></div>' : '<p>Your cart is empty.</p>';
  document.querySelector('.cart-subtotal').textContent = '$' + (q * 32).toFixed(2);
  cartCheckout.hidden = !q;
  cartCheckout.href = 'https://bethelandbrass-shop.fourthwall.com/cart/checkout?products=' + variantId + ':' + q + '&currency=USD';
}
function toggleCart(open) { cartPanel.hidden = !open; scrim.hidden = !open; cartTrigger.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('cart-open',open); if (open) document.querySelector('.cart-close').focus(); else cartTrigger.focus(); }
document.querySelector('.add-cart').addEventListener('click', () => { setCartQuantity(cartQuantity() + 1); toggleCart(true); });
cartTrigger.addEventListener('click', () => toggleCart(true));
document.querySelector('.cart-close').addEventListener('click', () => toggleCart(false));
scrim.addEventListener('click', () => toggleCart(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !cartPanel.hidden) toggleCart(false); });
cartPanel.addEventListener('change', e => { if (e.target.matches('.cart-qty')) setCartQuantity(Number(e.target.value)); });
cartPanel.addEventListener('click', e => { if (e.target.matches('.cart-remove')) setCartQuantity(0); });
renderCart();
