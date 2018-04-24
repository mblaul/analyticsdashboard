# analyticsdashboard

This is a pet project to display various KPIs. The goal is to eventually have a platform that can connect to any SQL database and display information with relatively little configuration.

## Getting Started

### Prerequisites

This is a nodejs application so you will need to install that in order to run this.
You can install NodeJS/npm [here](https://nodejs.org/en/download/).

A SQL database is required in order to send data to the application. MySQL is recommended.
You can install MySQL [here](https://www.mysql.com/downloads/).

This project also utilizes sequelize to interact with the SQL database.
To install that run the following commands:
```
$ npm install --save sequelize

# And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
$ npm install --save tedious # MSSQL
```
Refer to the [sequelize](https://github.com/sequelize/sequelize) documentation for more information on the framework.

### Installing

Clone the repo to your local machine.
After cloning the repo navigate to the directory it is stored in.
Run the following command to set up the environment:

```
$ npm install
```

You will need to configure you SQL connection string.
Do so by editing the values in ./models/config.json


To test and make sure the app is working run:

```
$ node app
```

You should see:
```
Express app listening on port 3000
Executing (default): SELECT 1+1 AS result //test query
Connection has been established successfully. //successful connection to your database
```

And voila! You are now running the analyticsdashboard.


## Running the tests

No tests are currently implemented.

### Test breakdown
 TBD

## Deployment

Simply clone the repo to a machine.

## Built With

* nodejs
* express
* MySQL
* sequelize
* d3.js


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

TBD

## Authors

* **Matt Blaul** - *Lead Dev* - [mblaul](https://github.com/mblaul)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
