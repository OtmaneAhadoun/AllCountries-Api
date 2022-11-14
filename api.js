const div=document.querySelector('body > div')
var a;
async function test(){
    const res=await fetch('https://restcountries.com/v3.1/all');
    const data=await res.json(250);
    a=data.map(e=>{
    div.innerHTML+=`
    <div class='box'>
    <h1>${e.name.common}</h1>
    <p>${e.capital?e.capital:'Done'}</p>
    <img src=${e.flags.png}></img>
    <div class='peaple'>
    <div class='group'>        
        <small>${e.population}</small>
        <i class="fa-solid fa-people-group"></i>
    </div>
    </div>
    </div>
`  
    })
const items=document.querySelectorAll('.box')
const observe=new IntersectionObserver((r)=>{
    r.forEach(e=>{
        e.target.classList.toggle('slide',e.isIntersecting)
        if(e.isIntersecting)
            observe.unobserve(e.target)
    })
})
items.forEach(e=>observe.observe(e))
}
test()

