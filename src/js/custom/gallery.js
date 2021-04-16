;(function () {

    if(document.querySelector('.licenses--page')) {

        const minimizedImg = document.querySelectorAll('.minimized');
        const body = document.getElementsByTagName('body')[0];
        let html = body.parentNode;
        let out = '';
        let div = document.createElement('div');
            div.classList.add('overlay');

        minimizedImg.forEach(el => {
            el.addEventListener('click', () => {
                let path = el.getAttribute('src');
                out += '<div class="magnify"><img src="'+ path +'"></div>';
                div.innerHTML = out;
                body.appendChild(div);
                body.classList.add('no-scroll');
                html.classList.add('html-overflow');
                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); // Определяем текущее расстояние от верха страницы
                body.style.position = 'fixed'; // Фиксируем боди на текущем расстоянии от верха страницы
                body.style.top = `-${scrollY}`;
            });
        });

        function imgHide() {
            out = '';
            body.removeChild(div);
            body.classList.remove('no-scroll');
            html.classList.remove('html-overflow');
            const scrollY = body.style.top; // Восстанавливаем расположение ползунка прокрутки
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        window.addEventListener('scroll', () => { // Отслеживаем текущее расстояние от верха страницы
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        });

        window.addEventListener('click', (e) => {
            console.log(e.target);

            if (e.target.closest('.magnify img')) {
                e.stopPropagation();
            } else if (e.target.closest('.overlay')) {
                imgHide();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                if(document.querySelector('.magnify')) {
                    imgHide();
                }
            }
        }); 
    }

})();
