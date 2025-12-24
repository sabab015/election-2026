const bn = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toBangla(n) {
    return n.toString().replace(/\d/g, d => bn[d]);
}

$(function () {
    $('.stat').each(function () {
        let el = $(this);
        let end = parseInt(el.data('value'));
        let cur = 0;
        let step = Math.ceil(end / 50);

        let timer = setInterval(() => {
            cur += step;
            if (cur >= end) {
                cur = end;
                clearInterval(timer);
            }
            el.text(toBangla(cur));
        }, 20);
    });
});
