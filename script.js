const countries = [
    {
        id: '1',
        country: 'Georgia'
    },

    {
        id: '2',
        country: 'USA'
    }
];

const ul = document.getElementById('countries');
const btn = document.getElementById('btn');
const inpt = document.getElementById('inpt');
var id = 3


btn.addEventListener('click',()=>{
    removeAllCountries();
    countries.push({
        id: id,
        country:inpt.value
    });
    id++;
    renderCountries();
    inpt.value = '';
})

function addCountry(obj){
    let li = document.createElement('li');
    li.innerHTML = obj.country +' <b> ID: <b/>' + obj.id;
    ul.appendChild(li);

    let but = document.createElement('button');
    but.addEventListener('click',()=>{

        let index = countries.indexOf(countries.find(c => c.id == obj.id))
        countries.splice(index,1)        
        removeAllCountries();
        renderCountries();

    })
    but.innerHTML = 'delete';
    li.appendChild(but);

}

function removeAllCountries(){
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}

function renderCountries(){
    countries.forEach(c => addCountry(c));
}

renderCountries();