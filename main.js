// ---------- Icons ----------
const I = {
  massage:'<path d="M2 16.5h20"/><path d="M4.5 16.5v3.5M19.5 16.5v3.5"/><circle cx="5.8" cy="12.4" r="1.9"/><path d="M8.8 14.2h10.4a1.3 1.3 0 0 1 1.3 1.3v1"/><path d="M11 10.3c.9-1.6 2.3-2.5 3.9-2.6M13.6 10.6c.8-1.3 2-2 3.4-2.1M16.4 11c.6-.9 1.4-1.4 2.4-1.5"/>',
  support:'<path d="M12 11.6s-3.4-2-3.4-4.4A1.8 1.8 0 0 1 12 6.3a1.8 1.8 0 0 1 3.4.9c0 2.4-3.4 4.4-3.4 4.4Z"/><path d="M2.5 14.5H6l3.6 1.4h4a1.4 1.4 0 0 1 0 2.8H10"/><path d="M13.6 18.7l4.8-2.3a1.6 1.6 0 0 1 2 2.5L15.2 22H8.5l-6-2"/>',
  leaf:'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19 13 11"/>',
  sprout:'<path d="M12 21v-9"/><path d="M12 12c0-4-3-7-8-7 0 4 3 7 8 7Z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7Z"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
  sun:'<path d="M3 17h18"/><path d="M7 17a5 5 0 0 1 10 0"/><path d="M12 6v3M5 9l2 2M19 9l-2 2M2 13h3M19 13h3"/>',
  people:'<circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 20a6 6 0 0 1 12 0M1 19a4 4 0 0 1 5-4M23 19a4 4 0 0 0-5-4"/>',
  hands:'<path d="M12 11.6s-3.4-2-3.4-4.4A1.8 1.8 0 0 1 12 6.3a1.8 1.8 0 0 1 3.4.9c0 2.4-3.4 4.4-3.4 4.4Z"/><path d="M2.5 14.5H6l3.6 1.4h4a1.4 1.4 0 0 1 0 2.8H10"/><path d="M13.6 18.7l4.8-2.3a1.6 1.6 0 0 1 2 2.5L15.2 22H8.5l-6-2"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>',
  bars:'<path d="M5 20v-6M10 20v-9M15 20v-12M20 20V4"/>',
  flame:'<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-5 5-5 8-1-1-2-2-2-4-2 2-2 5-2 8 0 4 3 7 7 7Z"/>',
  gut:'<path d="M15 3c2 0 3 2 1 3s-6 0-6 3 7 1 7 4-6 2-6 5 4 3 4 3"/><path d="M8 3c2 1 2 3 0 4"/>',
  hormone:'<circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="6" r="1.8"/><circle cx="19" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="19" cy="18" r="1.8"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/>',
  dna:'<path d="M7 2c0 5 10 5 10 10S7 17 7 22"/><path d="M17 2c0 5-10 5-10 10s10 5 10 10"/><path d="M8.5 4.5h7M7.6 12h8.8M8.5 19.5h7"/>',
  lotus:'<path d="M12 20c-2.6-1.6-4-4.2-4-7.2 0-2.3 1.4-4.6 4-6.8 2.6 2.2 4 4.5 4 6.8 0 3-1.4 5.6-4 7.2Z"/><path d="M8.3 11.2C6.6 10.4 4.7 10 3 10c0 4.6 3.6 9 9 10"/><path d="M15.7 11.2c1.7-.8 3.6-1.2 5.3-1.2 0 4.6-3.6 9-9 10"/>',
  moon:'<path d="M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10Z"/><path d="M16 4h3l-3 3h3"/>',
  run:'<circle cx="14" cy="4" r="2"/><path d="m6 20 4-6 3 2 1 5M8 11l3-4 4 2 3 3M10 14l2-6"/>',
  drop:'<path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z"/>',
  tooth:'<path d="M7 3c-3 0-4 3-3 7 1 3 1 11 3 11s2-6 5-6 3 6 5 6 2-8 3-11c1-4 0-7-3-7-2 0-3 1-5 1S9 3 7 3Z"/>',
  clip:'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/>',
  tube:'<path d="M9 2h6M10 2v15a2 2 0 0 0 4 0V2"/><path d="M10 10h4"/>',
  apple:'<path d="M12 7c-4-2-8 0-8 5s3 10 6 10c1 0 1-.5 2-.5s1 .5 2 .5c3 0 6-5 6-10s-4-7-8-5Z"/><path d="M12 7c0-2 1-4 3-5"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  phone:'<path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin:'<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  person:'<circle cx="12" cy="5" r="2"/><path d="M12 8v6M6 10l6-2 6 2M9 21l3-7 3 7"/>',
  cycle:'<path d="M20 12a8 8 0 0 1-14 5M4 12a8 8 0 0 1 14-5"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  wave:'<path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0" opacity=".5"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  foot:'<path d="M8 21c-3 0-4-3-3-7s1-8 4-8 3 4 2 8-1 7-3 7Z"/><circle cx="14" cy="5" r="1.4"/><circle cx="17" cy="7" r="1.2"/><circle cx="19" cy="10" r="1"/>',
  remote:'<rect x="8" y="2" width="8" height="20" rx="3"/><circle cx="12" cy="7" r="1.5"/><path d="M11 12h2M11 15h2"/>',
  star:'<path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7Z"/>',
  fb:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8Z"/>',
  ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  gift:'<rect x="3" y="8" width="18" height="5"/><path d="M5 13v8h14v-8M12 8v13M12 8S10 3 7.5 4 9 8 12 8Zm0 0s2-5 4.5-4S15 8 12 8Z"/>',
  scan:'<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M3 12h4l2-4 3 8 2-4h7"/>',
};
const icon = (n, extra='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[n]||''}</svg>`;
document.querySelectorAll('[data-i]').forEach(el => el.innerHTML = icon(el.dataset.i) + el.innerHTML);

// ---------- Brand mark ----------
const MARK = `<svg viewBox="0 0 64 52" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M32 26C24 14 12 10 3 12c6 2 9 5 11 9-4-1-8 0-10 2 7 0 12 2 18 6" stroke="#5b3f99" stroke-width="1.6"/>
<path d="M32 26c8-12 20-16 29-14-6 2-9 5-11 9 4-1 8 0 10 2-7 0-12 2-18 6" stroke="#5b3f99" stroke-width="1.6"/>
<path d="M8 17c5 0 10 2 14 5M56 17c-5 0-10 2-14 5" stroke="#5b3f99" stroke-width="1" opacity=".6"/>
<path d="M32 9c-2-3-6-1-4 2l4 3 4-3c2-3-2-5-4-2Z" fill="#9b7fd1"/>
<path d="M14 40c4 6 12 8 18 4M50 40c-4 6-12 8-18 4" stroke="#7fa57f" stroke-width="1.8"/>
<path d="M14 40l-3-6 3 1 1-4 3 6M50 40l3-6-3 1-1-4-3 6" stroke="#7fa57f" stroke-width="1.4"/>
</svg>`;
const BOOK = 'https://blvd.app/@atouchaboveholistichealth/login';
const PHONE = '918-998-7656';

// ---------- Shared nav & footer ----------
const page = document.body.dataset.page;
if (!document.querySelector('link[href="v3.css"]')) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'v3.css'; document.head.appendChild(l); }
const WP = 'https://atouchabovehhc.com/wp-content/uploads/';
const REVIEW = 'https://www.google.com/search?q=A+Touch+Above+Holistic+Health+Center+Reviews#lrd=0x87b6f1e60c02ef27:0xbe4514807a74a3a2,3,,,,';
const LOGO = `<span class="hlogo"><img src="${WP}2025/09/A-Touch-Above-Horizontal-Logo-PNG-01-1024x576.png" alt="A Touch Above — Massage &amp; Holistic Health" width="1024" height="576" onerror="this.parentElement.outerHTML=MARK+'<span><b>A Touch Above</b><small>Holistic Health</small></span>'"></span>`;
const act = p => page===p ? 'active' : '';
const chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>';
const navEl = document.getElementById('nav');
if (navEl) navEl.outerHTML = `
<nav class="nav" id="navbar"><div class="wrap">
  <a class="brand" href="index.html" aria-label="A Touch Above Holistic Health home">${LOGO}</a>
  <ul class="links">
    <li class="has-drop"><a href="services.html" class="${['services','fm','onc','pemf'].includes(page)?'active':''}">Services ${chev}</a>
      <ul class="drop">
        <li><a href="services.html"><span class="di">${icon('hands')}</span><span>All Services<small>Massage, pain relief, scans &amp; more</small></span></a></li>
        <li><a href="functional-medicine.html"><span class="di">${icon('sprout')}</span><span>Functional Medicine<small>Root-cause, whole-person care</small></span></a></li>
        <li><a href="oncology.html"><span class="di">${icon('heart')}</span><span>Integrative Oncology<small>Support alongside cancer care</small></span></a></li>
        <li><a href="pemf.html"><span class="di">${icon('bolt')}</span><span>PEMF &amp; THz Tera-P90+<small>Recharge &amp; restore</small></span></a></li>
      </ul>
    </li>
    <li><a href="team.html" class="${act('team')}">Our Team</a></li>
    <li><a href="faq.html" class="${act('faq')}">FAQs</a></li>
    <li><a href="index.html#contact">Contact</a></li>
    <li><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon('cal')}Book Now</a></li>
  </ul>
  <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</div></nav>`;

