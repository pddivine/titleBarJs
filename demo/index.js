document.addEventListener('DOMContentLoaded', main);

function main () {
  titlebarJs.init({
    isTop: true,
    id: 'titlebar',
    triggerId: 'body'
  });
  titlebarJs.init({
    id: 'titlebarbottom',
    isTop: false
  });
}