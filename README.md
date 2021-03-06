# PARLMT.com

[Parlmt](http://parlmnt.com) imports data from [www.parliament.uk](http://www.parliament.uk), specifically [Bills & Legislation](http://www.parliament.uk/business/bills-and-legislation/), [Members of Parliament](http://www.parliament.uk/mps-lords-and-offices/mps/) and [Members of House of Lords](http://www.parliament.uk/mps-lords-and-offices/lords/).

This data serves two purposes:

+ **Interactive Presentation**: Visitors can up/down vote and leave comments against Legislation Bills
+ **JSON Api**: Bills, MPs and Lords data is presented in a JSON API

# Application Structure

## Server

Ruby on Rails 3.x is used as a mostly viewers API layer which presents relevant data in both JSON and XML formats.

## Client

All presentation is created by a [AngularJS](http://angularjs.org) based client.

# Motivation

## Moar Interactivity

Although the Parliament website is functional, it is somewhat lacking in interactivity; visitors are not able to voice opinions on Bills nor use them as topics for discussion or discourse.

## Better API

[Parliament.uk](http://Parliament.uk) presents  all its data as HTML. Specific data such as a Bill's [details](http://services.parliament.uk/bills/2012-13/antarctic.html), [stages](http://services.parliament.uk/bills/2012-13/antarctic/stages.html), [documents](http://services.parliament.uk/bills/2012-13/antarctic/documents.html), and most crucially [votes](http://www.publications.parliament.uk/pa/cm201213/cmhansrd/cm130129/debtext/130129-0002.htm#13012946000001) and so on can only be extracted by scraping the relevant pages.

This application aims to provide a JSON and XML API for accessing both Bills and Parliamentarian's details.

## My Nephew

My nephew (and [parlmnt.com](http://parlmnt.com) co-founder) is a bright kid and I am trying to nudge him to showing at least a passing interest in computing and software development. Several aspects of this application were designed with his feedback.


# Installation

## 1. Setup Database

```shell
  bundle install --path vendor/bundle
  bundle exec rake db:migrate
```

## 2. Install Dependencies


## 3. Parlmt Configuration

Start parlmnt:

```shell
  bundle exec rails s
```

## 4. Data Import

The newly created database will be empty. To populate parlmnt from parliament.uk run:

```shell
  bundle exec rake import:all
```

The above should take about an hour to import but the end of the process all Bills, MPs and Lords should have been imported.

# Contributors

* [Nazar Aziz](http://panthersoftware.com). Initial design and developer
* Sunil Taper. Contributing designer
