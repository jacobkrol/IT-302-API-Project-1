# IT 302: API Project 1

This project seeks to serve as a platform for understanding the development of basic data-delivery through a RESTful API. The API is built onto an Express server on the free online platform Codio. Relevant languages and software include Express server development, built on Node.js, and uses a MySQL database to hold data. Repl.it was additionally used as an external page for *put* and *post* HTTP requests to the API, while Codio is able to host *get* requests on its own server.

**Project Dates:** Fall 2019

**Professor:** David Hayes

## API Documentation

### World Database

The world database is comprised of 4 tables.

|Tables |
|:--
|city
|comment
|country
|countrylanguage

The `comment` table was created to test *put* and *post* HTTP requests, while the `city` `country` and `countrylanguage` tables came as defaults. The `world` database is made from sample data, available for download on [MySQL's website](https://dev.mysql.com/doc/index-other.html). Find details for each inner table below.

#### City

|Field|Type|Null|Key|Default|Extra
|:--|:--|:--|:--|:--|:--
|ID|int(11)|NO|PRI|NULL|auto_increment
|Name|char(35)|NO| | |
|CountryCode|char(3)|NO|MUL| |
|District|char(20)|NO| | |
|Population|int(11)|NO| |0|

#### Comment

|Field|Type|Null|Key|Default|Extra
|:--|:--|:--|:--|:--|:--
|ID|int(11)|NO|PRI|NULL|auto_increment
|Comment|char(35)|YES| | |
|isDeleted|char(3)|NO| |0|

#### Country

|Field|Type|Null|Key|Default|Extra
|:--|:--|:--|:--|:--|:--
|Code|char(3)|NO|PRI| |
|Name|char(52)|NO| | |
|Continent|enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America')|NO| |Asia|
|Region|char(26)|NO| | |
|SurfaceArea|float(10,2)|NO| |0.00|
|IndepYear|smallint(6)|YES| |NULL|
|Population|int(11)|NO| |0|
|LifeExpectancy|float(3,1)|YES| |NULL|
|GNP|float(10,2)|YES| |NULL|
|GNPOld|float(10,2)|YES| |NULL|
|LocalName|char(45)|NO| | |
|GovernmentForm|char(45)|NO| | |
|HeadOfState|char(60)|YES| |NULL|
|Capital|int(11)|YES| |NULL|
|Code2|char(2)|NO| | |

#### CountryLanguage

|Field|Type|Null|Key|Default|Extra
|:--|:--|:--|:--|:--|:--
|CountryCode|char(3)|NO|PRI| |
|Language|char(30)|NO|PRI| |
|IsOfficial|enum('T','F')|NO| |F|
|Percentage|float(4,1)|NO| |0.0|

### Paths

*All data is served as a JSON file sent as a response to the page.*

---

```
.../countries
```

The countries page returns the complete data on each country in the `world` database's `country` table.

---

```
.../countries/\<id\>
```

Returns all column data for the country ID provided.

---

```
.../cities
```

The cities page returns the complete data on each city in the `world` database's `city` table.

---

```
.../cities/\<id\>
```

Returns all column data for the city ID provided.

---

```
.../cities/\<id\>/country
```

Returns all column data for the housing country of the city ID provided.

---

```
.../languages
```

The languages page returns the complete data on each language in the `world` database's `countrylanguage` table.

---

For questions, updates, or other inquiries, please post on this repository or reach out to me at JacobSKrol@gmail.com
