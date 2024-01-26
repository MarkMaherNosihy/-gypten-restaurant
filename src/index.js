import Menu from './menu'
import About from './about'

const root = document.getElementById("content");
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

homeBtn.addEventListener('click', switchTab);
menuBtn.addEventListener('click', switchTab);
aboutBtn.addEventListener('click', switchTab);

homeBtn.addEventListener('mouseenter', SelectTab);
menuBtn.addEventListener('mouseenter', SelectTab);
aboutBtn.addEventListener('mouseenter', SelectTab);

homeBtn.addEventListener('mouseleave', UnselectTab);
menuBtn.addEventListener('mouseleave', UnselectTab);
aboutBtn.addEventListener('mouseleave', UnselectTab);

function SelectTab(e)
{
    if(!e.target.classList.contains('hover'))
    {
        e.target.classList.add('hover');
    }
}

function UnselectTab(e)
{
        e.target.classList.remove('hover');
    
}

function switchTab(e)
{
    root.innerHTML = '';
    if(e.target.id === 'home')
    {
        Home();
        homeBtn.classList.add('selected');
        menuBtn.classList.remove('selected');
        aboutBtn.classList.remove('selected');
    }
    else if (e.target.id === 'menu')
    {
        Menu();
        menuBtn.classList.add('selected');
        homeBtn.classList.remove('selected');
        aboutBtn.classList.remove('selected');
    }
    else{
        About();
        aboutBtn.classList.add('selected');
        menuBtn.classList.remove('selected');
        homeBtn.classList.remove('selected');
    }
}



function Home()
{
    const homeDiv = document.createElement('div');
    const coverDiv = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const mainText = document.createElement('h1');
    const homeMenuBtn = document.createElement('button');
    const lorem = document.createElement('p');
    homeDiv.classList.add('home');
    mainText.textContent = 'WE COOK, YOU EAT, THATS IT';
    mainText.classList.add('hero--main-text');
    homeMenuBtn.classList.add('home-menu');
    homeMenuBtn.textContent = "Go to Menu";
    homeMenuBtn.addEventListener('click', ()=>{
        root.innerHTML = '';
        Menu();
        menuBtn.classList.add('selected');
        homeBtn.classList.remove('selected');
    });
    img1.src = "../assets/cover.jpg";
    img1.classList.add('hero--img');
    img2.src = "../assets/cover2.jpg";
    img2.classList.add('hero--img');
    img3.src = "../assets/cover3.jpg";
    img3.classList.add('hero--img');
    lorem.textContent = 'This is the best resturant I have ever gone to -Customer';
    coverDiv.classList.add('hero--container');
    coverDiv.append(img1);
    coverDiv.append(img2);
    coverDiv.append(img3);
    homeDiv.append(coverDiv);
    homeDiv.append(mainText);
    homeDiv.append(homeMenuBtn);

    root.append(homeDiv);
}
function App()
{
    Home();
}

App();