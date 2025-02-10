```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{count:-1}});
```