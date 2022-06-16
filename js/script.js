$('.intro__features').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
});

$('.aims__aims').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
});

$('.news__news').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToScroll: 1
            }
        }
    ]
})

$('.burger').on('click', () => {
    $('.burger').toggleClass('active');
    $('.header__navigation').toggleClass('active');
    $('.header__contacts').toggleClass('active');
})

$('.documents__show').on('click', event => {
    event.preventDefault();
    $('.documents__document').addClass('active');
    $('.documents__show').addClass('active')
})


const tabBtns = document.querySelectorAll('.tab__btns button');
tabBtns.forEach(function(item) {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data--tab');
        let currentTab = document.querySelector(tabId);
        document.querySelectorAll('.tab').forEach(function(item) {
            item.classList.remove('active')
        })
        currentTab.classList.add('active');

        tabBtns.forEach(function(button) {
            button.classList.remove('active')
        })

        currentBtn.classList.add('active')
    })
})
