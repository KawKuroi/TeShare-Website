       
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const CArticle = document.getElementById('CArticle');

        moon.addEventListener('click',function(){
            CArticle.classList.add('night');
        });

        sun.addEventListener('click',function(){
            CArticle.classList.remove('night');
        });

        

