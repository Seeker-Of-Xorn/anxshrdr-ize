ANXIETY SHREDDER

--Quick Start--

To load the seed data:
1. Navigate to the server folder and run the command 'npx prisma db execute --file prisma/seedlocal.sql --schema prisma/schema.prisma' followed by the command 'npx prisma validate && npx prisma generate'

To run the app:
1. From the root, run the command 'npm run dev'
2. Follow the hyperlink output in the terminal to view the app in your browser.
    - If needed: to update packages and dependencies, run the command 'npm outdated' for each package.json file (root, client, and server) to see the status of each package
3. Log in with these test user credentials:
    Email: shaunw@fake.net
    Pass: tomatoanx1

--Project Description--

A react app that helps K-12 students partner with their counselors to overcome their anxiety via guided, accessible exposure therapy.

--Tech Stack--

Frontend: React with TypeScript, Tailwind CSS

Backend: Express.js with Node.js

Database: PostgreSQL managed with Prisma

Authentication: Firebase Authentication

Dev Tools: Vite, Nodemon, Axios, Dotenv

Database Management: PGAdmin

--Folder Structure--

client: Contains the frontend code, including React components, pages, and styles.

server: Contains the backend code, including Express routes, Prisma models, and other middleware.