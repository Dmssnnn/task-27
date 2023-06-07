//25 
// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
for( let i = 0; i < 100; i++) {
    console.log(i);
}

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i

let a = 0;
while ( a < 50) {
    console.log(a)
    a++;
}

// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ 
// სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა.
//  ისე როგორც ლექციაზე გავაკეთეთ.


const myMassive = [ " gio", " shota", " lela" , " ana "];
console.log(myMassive);
myMassive.push(" alika ")
console.log(myMassive);
myMassive.pop();
console.log(myMassive);
myMassive.shift();
console.log(myMassive);
myMassive.unshift(" dmssnnn ");
console.log(myMassive);

// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 -
//  მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია

                                                // const mySecondMassive = [];
                                                // for( let i = 0 ; i  < 10000; i++ ) {
                                                //     mySecondMassive.push(i * i);
                                                //     console.log(mySecondMassive);
                                                // }
//5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი

const getSumOfMassive = [ 1 , 2 , 3 , 4 , 5 ];
let sum = 0;
for(let i = 0; i < getSumOfMassive.length ; i++ ) {
     sum = sum + getSumOfMassive[i];
}
console.log(sum);

//6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.

const getOddAndEven = (number) => {
    if( number === 2 ){
        return true;
    }else return false;
}
console.log(getOddAndEven (1));

//7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს

const getNameByLowerCase = ( name ) => {
    return name.toLowerCase( name );
}
console.log(getNameByLowerCase( " GELA " ));

const numbersMassive = [ 2 , 4, 7 ,9];
const filteredNumbers = (numbersMassive) => {
    const result = numbersMassive.filter((numbersMassive) => numbersMassive % 2 === 0 )
    console.log(result);
}
filteredNumbers(numbersMassive)




// 26 


// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს 
// და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს

const integer = (number) => {
    if( number % 3 === 0 ){
        return true;
    }else return false;
}
console.log(integer(6));

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს
//  (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) 
//  თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

const getCurrencySymbolFromCode = (currency) => {
    if ( currency === "GEL") {
        return "ლ";
    }else if ( currency === " EUR "){
        return "€";
    }else if ( currency === " USD ") {
        return "$";
    }else " mesiji mogivida "
}
console.log(getCurrencySymbolFromCode(" USD "));


// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.



const getNameFromLowerCaseToUpperCase = ( name ) => {
    return name.toUpperCase();
}
console.log(getNameFromLowerCaseToUpperCase(" dititi "));

//4 დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.


const getProfit = (sellPrice , buyPrice ) => {
    const profit = sellPrice - buyPrice;
    const percentage = ( profit / buyPrice) * 100;
    return { profit , percentage};
    };
console.log(getProfit(300,200));


//5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
const  massiveOfNumbers =  [2 ,3 ,4 ,5];
const getFilterOfMassive = (massiveOfNumbers) => {
    const result = massiveOfNumbers.filter((massiveOfNumbers) => massiveOfNumbers % 2 === 0)
    console.log(result);
}
getFilterOfMassive(massiveOfNumbers);



//6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი
const massiveOfObjects = [
    {
        name : " diti ",
        age : 19,
    },
    {
        name : " gio ",
        age : 17,
    },
    {
        name : " nika ",
        age : 21,
    },

]
const getFindAnObject = ( massiveOfObjects) => {
    const findPersonByName = massiveOfObjects.find((name)=> name.age === 17 )
    return findPersonByName;
}
console.log(getFindAnObject(massiveOfObjects));




//27


  // 4.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს.
    // ფუნქციას არგუმენტად გადაეცით  მასივი - productData და დათვალეთ გადაცემული მასივში amount ის ჯამი
    // const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] 
    // დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში
    
    let sumOfPoductData = 0;
    const findSum = (productData) => {
        for( let i = 0 ; i < productData.length; i++);
        sumOfPoductData = sumOfPoductData + productData[i];
        return sumOfPoductData;
    }

    const productData = [
        {
            product_id: 1, amount: 200
        },
        {
            product_id: 2, amount: 300
        },
        {
            product_id: 3, amount:500
        }
    ]