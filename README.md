# 🎓 College Compass

College Compass is a full-stack web application that helps students explore, compare, and analyze colleges based on fees, ratings, placements, courses, and other important factors.

## 🚀 Features

- 🔍 Search Colleges
- 🏫 College Details Page
- 📊 Placement Statistics
- ⭐ College Ratings & Reviews
- ⚖️ College Comparison
- 🎯 Admission Predictor
- ❤️ Save Favorite Colleges
- 📈 Dashboard Analytics
- 🔐 User Management with Prisma

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL

### Deployment
- Vercel

## 📂 Project Structure

```bash
src/
├── app/
│   ├── api/
│   ├── college/
│   ├── compare/
│   ├── dashboard/
│   ├── favorites/
│   ├── predictor/
│   ├── reviews/
│   └── search/
├── repositories/
├── services/
├── lib/
└── types/
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Ashish4chauhan/college-compass.git
```

Move into the project folder:

```bash
cd college-compass
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed database:

```bash
npx prisma db seed
```

Start development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## 🗄️ Database Schema

### User
- Name
- Email
- Password

### College
- Name
- Location
- Fees
- Rating
- Overview
- Average Package
- Highest Package

### Course
- Course Name

### Review
- Student Name
- Rating
- Comment

### Exam Cutoff
- Exam Name
- Opening Rank
- Closing Rank

## 📸 Screenshots

### Home Page
- College Listings
- Search Bar
- Navigation Menu

### College Details
- Basic Information
- Fees & Placement
- Overview
- Compare Colleges

## 🌟 Future Enhancements

- AI-based College Recommendation System
- Scholarship Finder
- Placement Prediction
- User Authentication (JWT)
- Admin Dashboard
- Real College Data Integration

## 👨‍💻 Author

**Ashish Chauhan**

- MCA Student, Amity University Noida
- Cloud Computing Specialization
- Data Analytics & AI Enthusiast

GitHub: https://github.com/Ashish4chauhan

## 📄 License

This project is licensed under the MIT License.
