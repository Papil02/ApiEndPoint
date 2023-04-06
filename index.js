let axios = require('axios')
const bodyParser = require('body-parser');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', (req, res) => {
console.log(req.body)
    
var dealOptions = { method: 'POST', url: 'https://api.hubapi.com/deals/v1/deal', 
headers: { 'Authorization': `Bearer ${'pat-na1-e0af0225-acee-4285-9e87-c06ae8a58f11'}`,'Content-Type': 'application/json' },
data: {properties: [ 
  { value: req.body.studentName, name: 'dealname' }, { value: 'appointmentscheduled', name: 'dealstage' }, { value: 'FSD LEAD AUTO DEMO', name: 'notes' }, { value: req.body.studentEmail, name: 'email' }, { value: 'default', name: 'pipeline' },{ value: '369201992', name: 'hubspot_owner_id' },{ value: req.body.studentMobile, name: 'phone' }, { value: 'newbusiness', name: 'dealtype' } 
] }};


axios(dealOptions).then(response=>{
console.log(response.data.dealId)
res.json({"dealId":response.data.dealId})
}).catch(err=>{
console.log(err)
// console.log(err.data)

})
    
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



