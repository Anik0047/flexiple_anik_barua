# Next.js Application with Prisma, MongoDB, and Tailwind CSS

This is a web application built with Next.js, Prisma, MongoDB, and Tailwind CSS. The project uses Prisma for database modeling and querying, Tailwind CSS for styling, and MongoDB as the database.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [VS Code](https://code.visualstudio.com/) (or your preferred code editor)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart) (optional but recommended)

---

## 🗂 Project Structure

### Main Folders & Files

```
.
├── prisma
│   ├── schema.prisma      # Prisma schema for database modeling
│   └── seed.js            # Script to seed the database
├── src
│   ├── app
│   │   └── api
│   │       └── employee
│   │           └── route.js   # API route to fetch data from the database
│   ├── components
│       ├── Hero.js         # Hero section component
│       ├── PersonDetails.js# Component for displaying person details
│       ├── Card.js         # Reusable card component
│       └── Footer.js       # Footer component
```

---

## ⚙️ Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Anik0047/flexiple_anik_barua.git
   cd flexiple_anik_barua
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Prisma**

   - Update your `.env` file with your MongoDB connection string:

     ```env
     DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
     ```

   - Generate Prisma client:

     ```bash
     npx prisma generate
     ```

4. **Run Database Migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Seed the Database** (Optional)

   ```bash
   node prisma/seed.js
   ```

6. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000`.

---

## 🌟 Features

- **Next.js** for server-side rendering and routing.
- **Prisma** for database modeling and querying.
- **MongoDB** as the database for storing and fetching data.
- **Tailwind CSS** for responsive and utility-first design.

---

---

## 📦 Components Overview

- **Hero.js**: Displays a hero section for the application.
- **PersonDetails.js**: Displays details of a specific person.
- **Card.js**: A reusable card component.
- **Footer.js**: Footer section of the application.

---

## 🖌 Styling

- **Tailwind CSS** is used for styling the application. Tailwind classes are added directly to the HTML elements.
- To customize Tailwind, update the `tailwind.config.js` file.

---

## 💻 Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the development server                |
| `npm run build`     | Build the application for production        |
| `npm run start`     | Start the production server                 |
| `npx prisma studio` | Launch Prisma Studio to manage the database |

---

## 🛠 Tools Used

- **Next.js**: React framework for building web applications
- **Prisma**: ORM for database access
- **MongoDB**: NoSQL database
- **Tailwind CSS**: Utility-first CSS framework

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to submit a pull request or open an issue.

### Happy Coding! 🚀
