use("myDb");
console.log(db);
//Create Collection
db.createCollection("myCollection");
//Insert One
db.myCollection.insertOne({ name: "Dharmesh ", age: 20, city: "Jhansi", projects: 45 });

const dummyData = [
    { name: "John", age: 25, city: "New York", projects: 30 },
    { name: "Alice", age: 22, city: "Los Angeles", projects: 20 },
    { name: "Bob", age: 30, city: "Chicago", projects: 15 },
    { name: "Emma", age: 28, city: "San Francisco", projects: 40 },
    { name: "David", age: 24, city: "Seattle", projects: 25 },
    { name: "Sophia", age: 27, city: "Miami", projects: 35 },
    { name: "Michael", age: 26, city: "Dallas", projects: 18 },
    { name: "Olivia", age: 23, city: "Houston", projects: 22 },
    { name: "Ethan", age: 29, city: "Atlanta", projects: 28 },
    { name: "Ava", age: 21, city: "Denver", projects: 32 }
  ];

//Insert Many
  db.myCollection.insertMany(dummyData);  
  
  
  //Read
let a= db.myCollection.find({age:21});
console.log(a.toArray());
//Update
db.myCollection.updateMany({name:"Dharmesh "},{$set:{age:21}});
db.myCollection.updateMany({name:"Alice "},{$set:{age:21}});
db.myCollection.updateMany({name:"Jhon "},{$set:{age:21}});
db.myCollection.updateMany({name:"Emma"},{$set:{age:21}});
// db.myCollection.updateOne({name:"Jhon "},{$set:{age:221}});

//Delete
// how can we clear whole collection
db.myCollection.deleteMany({name:"Alice"});
// how can we clear whole collection
db.myCollection.deleteMany({age :21});