
export default function About()
{
    const aboutDiv = document.createElement('div')
    const aboutUs = document.createElement('h1');
    const phone = document.createElement('h2');
    const address = document.createElement('h2');
    aboutDiv.classList.add('about');
    aboutUs.textContent = 'About us';
    phone.textContent = 'Phone number: +2044-2344-322-4444';
    address.textContent = 'Address: 35 Somewhere st. Earth, close to Mars';
    aboutDiv.append(aboutUs);
    aboutDiv.append(phone);
    aboutDiv.append(address);

    document.getElementById('content').append(aboutDiv);
}