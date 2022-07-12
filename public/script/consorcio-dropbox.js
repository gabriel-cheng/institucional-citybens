const dropbox = document.querySelector('#input-drop');
const droplist = document.querySelector('.dropDown');
const dropItem = document.querySelector('.item');
const arrows = document.querySelector('.arrow');

// Events
(function() {
    function includeEvent(item, event, display) {
        item.addEventListener(event, () => {
            droplist.style = `display: ${display} !important`;
        });
    }

    includeEvent(dropbox, 'focus', 'block');
    includeEvent(dropbox, 'blur', 'none');
    includeEvent(arrows, 'focus', 'block');
    includeEvent(arrows, 'blur', 'none');
})();