# sendero-quotes

[![Travis](https://img.shields.io/travis/jpcano/sendero-quotes.svg)](https://travis-ci.org/jpcano/sendero-quotes)
[![Codecov](https://img.shields.io/codecov/c/github/jpcano/sendero-quotes.svg)](https://codecov.io/gh/jpcano/sendero-quotes)
[![version](https://img.shields.io/npm/v/sendero-quotes.svg)](http://npm.im/sendero-quotes)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Skeleton of a complete js project.

This is a toy project that can be used as a starting point for other projects. It has the following features already configured:

- Transipilation of ES6 code with **babel**
- Tests with **mocha** and **chai**
- Coverage with **nyc**
- Coverage reports to **codecov.io**
- Continuous integration with **Travis**
- Preformated commits with **commitizen** and the CLI **cz-conventional-changelog**
- Pre commit git hooks with **husky**
- Automated npm package release and versioning with **semantic-release**
- Browser build with **webpack**
- Different **badges** in the Readme file.

It was inspired by this excellent [course](https://egghead.io/courses/how-to-write-an-open-source-javascript-library) by egghead.io.

The module exposes the function *random(n)* which returns n random quotes from the book "El sendero de la mano izquierda" by the spanish writer Fernando Sánchez Dragó.