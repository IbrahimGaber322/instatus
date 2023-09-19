# InstaLog - Activity Log Solution

InstaLog is a general solution for tracking and managing activity logs in various applications. It provides IT admins with the ability to monitor and analyze user actions within their teams. This document outlines the features, tech stack, and implementation details of InstaLog.

## Features

- Track and log various events and actions performed by users in the application.
- View and analyze activity logs with pagination, search, and filtering options.
- Backend endpoints for creating and retrieving events.
- Frontend interface with listing, details, search, and load more functionality.
- Additional bonus features include filtering rows and export to CSV.

## Tech Stack

### Backend

- Language: TypeScript
- ORM: Prisma
- Framework: Next.js
- Database: Postgres

### Frontend

- Framework: Next.js
- Styling: TailwindCSS
- Data Fetching: SWR

## Implementation

### Backend Endpoints

- **POST api/events**: Endpoint for creating new events.
- **GET api/events**: Endpoint for retrieving events.

### Frontend Functionality

The frontend interface of InstaLog allows users to interact with the activity logs.

- **Listing**: Display a list of activity logs with pagination.
- **Details**: Show detailed information about a specific event.
- **Load More**: Load additional logs when requested.
- **Search**: Search for specific events based on keywords.
- **Filter Rows**: Filter logs based on actor ID, target ID, action ID, or name.
- **Export to CSV**: Option to export logs to a CSV file.

### Design

For the design of InstaLog, please refer to the [Figma Activity Log Design](https://www.figma.com/file/rygmKpkjsqVW4sB503TOOl/Activity-Log?node-id=0%3A1) file.

## Tech Stack and Packages

The following is the recommended tech stack and package versions for InstaLog:

```json
{
  "dependencies": {
    "@prisma/client": "^5.3.1",
    "@types/node": "20.6.0",
    "@types/react": "18.2.21",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "moment": "^2.29.4",
    "next": "13.4.19",
    "papaparse": "^5.4.1",
    "postcss": "8.4.29",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "swr": "^2.2.2",
    "tailwindcss": "3.3.3",
    "typescript": "5.2.2"
  },
  "devDependencies": {
 "@tailwindcss/forms": "^0.5.6",
    "@types/papaparse": "^5.3.8",
    "prisma": "^5.3.1"
  }
}
```

[Live Link](https://instatus-rosy.vercel.app)


---

