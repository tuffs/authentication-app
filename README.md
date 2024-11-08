# Next.js Authentication App

Currently providing authentication for an admin portal and administrative "user" with just a password
which is specified in the `.env` file. This will be changed to require Prisma ORM and a PostgreSQL database
solution for Administrative Users. Once the first user is created, more Admin users can be created internally.

# TODO's

- [ ] Remove API use and switch to server actions for password check
- [ ] Integrate a username or email option (going to select username with email for resetting passwords) for a bit of security
- [ ] Integrate username and password check
- [ ] Upgrade to Prisma ORM with PostgreSQL database and add an Admin model
  - [ ] Admin -> username:string, email:string, password:string(encrypted)
