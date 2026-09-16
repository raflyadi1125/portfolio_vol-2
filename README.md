# Portfolio - Adi Muchamad Rafly

Personal portfolio website built to showcase my background, skills, projects, experiences, and contact information.

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js
- PostgreSQL
- node-postgres (pg)

### Tools

- Git
- GitHub
- VS Code

## Features

- Responsive portfolio website
- Home landing page
- About section
- Education section
- Skills section
- Projects showcase
- Experience section
- Certificates section
- Contact section
- Contact form connected to backend API
- PostgreSQL data storage
- Input validation
- Input normalization
- Rate limiting
- Helmet security headers
- CORS configuration
- API error handling
- 404 route handling
- Health check endpoint
- Graceful server shutdown

## Project Structure

```text
portofolio/
|-- backend/
|   `-- src/
|       |-- config/
|       |-- controllers/
|       |-- middleware/
|       |-- routes/
|       |-- app.js
|       `-- server.js
|
|-- frontend/
|   `-- src/
|       `-- components/
|           |-- About.jsx
|           |-- Certificates.jsx
|           |-- Contact.jsx
|           |-- Experience.jsx
|           |-- Footer.jsx
|           |-- Hero.jsx
|           |-- Home.jsx
|           |-- Navbar.jsx
|           |-- Projects.jsx
|           |-- School.jsx
|           `-- Skills.jsx
|
|-- .gitignore
|-- .oxlintrc.json
`-- README.md
```

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/raflyadi1125/portfolio_vol-2.git
cd portfolio_vol-2
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Use `.env.example` as a reference:

```env
PORT=5000

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=portfolio
DB_PORT=5432

CLIENT_URL=http://localhost:5173
```

> **Note:** Do not commit the `.env` file because it contains sensitive configuration.

### 5. Prepare PostgreSQL

Create a PostgreSQL database named:

```
portfolio
```

Then create the contact messages table:

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. Run Backend

From the backend directory:

```bash
node src/server.js
```

The backend will run on:

```
http://localhost:5000
```

### 7. Run Frontend

From the frontend directory:

```bash
npm run dev
```

The frontend will normally run on:

```
http://localhost:5173
```

## API Endpoints

### Health Check

```
GET /api/health
```

Example response:

```json
{
  "status": "ok",
  "database": "connected"
}
```

### Send Contact Message

```
POST /api/contact
```

Request body:

```json
{
  "name": "Anonim",
  "email": "anonim@example.com",
  "message": "Hello!"
}
```

Successful response:

```json
{
  "message": "Pesan berhasil dikirim"
}
```

## Backend Security

The backend implements several basic security measures:

- CORS configuration
- Helmet security headers
- Rate limiting
- Request validation
- Input normalization
- Parameterized SQL queries
- Centralized error handling
- 404 route handling
- Environment variables for sensitive configuration

## Environment Variables

The backend uses environment variables for configuration.

| Variable      | Description                  |
| ------------- | ---------------------------- |
| `PORT`        | Backend server port          |
| `DB_HOST`     | PostgreSQL host              |
| `DB_USER`     | PostgreSQL username          |
| `DB_PASSWORD` | PostgreSQL password          |
| `DB_NAME`     | PostgreSQL database name     |
| `DB_PORT`     | PostgreSQL port              |
| `CLIENT_URL`  | Frontend URL allowed by CORS |

## Author

**Adi Muchamad Rafly**
Informatics Engineering Student

GitHub: [raflyadi1125](https://github.com/raflyadi1125)