const footEl = document.getElementById('footer');
if (footEl) footEl.outerHTML = `
<footer>
 <div class="wrap ftop">
  <div class="fgrid">
    <div>
      <a class="flogo" href="index.html"><img src="${WP}2025/09/cropped-A-Touch-Above-Logo-01-1-scaled-1-270x270.png" alt="A Touch Above Holistic Health logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="brand fallback">${MARK}<span><b>A Touch Above</b><small>Holistic Health</small></span></span></a>
      <p class="fabout">Pain, Prevention, Support &amp; Direction. Whole-person care for body, mind and spirit in Owasso &amp; Tulsa, Oklahoma.</p>
      <div class="social">
        <a href="https://www.facebook.com/people/ATA-Womens-Holistic-Wellness/100089424800062/" target="_blank" rel="noopener" aria-label="Follow us on Facebook">${icon('fb')}</a>
        <a href="https://www.instagram.com/ataholistichealth/" target="_blank" rel="noopener" aria-label="Follow us on Instagram">${icon('ig')}</a>
        <a href="mailto:atouchabovehhc@gmail.com" aria-label="Email us">${icon('mail')}</a>
      </div>
    </div>
    <div>
      <h5>Hours</h5>
      <div class="fnote">By appointment only</div>
      <ul class="fhours">
        <li data-d="1"><b>Mon</b><span>9am – 5pm</span></li>
        <li data-d="2"><b>Tue</b><span>9am – 7pm</span></li>
        <li data-d="3"><b>Wed</b><span>Closed</span></li>
        <li data-d="4"><b>Thu</b><span>9am – 7pm</span></li>
        <li data-d="5"><b>Fri</b><span>9am – 4pm</span></li>
        <li data-d="6"><b>Sat</b><span>10am – 4pm</span></li>
        <li data-d="0"><b>Sun</b><span>Closed</span></li>
      </ul>
    </div>
    <div>
      <h5>Contact</h5>
      <ul class="fcontact">
        <li>${icon('phone')}<a href="tel:9189987656">${PHONE}</a></li>
        <li>${icon('mail')}<a href="mailto:atouchabovehhc@gmail.com">atouchabovehhc@gmail.com</a></li>
        <li>${icon('pin')}<a href="https://maps.google.com/?q=10306+N+138th+E+Ave+Ste+206+Owasso+OK+74055" target="_blank" rel="noopener">10306 N 138th E Ave, Ste 206<br>Owasso, OK 74055</a></li>
      </ul>
      <h5 style="margin-top:26px">Client Corner</h5>
      <ul>
        <li><a href="${BOOK}" target="_blank" rel="noopener">Patient Portal</a></li>
        <li><a href="https://app.squareup.com/gift/JHPM2FRCNE1VS/order" target="_blank" rel="noopener">Gift Certificates</a></li>
        <li><a href="https://atouchabove.idlife.com" target="_blank" rel="noopener">Customized Supplements <span class="fsub">Take the assessment</span></a></li>
        <li><a href="https://us.fullscript.com/login" target="_blank" rel="noopener">Fullscript Supplements</a></li>
        <li><a href="index.html#resources">Resources</a></li>
        <li class="fref">Virtual EMDR with Kristy Cannady<br><a href="tel:9252435695">925-243-5695</a></li>
      </ul>
    </div>
    <div>
      <h5>Certified &amp; Trusted</h5>
      <div class="badges">
        <a class="badge" title="Advanced Integrative Metabolic (AIM) certification"><img src="img/badge-aim.png" alt="AIM certification badge" loading="lazy" onerror="this.parentElement.remove()"></a>
        <a class="badge" title="Terrain Certified Network Advocate"><img src="img/badge-terrain.webp" alt="Terrain Certified Network Advocate badge" loading="lazy" onerror="this.parentElement.remove()"></a>
        <a class="badge" title="Genetics certification"><img src="img/badge-3x4.webp" alt="Genetics certification badge" loading="lazy" onerror="this.parentElement.remove()"></a>
        <a class="badge" title="Electrons+ certified"><img src="img/badge-electrons.webp" alt="Electrons+ certification badge" loading="lazy" onerror="this.parentElement.remove()"></a>
      </div>
      <div class="review">
        <img src="img/review-qr.png" alt="Scan to leave a Google review" loading="lazy" onerror="this.remove()">
        <div><span class="stars">★★★★★</span><b>Leave a Review</b><p>Loved your visit? Scan the code or tap below — it means the world to us.</p>
        <a class="btn btn-gold" href="${REVIEW}" target="_blank" rel="noopener">Review us on Google</a></div>
      </div>
    </div>
  </div>
 </div>
 <div class="legal"><div class="wrap">
    <span>© ${new Date().getFullYear()} A Touch Above Holistic Health · We don't treat, cure or diagnose. · <a href="privacy-policy.html">Privacy Policy</a></span>
    <span>Built and powered by <a href="https://bigmammothmedia.com/" target="_blank" rel="noopener">Big Mammoth Media, LLC.</a></span>
 </div></div>
</footer>
<a class="floatbtn" href="tel:9189987656" aria-label="Call A Touch Above">${icon('phone')}</a>`;

