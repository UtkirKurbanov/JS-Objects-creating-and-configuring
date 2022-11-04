var ford = Object.create({
    calculateDistancePerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: false,
            writable: false,
            configurable: false
        });
        //age
        // console.log('Calculate', 2022 - this.year);
    }
}, {
    name: {value: 'Ford',
    enumerable: true,
    writable:false,
    configurable: false,
},
    model: {value: 'Focus',
    enumerable:true,
    writable: false,
    configurable: false,
},
    year: {value: 2015,
    enumerable:true,
    configurable: false,
},
    distance: {value: 120500,
    enumerable: true,
    writable: true,
    configurable: false,
},
age: {
    enumerable: true,
    get: function() {
        console.log('Get the age.');
        return new Date().getFullYear() - this.year;
    },
    set: function() {
        console.log('Setting the value');
    }
}
});

ford.calculateDistancePerYear();

// for(var key in ford) {
//     console.log(key);
// }

for(var key in ford) {
    if(ford.hasOwnProperty(key)) {
        console.log(key, ford[key]);
    }
    
}