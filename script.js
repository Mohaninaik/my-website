(function () {
  var state = { filter: 'All' };
  var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#e8b410';

  function build() {
    var current = state.filter;
    const insta = 'https://www.instagram.com/mohan_irayya';
    const all = [
      { src: 'images/tiger-closeup.jpg', ratio: '4 / 5', zoom: 1, title: 'Tiger', cat: 'Wildlife', alt: 'Close-up portrait of a tiger’s face in profile with one amber eye and long white whiskers against a dark background' },
      { src: 'images/tiger-water.jpg', ratio: '3 / 2', zoom: 1, title: 'Tiger in the water', cat: 'Wildlife', alt: 'A tiger sitting in shallow water, head turned with its mouth open and amber eyes looking ahead' },
      { src: 'images/peafowl-group.jpg', ratio: '3 / 2', zoom: 1, title: 'Indian peafowl', cat: 'Birds', alt: 'Three Indian peafowl standing in a row among green shrubs, necks raised and turned to the right' },
      { src: 'images/spotted-owlets.jpg', ratio: '4 / 5', zoom: 1, title: 'Spotted owlets', cat: 'Birds', alt: 'Two spotted owlets in dark forest light, one perched on a lichen-covered branch and one in flight' },
      { src: 'images/indian-roller.jpg', ratio: '3 / 2', zoom: 1, title: 'Indian roller landing', cat: 'Birds', alt: 'An Indian roller landing on a tree stump with wings fully spread against a soft green background' },
      { src: 'images/green-vine-snake.jpg', ratio: '3 / 2', zoom: 1, title: 'Green vine snake', cat: 'Reptiles and amphibians', alt: 'Bright green vine snake with its tongue out against a black background' },
      { src: 'images/pied-kingfisher.jpg', ratio: '4 / 5', zoom: 1, title: 'Pied kingfisher', cat: 'Birds', alt: 'Pied kingfisher in flight, wings angled down, against a blurred green background' },
      { src: 'images/striped-caterpillar.jpg', ratio: '3 / 2', zoom: 1, title: 'Striped caterpillar', cat: 'Macro', alt: 'Red, yellow and black banded caterpillar with long black bristles on a twig' },
      { src: 'images/kingfisher-diving.jpg', ratio: '4 / 5', zoom: 1.1, title: 'Kingfisher diving', cat: 'Birds', alt: 'A kingfisher with blue back plunging head-first off a thin branch' },
      { src: 'images/toad.jpg', ratio: '3 / 2', zoom: 1, title: 'Toad on a fallen leaf', cat: 'Reptiles and amphibians', alt: 'A small toad with a large dark eye sitting on a dry brown leaf' },
      { src: 'images/peacock.jpg', ratio: '3 / 2', zoom: 1, title: 'Indian peafowl', cat: 'Birds', alt: 'A peacock standing among blurred green foliage at soft dawn light' },
      { src: 'images/tricolored-munia.jpg', ratio: '4 / 5', zoom: 1, title: 'Tricolored munia', cat: 'Birds', alt: 'A chestnut, white and black munia clinging to a thin stem among tall grass' },
      { src: 'images/hairy-caterpillar.jpg', ratio: '3 / 2', zoom: 1, title: 'Hairy caterpillar', cat: 'Macro', alt: 'A pale, long-haired caterpillar crawling over the end of a branch' },
      { src: 'images/common-kingfisher.jpg', ratio: '5 / 4', zoom: 1, title: 'Common kingfisher', cat: 'Birds', alt: 'A common kingfisher perched on a bare twig against a dark green background' },
      { src: 'images/lizard-night.jpg', ratio: '3 / 2', zoom: 1, title: 'Lizard at night', cat: 'Reptiles and amphibians', alt: 'A spiny lizard resting along a branch against a black night background' },
      { src: 'images/snake-portrait.jpg', ratio: '3 / 2', zoom: 1, title: 'Snake portrait', cat: 'Reptiles and amphibians', alt: 'Close-up of a dark snake head with its forked tongue extended' }
    ];
    all.forEach((p) => { p.mail = insta; });
    const count = (cat) => all.filter((p) => p.cat === cat).length;
    const tiles = [
      { label: 'BIRDS', cat: 'Birds', src: 'images/common-kingfisher.jpg', pos: '50% 60%', alt: 'A common kingfisher perched on a bare twig' },
      { label: 'WILDLIFE', cat: 'Wildlife', src: 'images/tiger-closeup.jpg', pos: '60% 40%', alt: 'Close-up of a tiger’s face' },
      { label: 'REPTILES AND AMPHIBIANS', cat: 'Reptiles and amphibians', src: 'images/green-vine-snake.jpg', pos: '40% 50%', alt: 'A green vine snake with its tongue out' },
      { label: 'MACRO', cat: 'Macro', src: 'images/striped-caterpillar.jpg', pos: '45% 50%', alt: 'A striped caterpillar on a twig' }
    ].map((t) => ({ ...t, count: count(t.cat) }));
    const strip = [
      { title: 'Spotted owlets', src: 'images/spotted-owlets.jpg' },
      { title: 'Indian peafowl', src: 'images/peacock.jpg' },
      { title: 'Tiger', src: 'images/tiger-closeup.jpg' },
      { title: 'Pied kingfisher', src: 'images/pied-kingfisher.jpg' },
      { title: 'Tricolored munia', src: 'images/tricolored-munia.jpg' }
    ];
    const items = current === 'All' ? all : all.filter((p) => p.cat === current);
    const labels = ['All', 'Birds', 'Wildlife', 'Reptiles and amphibians', 'Macro'];
    const filters = labels.map((label) => {
      const on = label === current;
      return {
        label: label.toUpperCase(),
        value: label,
        pressed: on,
        bg: on ? '#111111' : 'transparent',
        fg: on ? '#ffffff' : '#111111',
        bd: on ? '#111111' : '#c9c5b8'
      };
    });
    return { items: items, filters: filters, tiles: tiles, strip: strip, shown: items.length, total: all.length };
  }

  function lookup(ctx, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? '' : o[k]; }, ctx);
  }

  function fill(tpl, key, val) {
    var ctx = {}; ctx[key] = val;
    return tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (m, p) { return lookup(ctx, p); });
  }

  function render() {
    var data = build();
    document.querySelectorAll('template[data-list]').forEach(function (tpl) {
      (tpl._nodes || []).forEach(function (n) { n.remove(); });
      var key = tpl.getAttribute('data-as');
      var html = (data[tpl.getAttribute('data-list')] || []).map(function (v) { return fill(tpl.innerHTML, key, v); }).join('');
      var holder = document.createElement('template');
      holder.innerHTML = html;
      tpl._nodes = Array.prototype.slice.call(holder.content.childNodes);
      tpl.parentNode.insertBefore(holder.content, tpl);
    });
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      el.textContent = data[el.getAttribute('data-bind')];
    });
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-filter]');
    if (!el) return;
    state.filter = el.getAttribute('data-filter');
    render();
  });

  render();
})();