// nav behavior
const nav = document.getElementById('navbar');
const onScroll = () => {
  nav && nav.classList.toggle('scrolled', scrollY > 30);
  document.querySelector('.floatbtn')?.classList.toggle('show', scrollY > 600);
};
addEventListener('scroll', onScroll, {passive:true}); onScroll();
nav?.querySelector('.burger').addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// counters
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || ''; let t0;
  const step = t => { t0 ??= t; const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), {threshold:.6});
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

// hours + open status (Central Time)
const HOURS = [null,[9,17],[9,19],null,[9,19],[9,16],[10,16]]; // Sun..Sat
const ct = new Date(new Date().toLocaleString('en-US',{timeZone:'America/Chicago'}));
const today = ct.getDay(), hr = ct.getHours() + ct.getMinutes()/60, h = HOURS[today];
const fmt = n => (n>12?n-12:n) + (n>=12?'pm':'am');
document.querySelectorAll('.status').forEach(s => {
  const open = h && hr >= h[0] && hr < h[1];
  s.classList.toggle('open', !!open);
  let msg;
  if (open) msg = `Open now · until ${fmt(h[1])} today`;
  else { let d = today, i = 0; do { d = (d+1)%7; i++; } while(!HOURS[d]);
    if (h && hr < h[0]) msg = `Opens today at ${fmt(h[0])}`;
    else msg = `Closed now · opens ${i===1?'tomorrow':['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]} at ${fmt(HOURS[d][0])}`; }
  s.querySelector('span').textContent = msg;
});
document.querySelectorAll('.hours tr[data-d], .fhours li[data-d]').forEach(tr => { if (tr.dataset.d.split(',').includes(String(today))) tr.classList.add('today'); });

