const Client = require('pg').Client

const config = {
    connectionString:'postgres://lcfzzdeinrrwkl:6e8664ce05934bfc27fddc7ee750f486f7a60f20461b57f1b6b86b2fbc5d2c22@ec2-44-198-223-154.compute-1.amazonaws.com:5432/dftbojr4nq8slm',
    ssl: { rejectUnauthorized: false }
}

const client = new Client(config)

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('ERRO NA COssNEXÃO: ', err.stack))
 

module.exports = client