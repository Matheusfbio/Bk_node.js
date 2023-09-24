import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS users`.then(() => {
//   console.log("users table deleted");
// });

// sql`DROP TABLE IF EXISTS tasks`.then(() => {
//   console.log("tasks table deleted");
// });

sql`
  CREATE TABLE users (
	  id 		TEXT PRIMARY KEY,
	  Fullname	TEXT,
	  age		INTEGER
)
	`.then(() => {
  console.log("user table created");
});

sql`
   CREATE TABLE tasks (
		id 			TEXT PRIMARY KEY,
		title		TEXT,
		description TEXT,
		status		TEXT
	)`.then(() => {
  console.log("tasks table created");
});
