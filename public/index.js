let toggled = false;
const toggledOnClassName = document.getElementById('share-button').className;
const toggledOffClassName = toggledOnClassName.replace('hidden', 'grid');

const toggle = () => {
  if (!toggled) {
    document.getElementById('share-button').className = toggledOffClassName;
    toggled = true;
    return;
  }
  document.getElementById('share-button').className = toggledOnClassName;
  toggled = false;
};
