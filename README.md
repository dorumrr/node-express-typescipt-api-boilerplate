# THE API

## Requirements

Clone the repository, ensure you have Node.js and MongoDB installed.
## Setup

`npm install`

`npm run dev-setup`

`npm run dev` - development

`npm start` - production

## Endpoints

Institutions CRUD: [POST, GET, PATCH, DELETE] http://localhost:3333/api/institution

Submissions CRUD: [POST, GET, PATCH, DELETE] http://localhost:3333/api/submission

Reports: [GET] http://localhost:3333/api/report/submissionsBySubject?subject_name=Maths&min_year=2010&max_year=2021
## TODO

- Add authentication
- Add tests
- Extend reports