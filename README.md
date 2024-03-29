# Basic functions

This package is the implementation of allmost methods found in the [You don't (may not) need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)

## Usage

`npm install basic-func`

## Methods implemented

List with implemented methods.

### Array

- chunck
- compact
- difference
- flatten
- flattenDeep
- fromPairs
- intersection
- takeRight
- without

### Collection

- groupBy
- keyBy
- maxBy
- minBy
- sample
- sortBy
- uniq

### Function

- debounce
- partial
- throttle

### Lang

- isEmpty

### Number

- inRange
- random
- randomInt

### Object

- extend
- get
- omit
- pick
- pickBy

### String

- capitalize
- onlyNumbers
- upperFirst

## Methods not implemented

This methods are not implemented because they are implemented in native javascript and are easy to use without any lib.

### Array

- concat
- drop
- dropRight
- fill
- find
- findIndex
- first
- fromPairs
- head
- tail
- indexOf
- reverse
- slice

### Collection

- each
- every
- filter
- includes
- map
- pluck
- range
- reduce
- reduceRight
- size

### Function

- after
- bind

### Lang

- gt
- gte
- isFinite
- isInteger
- isNaN
- isNil
- isNull
- isUndefined

### Object

- assign
- keys
- omit
- toPairs
- values

### String

- endsWith
- padStart
- padEnd
- repeat
- replace
- split
- startsWith
- template
- toLower
- toUpper
- trim

### Number

- inRange
- random

## New Methods implemented

This methods are not inclued in original version

- capitalize

  Transform all first letter in upper in every word in a given string

- onlyNumber

  Get only numbers from a given string

## Development

Install depedencies

`npm i`

To test

`npm run test`

To build

`npm run build`

the build files will be in /lib
