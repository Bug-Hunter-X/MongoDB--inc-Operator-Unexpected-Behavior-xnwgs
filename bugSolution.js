```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{count:-1}});
//Alternative for preventing the error in case the field does not exist
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{count:-1}},{upsert:true});
```