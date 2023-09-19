// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    }
    let address1 = new Address1('a', 'b','c');
    let address2 = new Address2('a', 'b','c');
    let address3=address2;
//areSame Function
function areSame (address, address2) {
    return address1 === address2;
    }
    
    //areEqual Function 
    function areEqual (address, address2){
    return address1.street===address2.street && address1.city===address2.city && address1.zipCode===address2.zipCode
    }
    console.log(areSame(address1,address2)); 
console.log(areEqual(address1,address2)); 
console.log(areSame(address2,address3)); 

//exo4 
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments:[
    { author: 'a', body: 'b' },
    { author: 'c', body: 'd' 3,
    ],
    isLive: true
    };
    console. log (post) ;

    //exo 5 
    Let priceRanges =
[
{ label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
{ label: '$$' , tooltip: 'Moderate', minerPerson: 11, maxPerPerson: 20 },
{ label: '$$$' tooltip: 'Expensive', minerPerson: 21, maxPerPerson: 50 },
];


    