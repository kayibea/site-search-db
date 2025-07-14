"use strict";
const urls = document.querySelectorAll('div.info div.url');
const select = document.getElementById('engine');
const exportBtn = document.getElementById('export');
const filter = document.getElementById('filter');
let selectedEngine = select.firstChild;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateUrl(entry.target, selectedEngine);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}
function updateUrl(url, engine) {
    const uri = engine.getAttribute('data-uri');
    const contents = url.textContent?.split('%s');
    url.textContent = `${uri}%s${contents[1]}`;
}
urls.forEach(url => observer.observe(url));
select.addEventListener('change', e => {
    const select = e.target;
    selectedEngine = select.options[select.selectedIndex];
    urls.forEach(url => {
        if (isInViewport(url))
            updateUrl(url, selectedEngine);
    });
});
// console.log(urls[0].parentNode?.parentNode);
// TODO: Implement this
// filter.addEventListener('change', e => {
//   const filterVal = filter.value.toLowerCase();
//   //
// });
// TODO: Implement this
exportBtn.addEventListener('click', e => {
    window.alert('To be implemented !');
});
