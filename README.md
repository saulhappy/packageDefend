Module Five Final Project: packageDefend
====================================

## Table of contents
* [General Information](#general-information)
* [Technical Information](#technical-information)
* [Backend Details](#backend-details)
* [Fronted Details](#frontend-details)
* [Known Defenciencies](#known-defenciencies)
* [Demo](#demo)
* [Deployment](#deployment)
* [Contact](#contact)

---

## General Information
This project, the capstone of MOD 5 of Flatiron School's Immersive Software Engineering course, is a web application powered by a Ruby on Rails backend used as an API, and a React.js frontend. The application is called packageDefend, a website created to combat the growing problem of porch pirates. It does so by connecting those expecting a delivery of packages, but unable to receive a package personally, with individuals, such as stay-at-home moms and dads, others that work from home, etc. that can accept delivery, and thus, be a packageDefender. 

The site allows users to create an account, search for packageDefenders on a map, create an order, and schedule meetings to pickup their packages. Other functionalities include:

- Edit user account info
- View order history
- Edit order info
- Favorite pacakgeDefender listings (front-end only- i.e. data does not persist)

## Technical Information 

This application was written in Ruby using Rails as an API. The frontend was written in React, using class, styled, and functional components. No state management tools (e.g. Redux) were used. 

### Backend Details 
The application uses Rails as an API with with a Postgres database. It uses the following [Ruby Gems](https://rubygems.org/):

- [bcrypt](https://rubygems.org/gems/bcrypt): A secure hash algorithm designed by The OpenBSD project for hashing passwords.
- [Active Model Serializer](https://rubygems.org/gems/active_model_serializers/versions/0.10.2): to generate JSON responses from frontend client requests. 


### Frontend Details

A single-page React.js application serves as the frontend. Other techinical details include:
- [React Bootstrap](https://react-bootstrap.github.io/): for reusable component generation, such as buttons, forms, and containers.
- [Mapbox](https://www.mapbox.com/): to generate the maps where each packageDefender is located
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start): for page routing and user experience. 
- Various types of components (class, styled, functional using hooks) mainly for educational purposes. 

## Known Defenciencies
- Favorites Model: only has backend functionality
- Comments Model: was not implemented
- Session terminated on refresh



## Demo
Click the image below to be redirected to a demo video.
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/hMJTQUrsBmk/0.jpg)](http://www.youtube.com/watch?v=hMJTQUrsBmk)


## Deployment
This project will be deployed to Heroku in a future date, with link and further instructions provided.

## Contact
**Saul Feliz** [LinkedIn](https://www.linkedin.com/in/saul-feliz-ba8bab1/) // [Portfolio](https://saulfeliz.com/)


