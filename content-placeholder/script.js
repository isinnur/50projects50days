const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const names = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated_bg_text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = ' <img src="img/foti1.jpeg" alt="" id="header">';
    title.innerHTML = '  Lorem, ipsum dolor.';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aliquid, beatae quidem neque quasi voluptates ? ';
    profile_img.innerHTML = '<img src="img/foti2.jpeg" alt="">';
    names.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}