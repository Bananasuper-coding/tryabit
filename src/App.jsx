import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

// Sửa lại đường dẫn: Bỏ 'layouts/' và 'pages/' vì file nằm ngay bên cạnh App.jsx
import MainLayout from './layouts/MainLayout.jsx'; 
import Dashboard from './pages/Dashboard.jsx';
import Lessons from './pages/Lessons.jsx';
import LessonDetail from './pages/LessonDetail.jsx';
import Practice from './pages/Practice.jsx';
import Profile from './pages/Profile.jsx';
import Games from './pages/Games.jsx';
import Achievements from './pages/Achievements.jsx';

function App() {
  // Nội dung hàm App của bạn giữ nguyên...
}

export default App;
