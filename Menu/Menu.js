/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
  */
let menuOpen = false;
let header = document.querySelector('.header');
let menuButton = document.querySelector('.menu-button');
let menuList = document.createElement('ul');
let menuContainer = document.createElement('div');

function createMenu(arr){
  menuContainer.classList.add('menu');
  
  arr.map(item => {
    let menuItem = document.createElement('li');
    menuItem.textContent = `${item}`;
    menuList.appendChild(menuItem);
  });
  
  // Rotates hamburger button and slides menu in from the left
  menuButton.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuButton.style.transform = `rotate(${menuOpen ? 90 : 0}deg)`;
    menuButton.style.transition = `transform .3s`;
    menuContainer.classList.toggle('menu--open');
  });

  // Shrinks hamburger button size when mouse clicking on it
  menuButton.addEventListener('mousedown', () => menuButton.style.transform = "scale(.90)");
  menuButton.addEventListener('mouseup', () => menuButton.style.transform = "scale(1)");
  
  menuContainer.appendChild(menuList);
  return menuContainer;
};

header.appendChild(createMenu(menuItems));

// If menu is open, clicking anywhere that is not the hamburger button will make 
// the menu close, and rotate the hamburger button back to default position
window.addEventListener('click', (e) => {
  if (e.target !== (menuButton)) {
    menuOpen = false;
    menuContainer.classList.remove('menu--open');
    menuButton.style.transform = `rotate(${menuOpen ? 90 : 0}deg)`;
  };
})