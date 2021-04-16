
"use strict";
;
// (function () {

// полифилл CustomEven для IE11
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window.CustomEvent = CustomEvent;
})();

function $modal(options) {
    var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createModal(options) {
        var
            elemModal = document.createElement('div'),
            //  data-dismiss="modal"
            modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div>',
            modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
            modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modalHTML,
            modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
        modalHTML = modalHTML.replace('{{content}}', options.content || '');
        if (options.footerButtons) {
            for (var i = 0, length = options.footerButtons.length; i < length; i++) {
                var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
                modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
                modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
                modalFooterHTML += modalFooterButton;
            }
            modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
        }
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
    }

    function _showModal() {
        if (!_destroyed && !_hiding) {
            _elemModal.classList.add('modal__show');
            document.dispatchEvent(_eventShowModal);
        }
    }

    function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
            _elemModal.classList.remove('modal__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
    }

    function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
            _hideModal();
        }
    }
    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            _hideModal();
        }
    });
    _elemModal = _createModal(options || {});


    _elemModal.addEventListener('click', _handlerCloseModal);
    _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
    _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

    return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
            _elemModal.parentElement.removeChild(_elemModal),
                _elemModal.removeEventListener('click', _handlerCloseModal),
                destroyed = true;
        },
        setContent: function (html) {
            _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        }
    }
};

(function () {
    // создадим модальное окно 1
    var modal1 = $modal({

        content: '<form action="#">\
        <label>\
          <input class="_req" type="text" placeholder="Поиск">\
        </label>\
        <button class="button btn-send"></button>\
      </form>'

    });

    // при клике по кнопке #show-modal-1

    document.addEventListener('click', function (e) {
        if (e.target.dataset.toggle === 'form') {
            // отобразим модальное окно N1
            modal1.show();
        }
    });
    // var btns = document.querySelectorAll('.btn');
    // let panel = document.getElementsByTagName('body')[0];
    // btns.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         panel.classList.add('oh');
    //     });
    // });
    // window.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('modal__btn-close')) {
    //         panel.classList.remove('oh');
    //     }
    // });
    // window.addEventListener('click', (e) => {
    //     if (e.target.dataset.dismiss === 'modal') {// этот кусок кода
    //         panel.classList.remove('oh');
    //     }
    // });
    // window.addEventListener('keydown', (e) => {
    //     if (e.code === "Escape") {
    //         panel.classList.remove('oh');
    //     }
    // });
})();


// })();
"use strict";
;
"use strict";
;
(function () {
    let panel = document.querySelector('html');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('oh');
    });

})();


