const dropbox = document.querySelector('#input-drop');
const droplist = document.querySelector('.dropDown');
const arrows = document.querySelector('#paranaue');

// Events
(function() {
    function includeEvent(item, event, display) {
        item.addEventListener(event, () => {
            droplist.style = `display: ${display} !important`;
        });
    }

    includeEvent(dropbox, 'focus', 'block');
    includeEvent(dropbox, 'blur', 'none');
})();