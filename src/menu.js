
const data = [
    {
        name: 'فول',
        img:'../assets/ful.jpg'
    },
    {
        name: 'طعمية',
        img:'../assets/flafel.png'
    },
    {
        name: 'كشري',
        img:'../assets/kushari.jpg'
    },
    {
        name: 'ملوخية',
        img:'../assets/molokhia.jpg'
    },
    {
        name: 'حواوشي',
        img:'../assets/hawawshi.png'
    },
    {
        name: 'حواوشي',
        img:'../assets/hawawshi.png'
    },
    {
        name: 'فول',
        img:'../assets/ful.jpg'
    },
    {
        name: 'طعمية',
        img:'../assets/flafel.png'
    },
    {
        name: 'كشري',
        img:'../assets/kushari.jpg'
    },
    {
        name: 'ملوخية',
        img:'../assets/molokhia.jpg'
    },

]
export default function Menu()
{
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    data.forEach((item)=>{
        const itemDiv = document.createElement('div');
        const img = document.createElement('img');
        const text = document.createElement('h1');
        const buy = document.createElement('button');
        img.src = item.img;
        img.classList.add('menu--img');
        text.textContent = item.name;
        buy.textContent = 'Add to cart';
        buy.classList.add('buy');
        itemDiv.append(text);
        itemDiv.append(img);
        itemDiv.append(buy);
        itemDiv.classList.add('menu-item', 'animate__animated','animate__zoomIn')
        itemDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.remove('animate__animated','animate__zoomIn');
            e.target.classList.add('animate__animated','animate__pulse');
        })
        itemDiv.addEventListener('animationend',(e)=>{
            e.target.classList.remove('animate__animated','animate__pulse');
        })
        menuDiv.append(itemDiv);
    })
    document.getElementById('content').append(menuDiv);
}
