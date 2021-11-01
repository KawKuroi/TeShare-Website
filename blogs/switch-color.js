       
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const article = document.getElementById('article');

        moon.addEventListener('click',function(){
            article.classList.add('night');
        });

        sun.addEventListener('click',function(){
            article.classList.remove('night');
        });

        

