(function (global, libName = 'titlebarJs') {
  if (global.window === global) {
    // Handle browser
    if (global[libName] !== undefined) {
      return console.log(`"${libName}" is already taken in the global name space.`)
    }
    global[libName] = lib();
  } else {
    // Handle commonJS
    console.log('Common');
    module.exports = lib();
  }  
})(this);

function lib() {
  return {
    init: titleBarInit
  };
}

function titleBarInit (options = {}) {
  options.isTop = options.isTop === undefined ? true : options.isTop;
  options.id = options.id === undefined ? 'titlebar' : options.id;
  options.triggerId = options.triggerId === undefined ? 'body' : options.triggerId;

  const orientation = options.isTop ? ' top: 0px; transform: translateY(-100%);' : ' bottom: 0px; transform: translateY(100%);';
   createCssClass(options.id, 'position: fixed;  width: 100%;  transition: .2s all ease-in-out; ' + orientation);
   createCssClass('active', 'transform: translateY(0);' );

  const titleBar = document.getElementById(options.id);
  titleBar.classList.add(options.id);
  const titleBarTrigger = document.getElementsByTagName(options.triggerId)[0];

  window.addEventListener('scroll', () => {
    if (titleBarTrigger.getBoundingClientRect().top < 0) {
      titleBar.classList.add('active');
    } else {
      titleBar.classList.remove('active');
    }
  });
}

function createCssClass (className, definitions) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `.${className} { ${definitions} }`;
  document.getElementsByTagName('head')[0].appendChild(style);
}