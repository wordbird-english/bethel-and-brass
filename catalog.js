const catalog = [
  ['01','Shalom in This Home','Original sentiment, not a Bible quotation','home','3-11-bb-wall-art-01-shalom-12x16-300dpi-web.jpg','shalom-in-this-home',true,'welcome blessing peace olive'],
  ['02','Welcome / Bruchim Haba’im','Greeting, not scripture','home','4-12-bb-wall-art-02-welcome-12x16-300dpi-web.jpg','welcome-bruchim-habaim',true,'welcome greeting doorway arches'],
  ['03','A Light to the Nations','Isaiah 42:6 · adapted wording','faith','5-13-bb-wall-art-03-nations-12x16-300dpi-web.jpg','a-light-to-the-nations',true,'isaiah light lamp'],
  ['04','Pray for the Peace of Jerusalem','Psalm 122:6 · adapted excerpt','jerusalem','6-14-bb-wall-art-04-jerusalem-12x16-300dpi-web.jpg','pray-for-the-peace-of-jerusalem',true,'psalm city prayer'],
  ['05','Shabbat Shalom','Greeting, not scripture','rest','7-15-bb-wall-art-05-shabbat-12x16-300dpi-web.jpg','shabbat-shalom',true,'sabbath candlesticks rest'],
  ['06','Let There Be Light','Genesis 1:3 · KJV excerpt','faith','8-16-bb-wall-art-06-light-12x16-300dpi-web.jpg','let-there-be-light',true,'genesis creation waters'],
  ['07','I Will Lift Up Mine Eyes','Psalm 121:1–2 · KJV excerpt','faith','9-17-bb-wall-art-07-eyes-12x16-300dpi-web.jpg','i-will-lift-up-mine-eyes',true,'mountains help'],
  ['08','New Every Morning','Lamentations 3:23 · adapted excerpt','rest','10-18-bb-wall-art-08-morning-12x16-300dpi-web.jpg','new-every-morning',true,'dawn mercy renewal'],
  ['09','Do Justly, Love Mercy','Micah 6:8 · adapted excerpt','faith','11-19-bb-wall-art-09-mercy-12x16-300dpi-web.jpg','',false,'justice olive wheat fig'],
  ['10','Dwell Together in Unity','Psalm 133:1 · adapted wording','home','12-20-bb-wall-art-10-unity-12x16-300dpi-web.jpg','',false,'unity together wreath'],
  ['12','Peace Be Within Thy Walls','Psalm 122:7 · KJV excerpt','jerusalem','13-21-bb-wall-art-12-walls-12x16-300dpi-web.jpg','',false,'peace walls doorway']
];
const grid=document.querySelector('#catalog-grid');
const search=document.querySelector('#catalog-search'), category=document.querySelector('#catalog-category'), availability=document.querySelector('#catalog-availability');
const themeName={home:'HOME & WELCOME',faith:'FAITH & HOPE',rest:'REST & RENEWAL',jerusalem:'JERUSALEM & PEACE'};
for(const [id,title,note,theme,file,slug,live,keywords] of catalog){
 const card=document.createElement('article');card.className='catalog-card';card.dataset.theme=theme;card.dataset.availability=live?'available':'soon';card.dataset.search=(title+' '+note+' '+themeName[theme]+' '+keywords).toLocaleLowerCase();
 const art=document.createElement(live?'a':'div');art.className='catalog-art';if(live){art.href='/products/'+slug+'/';art.setAttribute('aria-label','View '+title);}const img=document.createElement('img');img.src='/'+file+'?v=olive-v2-20260928b';img.alt=title+' artwork';img.loading='lazy';img.width=880;img.height=1173;art.append(img);
 const info=document.createElement('div');info.className='catalog-info';const meta=document.createElement('span');meta.className='catalog-meta';meta.textContent=id+' / '+themeName[theme];const name=document.createElement('h2');if(live){const a=document.createElement('a');a.href='/products/'+slug+'/';a.textContent=title;name.append(a);}else name.textContent=title;const desc=document.createElement('p');desc.textContent=note;const action=document.createElement('div');action.className='catalog-action';if(live){const price=document.createElement('span');price.textContent='$32';const button=document.createElement('button');button.type='button';button.className='add-cart';button.dataset.product=id;button.textContent='Add to cart';action.append(price,button);}else {const soon=document.createElement('span');soon.className='soon';soon.textContent='COMING SOON';action.append(soon);}info.append(meta,name,desc,action);card.append(art,info);grid.append(card);
}
function filterCatalog(){const term=search.value.trim().toLocaleLowerCase();let count=0;for(const card of grid.children){const show=(!term||card.dataset.search.includes(term))&&(category.value==='all'||card.dataset.theme===category.value)&&(availability.value==='all'||card.dataset.availability===availability.value);card.hidden=!show;if(show)count++;}document.querySelector('#catalog-results').textContent='Showing '+count+' of '+catalog.length+' designs';document.querySelector('#catalog-empty').hidden=count!==0;}
for(const input of [search,category,availability])input.addEventListener(input===search?'input':'change',filterCatalog);
document.querySelector('#clear-filters').addEventListener('click',()=>{search.value='';category.value='all';availability.value='all';filterCatalog();search.focus();});
filterCatalog();