// generic tabs: [data-tabs] container with buttons [data-t] and panels [data-p]
document.querySelectorAll('[data-tabs]').forEach(g => {
  const btns = g.querySelectorAll('[data-t]'), panes = g.querySelectorAll('[data-p]');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.toggle('active', x === b));
    panes.forEach(p => p.classList.toggle('active', p.dataset.p === b.dataset.t));
  }));
});

// accordions
document.querySelectorAll('.qa button').forEach(b => b.addEventListener('click', () => b.parentElement.classList.toggle('open')));
document.querySelectorAll('.member .toggle').forEach(b => b.addEventListener('click', () => {
  const m = b.closest('.member'); m.classList.toggle('open');
  b.querySelector('em').textContent = m.classList.contains('open') ? 'Show less' : 'Read her story';
}));

// hero word rotator
const rot = document.querySelector('.rotator');
if (rot) { const words = rot.dataset.words.split('|'); let i = 0;
  setInterval(() => { rot.classList.add('out'); setTimeout(() => { i = (i+1)%words.length; rot.textContent = words[i]; rot.classList.remove('out'); }, 400); }, 2400); }

// path finder quiz
const quiz = document.getElementById('quiz');
if (quiz) {
  const steps = [...quiz.querySelectorAll('.qstep')], bar = quiz.querySelector('.qbar i'); let ans = [];
  const RESULTS = {
    pain:{t:'Pain Relief Therapy with Electron Plus (E+)', d:'Hands-on therapy paired with guided PEMF to calm inflammation, release tension and support recovery from injuries, surgery and chronic pain. Pair it with a Therapeutic Medical Massage for a full reset.', l:'services.html#pain'},
    relax:{t:'Swedish Massage', d:'A customized session with aromatherapy, heated foot towels and a PEMF mat — designed to quiet the nervous system and help you truly unwind.', l:'services.html#massage'},
    digest:{t:'Arvigo® Abdominal Massage', d:'A gentle, external technique to support digestion, fertility, menstrual and pelvic health — with self-care instruction to continue at home.', l:'services.html#massage'},
    root:{t:'Holistic Health Session + Labs Review', d:'An integrated metabolic approach to uncover root causes, review your labs and build a personalized plan — with genetics and bio frequency insights when helpful.', l:'functional-medicine.html'},
    onc:{t:'Integrative Metabolic Oncology Consultation', d:'Whole-person support alongside your oncology care — before, during and after treatment, or for proactive prevention if you are high-risk.', l:'oncology.html'},
  };
  quiz.querySelectorAll('.qopt').forEach(o => o.addEventListener('click', () => {
    const s = o.closest('.qstep'), idx = steps.indexOf(s); ans[idx] = o.dataset.v;
    s.classList.remove('active');
    if (idx < steps.length - 2) { steps[idx+1].classList.add('active'); bar.style.width = ((idx+1)/(steps.length-1)*100)+'%'; }
    else {
      bar.style.width = '100%';
      const r = RESULTS[ans[0]] || RESULTS.root;
      const last = steps[steps.length-1];
      last.querySelector('h4').textContent = r.t;
      last.querySelector('p').textContent = r.d + (ans[1]==='new' ? ' As a new client, start with a new-client session so we can take a full history.' : '');
      const a = last.querySelector('.go'); a.href = r.l;
      last.classList.add('active');
    }
  }));
  quiz.querySelector('.restart').addEventListener('click', () => { ans = []; steps.forEach(s => s.classList.remove('active')); steps[0].classList.add('active'); bar.style.width = '0'; });
}

