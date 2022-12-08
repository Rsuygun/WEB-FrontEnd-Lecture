let value;

//Şu anki zamanı almamızı sağlar
const now = new Date();

const date1 = new Date("12-23-1999 07:12:34");

const date2 = new Date("November 23 1999");

const date3 = new Date("12/23/1999");

value = date1;

//Belirlenen değerleri göstermek için "get" kullanılır.
value = date1.getMonth(); 
value = date1.getDate(); 
value = date1.getDay(); 


value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

//Belirlenen değerleri değiştirmek için "set" kullanılır.
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1995);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);



value = date1;





console.log(value);