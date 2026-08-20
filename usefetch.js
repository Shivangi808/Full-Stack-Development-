const div=document.getElementById('container')
const button=document.getElementById('btn')
console.log(div);
async function display(){
//div.innerHTML='<h2>Hello using DOM</h2>';
const serverdata=await fetch('https://fakestoreapi.com/products');
            const jsonData=await serverdata.json();
            console.log(serverdata);
            console.log(jsonData[1].title);

}
button.addEventListener('click',display);