// terrain tiles
const tinfo = document.querySelector('.tinfo');
document.querySelectorAll('.tile').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.tile').forEach(x => x.classList.toggle('active', x === t));
  tinfo.innerHTML = `<b>${t.querySelector('span').textContent}</b><p>${t.dataset.info}</p>`;
}));

// tech wheel
const wheel = document.querySelector('.techwheel');
if (wheel) {
  const nodes = [...wheel.querySelectorAll('.tnode')], n = nodes.length, desc = document.querySelector('.tdesc');
  nodes.forEach((nd, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI/2;
    nd.style.left = (50 + 40*Math.cos(a)) + '%'; nd.style.top = (50 + 40*Math.sin(a)) + '%';
    nd.addEventListener('click', () => { nodes.forEach(x => x.classList.toggle('active', x === nd));
      desc.innerHTML = `<h4>${nd.dataset.title}</h4><p>${nd.dataset.info}</p>`; });
  });
  let k = 0; const auto = setInterval(() => { nodes[k % n].click(); k++; }, 3200);
  wheel.addEventListener('mouseenter', () => clearInterval(auto), {once:true});
  nodes[0].click();
}

// deep-link tabs (services.html#pain)
const openHash = () => { const h = location.hash.slice(1); if (!h) return; const b = document.querySelector(`[data-t="${h}"]`); if (b) { b.click(); setTimeout(()=>b.closest('[data-tabs]')?.scrollIntoView({behavior:'smooth'}),50); } };
addEventListener('hashchange', openHash); openHash();

// FAQ search
const fs = document.querySelector('.faq-search input');
if (fs) fs.addEventListener('input', () => {
  const q = fs.value.trim().toLowerCase();
  document.querySelectorAll('.faq-group').forEach(g => { if (q) g.classList.add('active'); });
  document.querySelectorAll('.faq-group .qa').forEach(qa => qa.classList.toggle('hide', !!q && !qa.textContent.toLowerCase().includes(q)));
  if (!q) document.querySelector('.faq-tabs .tab.active')?.click();
});
