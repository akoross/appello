//-----burger-----

const burger = () => {
  const menuIcon = document.querySelector('#menu-icon');
  if (iconMenu) {
    const menuBody = document.querySelector('#menu-body');
    menuIcon.addEventListener('click', () => {
      document.body.classList.toggle('_lock');
      menuIcon.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
};

//---- ПРокрутка при клике -----

export default berger;
