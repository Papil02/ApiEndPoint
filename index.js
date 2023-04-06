let axios = require('axios')


const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {

    
var dealOptions = { method: 'POST', url: 'https://api.hubapi.com/deals/v1/deal', 
headers: { 'Authorization': `Bearer ${'pat-na1-e0af0225-acee-4285-9e87-c06ae8a58f11'}`,'Content-Type': 'application/json' },
data: {properties: [ 
  { value: 'student.name', name: 'dealname' }, { value: 'appointmentscheduled', name: 'dealstage' }, { value: 'FSD LEAD AUTO DEMO', name: 'notes' }, { value: 'student.email', name: 'email' }, { value: 'default', name: 'pipeline' },{ value: '369201992', name: 'hubspot_owner_id' },{ value: '918919964795', name: 'phone' }, { value: 'newbusiness', name: 'dealtype' } 
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



