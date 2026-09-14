// Put your application javascript here
document.querySelectorAll('.anchor-to-top').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#main-buy-sec');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});