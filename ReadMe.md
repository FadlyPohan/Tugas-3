# Tugas 3 challenge data type

## 01-random-integer.

function randomInteger(min, max) {
if (min == null || max == null) {
return 0;
} else if (max === 0) {
max = min;
min = 0;
return Math.floor(Math.random() _ (max - min + 1)) + min;
} else {
return Math.round(Math.random() _ (max - min + 1)) + min;
}
}

console.log(randomInteger(20, 1));
console.log(randomInteger(null, null));
console.log(randomInteger(1, 10));
console.log(randomInteger(6));
console.log(randomInteger());

### penjelasan

disini saya membuat function dengan nama randomInteger dan min dan max sebagai parameter nya
fungsi if ialah untuk memeriksa nilai kedua parameter telah diberikan nilai atau tidak. jika tidak maka fungsi akan mengembalikan nol, dan jika max yang tidak diberikan nilai maka nilai nol akan dikembalikan, dan jika max diberikan nilai maka nilai min akan digunakan sebagai yang nilai yang terbesar.

## Screenshots

![App Screenshot](<./img/Screenshot%20(1).png>)

## 02-choose-your-decimal

function decimal(n, d) {
return n.toFixed(d);
}

### penjelasan

disini saya membuat function dengan nama decimal dan memiliki 2 parameter yaitu n dan d yabg dimna n dapat berupa angka dan string dan d adalah jumlah desimal yang ingin dibulatkan.
dan saya menggunakan method toFixed untuk membulatkan angka d menjadi desimal dan mengembalikan hasilnya menjadi string

## Screenshots

![App Screenshot](</img/Screenshot%20(2).png>)

## -is-it-numeric

function numeric(input) {
if (typeof input === 'number' && !isNaN(input)) {
return true;
} else if (typeof input === 'string' && !isNaN(input) && input.trim() !== '') {
return true;
} else {
return false;
}
}

console.log(numeric(12));
console.log(numeric('abcd'));
console.log(numeric('12'));
console.log(numeric(' '));
console.log(numeric(1.2));
console.log(numeric(-200));

### penjelasan

disini saya memiliki function numericyang mempunyai satu parameter yaitu input dan mengembalikan nilai true jika input tersebut adalah nilai numeric dan false jika tidak.
jika input bertipe data number dan bekan NaN akan mengembalikan true, namun jika input data bernilai string maka fungsi isNaN() akan mengecek nilai, akan mengembalikan true jika bukan merupakan nilai numeric, dan jika input string kosong maka fungsi memeriksa apakah input tidak kosong dengan menggunakan method trim().
dan jika input tidak memenuhi kedua kondisitersbut, maka fungsi akan mengembalikan false

## Screenshots

![App Screenshot](</img/Screenshot%20(3).png>)

## 04-make-integer-round-up

function kelipatan(num) {
return Math.ceil(num / 5) \* 5;
}

console.log(kelipatan(32));
console.log(kelipatan(137));
console.log(kelipatan(142));

### penjelasan

disini saya menggunakan Function kelipatan(num) digunakan untuk membulatkan bilangan num ke atas ke kelipatan 5 terdekat.dengan cara membagi bilangan num dengan membulatkan menggunakan Math.ceil kemudian hasilnya dikalikan 5.

## Screenshots

![App Screenshot](</img/Screenshot%20(4).png>)
