var soap = require('soap');
var url = 'http://localhost:3000/auth?wsdl';

module.exports = function (data, apiResponse, model) {
  soap.createClient(url, function(error, client){
    if (error) {
      console.log(error);
    }

    
  })
}
