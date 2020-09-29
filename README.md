# Know
A full stack dynamic web application designed to help lower the rate of new HIV and STD diagnoses in the United States. 

Allowing sexually-active people to have a central location to keep track of their sexual health, and specifically, HIV/STD test results.

## Live Demo
Try the application live at: https://know.tylerkimball.com

## Technologies Used
- React.js
- Node.js
- PostgreSQL
- Express
- Webpack 4
- Babel
- Bootstrap 4
- HTML5
- CSS3
- font-awesome
- AWS EC2

## Features
* User can add a new test entry
* User can include the date, city/state, tests received, and results of each test in a test entry
* User can view all testing entries
* User can add a sexual partner/encounter
* User can view all sexual partners/encounters
* User can search for locations to get tested
* User can create an account
* User can login to their account


## Preview



## Development

### System Requirements

- Node.js 10 or higher
- npm 6 or higher
- PostgreSQL

### Getting Started

1. Clone the repository:
    ```shell
    git clone https://github.com/kimballtyler/know.git
    cd know
    ```
2. Install npm dependencies:
    ```shell
    npm install
    ```
3. Start PostgreSQL:

   Command if using Linux:
    ```shell
    sudo service postgresql start
    ```
4. Import the example database to PostgreSQL:
    ```shell
    npm run db:import
    ```
5. Start the application:
    ```shell
    npm run dev
    ```
6. Visit http://localhost:3000 in your browser to view the application.
