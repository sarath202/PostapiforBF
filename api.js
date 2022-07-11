const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());




app.post('/api/challenge',(req,res)=>{
const{error}=validatechallenge(req.body);
if(error){
  res.status(400).send(result.error.details[0].message);
  return;
}
  const challenge ={
  id:challenge.length+1,
  name:req.body.name ;
  status:True,False ;
  Count: i+string(i) ;
  Email ID : email ;
  College Roll : roll Number;
  };
  challenge.push(challenge);
  res.send(challenge);
});




function validatechallenge(challenge){
  const schema ={
    name:Joi.string().min(3).required()
  };
  return Joi.validate(challenge,schema);
}




const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening on port ${port}...'));
