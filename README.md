# Public RESTful APIs
## EE
| verb | url             | description         | params | payload | return data |
| ---- | --------------- | ------------------- | ------ | ------- | ----------- |
| POST | /transition/:id | get next transition |        | ``      | ``          |


# Technical stack
Generic stack:
* nodejs, typescript
* RESTful API hapi, swagger
* mongo, mongoose
* jest for testing, code coverage 90%
* winston for logging

Each service follow 3 layer architecture:
* Presentation layer:
  * Api: hapi
  * validation: joi
* Business layer:
* Data layer:
  * mongo, mongoose
  * data migration: migrate-mongo
  * testing: mongodb-memory-server

folder structure in each service
```
+-- src
|   +-- module.campaigns
|   |   +-- routes
|   |   +-- validations
|   |   +-- controllers
|   |   +-- services
|   |   +-- repositories
|   |   +-- models
```

# References
* 