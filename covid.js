// state -> districts -> total
//console.log(data['AP']['districts']['Guntur']['total']['confirmed'])
const fetch = require('node-fetch');

function api() {
    fetch("https://api.covid19india.org/v4/min/data.min.json")
        .then((res) => res.json())
        .then(data => {
            for (const [state, props] of Object.entries(data)) {
               const districts = props['districts'];
               let active = 0;
               for (const [total, val] of Object.entries(districts)) {
                   active+= val['total']['confirmed'] - (val['total']['deceased']+val['total']['recovered']);
               }
               console.log(state,active);
        }})
        .catch((err) => console.log(err));
}

api();
