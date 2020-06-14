var buf = Buffer.alloc(10);
buf.write("Aditya");
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

var buf2 = Buffer.from("Atharva");
console.log(buf2);