const square = (x)=>{
    return x*x;
}

// for a single task handeling

const square_short = (x) => x*x;

// using a method into a object
// binds their own this value
// output of the following block "Eid Mubarak! it's Eid day!"
const event = {
    name: 'Eid day!',
    printTheme: function(){
        console.log("Eid Mubarak! it's "+ this.name); // has access to it's own property. 
    }
}
event.printTheme();

// not well suited for methods
// doesn't bind their this value
// output of the following block "Eid Mubarak! it's undefined"
const event_2 = {
    name: 'Eid day!',
    printTheme: ()=>{
        console.log("Eid Mubarak! it's "+ this.name); // no access to it's own property. 
    }
}
event_2.printTheme();

// alternate and shortcut to setting up methods on object (ES6)
const event_3 = {
    name: 'Eid day!',
    invited: ['Muna', 'tasnim', 'adon'],
    printTheme(){
        // function carries their own this binding
        const that =  this; // now it's method  can access the this of it's parent
        console.log("Eid Mubarak! it's "+ this.name); // no access to it's own property. 
        this.invited.forEach(function(guest) {
            console.log(guest, " ", that.name); 
        });
    }
}
event_3.printTheme();