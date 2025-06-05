
# Task Manager App



A sleek and intuitive task management application built with React and Tailwind CSS. Perfect for organizing your daily tasks with filtering capabilities.

## Features

✅ Add, complete, and delete tasks  
✅ Filter tasks by: All, Active, or Completed  
✅ Clean, dark-mode interface  
✅ Responsive design  
✅ Keyboard support (press Enter to add tasks)  

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Nahom-ketsela/Kuraz-internship.git
cd Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The app will open automatically in your default browser at `http://localhost:5173`

## How to Use

1. **Add a task**:
   - Type in the input field and click "Add" or press Enter

2. **Complete a task**:
   - Click the checkbox next to any task

3. **Delete a task**:
   - Click the "Delete" button on any task

4. **Filter tasks**:
   - Use the filter buttons to show All, Active, or Completed tasks

## Technologies Used

- React 18
- Tailwind CSS 3
- Vite (for fast development)
- HTML5
- JavaScript (ES6+)

## Project Structure

```
/src
├── App.jsx        # Main application component
├── main.jsx        # Application entry point
├── index.css       # Tailwind CSS imports

```

## Customization

To modify the app:


1. Edit task styles in `App.jsx`
2. Update the default tasks in the `useState` hook

## Troubleshooting

If you encounter issues:
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Ensure you're using Node.js v16+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


