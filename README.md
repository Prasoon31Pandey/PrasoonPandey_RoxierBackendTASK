

### Roxiler System Assessment Backend ###

Backend Task
Data Source
THIRD PARTY API URL : https://s3.amazonaws.com/roxiler.com/product_transaction.json
REQUEST METHOD : GET
RESPONSE FORMAT : JSON

<hr/>

GET
Create API to initialize the database. fetch the JSON from the third party API and
initialize the database with seed data. You are free to define your own efficient table /
collection structure

Instruction
All the APIs below should take month ( expected value is any month between
January to December) as an input and should be matched against the field
dateOfSale regardless of the year.


GET
Create an API to list the all transactions
- API should support search and pagination on product transactions
- Based on the value of search parameters, it should match search text on product
title/description/price and based on matching result it should return the product
transactions
- If search parameter is empty then based on applied pagination it should return all the
records of that page number
- Default pagination values will be like page = 1, per page = 10

GET
Create an API for statistics
- Total sale amount of selected month
- Total number of sold items of selected month
- Total number of not sold items of selected month

GET
Create an API for bar chart ( the response should contain price range and the number
of items in that range for the selected month regardless of the year )
- 0 - 100
- 101 - 200
- 201-300
- 301-400
- 401-500
- 501 - 600
- 601-700
- 701-800
- 801-900
- 901-above

GET
Create an API for pie chart Find unique categories and number of items from that
category for the selected month regardless of the year.
For example :
- X category : 20 (items)
- Y category : 5 (items)
- Z category : 3 (items)

GET
Create an API which fetches the data from all the 3 APIs mentioned above, combines
the response and sends a final response of the combined JSON

Frontend Task

By using above created apis, create the following table and charts on single page.
Follow the given mockups and you can implement your own design to change the
look and feel
Transctions Table

- Here use your transactions listing api to list transactions in the table
- Select month dropdown should display Jan to Dec months as an options
- By default March month should be selected
- Table should list the transactions of the selected month irrespective of the
year using API
- Search transaction box should take an input and if search text is matching
with anyone of these title/description/price then those transactions of the
selected month should come in the list using API
- If user clear’s the search box then initial list of transactions should be
displayed for the selected month using API
- On click of Next it should load the next page data from API
- On click of Previous it should load the previous page data from API

Transctions Statistics (Use your created API to fetch the data)

- Here display total amount of sale, total sold items, and total not sold item
in the box for the selected month from the drop down (present above table)
using API

Transactions Bar Char (Use your created API to fetch the data)

- Chart should display the price range and the number of items in that range for
the selected month irrespective of the year using API
- Month selected from dropdown (above the table) should be applied here



https://github.com/Prasoon31Pandey/PrasoonPandey_RoxierBackendTASK
# xmlbuilder-js

An XML builder for [node.js](https://nodejs.org/) similar to
[java-xmlbuilder](https://github.com/jmurty/java-xmlbuilder).

[![License](http://img.shields.io/npm/l/xmlbuilder.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![NPM Version](http://img.shields.io/npm/v/xmlbuilder.svg?style=flat-square)](https://npmjs.com/package/xmlbuilder)
[![NPM Downloads](https://img.shields.io/npm/dm/xmlbuilder.svg?style=flat-square)](https://npmjs.com/package/xmlbuilder)

[![Travis Build Status](http://img.shields.io/travis/oozcitak/xmlbuilder-js.svg?style=flat-square)](http://travis-ci.org/oozcitak/xmlbuilder-js)
[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/bf7odb20hj77isry?svg=true)](https://ci.appveyor.com/project/oozcitak/xmlbuilder-js)
[![Dev Dependency Status](http://img.shields.io/david/dev/oozcitak/xmlbuilder-js.svg?style=flat-square)](https://david-dm.org/oozcitak/xmlbuilder-js)
[![Code Coverage](https://img.shields.io/coveralls/oozcitak/xmlbuilder-js.svg?style=flat-square)](https://coveralls.io/github/oozcitak/xmlbuilder-js)

### Installation:

``` sh
npm install xmlbuilder
```

### Usage:

``` js
var builder = require('xmlbuilder');
var xml = builder.create('root')
  .ele('xmlbuilder')
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
  .end({ pretty: true});

console.log(xml);
```

will result in:

``` xml
<?xml version="1.0"?>
<root>
  <xmlbuilder>
    <repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
  </xmlbuilder>
</root>
```

It is also possible to convert objects into nodes:

``` js
builder.create({
  root: {
    xmlbuilder: {
      repo: {
        '@type': 'git', // attributes start with @
        '#text': 'git://github.com/oozcitak/xmlbuilder-js.git' // text node
      }
    }
  }
});
```

If you need to do some processing:

``` js
var root = builder.create('squares');
root.com('f(x) = x^2');
for(var i = 1; i <= 5; i++)
{
  var item = root.ele('data');
  item.att('x', i);
  item.att('y', i * i);
}
```

This will result in:

``` xml
<?xml version="1.0"?>
<squares>
  <!-- f(x) = x^2 -->
  <data x="1" y="1"/>
  <data x="2" y="4"/>
  <data x="3" y="9"/>
  <data x="4" y="16"/>
  <data x="5" y="25"/>
</squares>
```

See the [wiki](https://github.com/oozcitak/xmlbuilder-js/wiki) for details and [examples](https://github.com/oozcitak/xmlbuilder-js/wiki/Examples) for more complex examples.
