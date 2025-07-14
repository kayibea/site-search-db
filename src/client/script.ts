const urls = document.querySelectorAll('div.info div.url') as NodeListOf<HTMLDivElement>;
const select = document.getElementById('engine') as HTMLSelectElement;
const exportBtn = document.getElementById('export') as HTMLButtonElement;
const filter = document.getElementById('filter') as HTMLInputElement;

let selectedEngine = select.firstChild as HTMLOptionElement;

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      // TODO: Fix me
      // Check if the url already have been updated
      if (entry.isIntersecting) {
        updateUrl(entry.target, selectedEngine);
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function updateUrl(url: Element, engine: HTMLOptionElement) {
  const uri = engine.getAttribute('data-uri');
  const contents = url.textContent?.split('%s')!;
  url.textContent = `${uri}%s${contents[1]}`;
}

urls.forEach(url => observer.observe(url));

select.addEventListener('change', e => {
  const select = e.target as HTMLSelectElement;
  selectedEngine = select.options[select.selectedIndex];
  urls.forEach(url => {
    if (isInViewport(url)) updateUrl(url, selectedEngine);
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
