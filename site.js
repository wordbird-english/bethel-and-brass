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
  image.src = `${({"02":"4-12","03":"5-13","05":"7-15","08":"10-18","09":"11-19","10":"12-20","12":"13-21"})[number]}-bb-wall-art-${number}-${slug}-12x16-300dpi-web.jpg`;
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
