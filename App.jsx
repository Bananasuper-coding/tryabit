import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './MainLayout.jsx';
import Dashboard from './Dashboard.jsx';
import Lessons from './Lessons.jsx';
import LessonDetail from './LessonDetail.jsx';
import Practice from './pages/Practice';
import Games from './pages/Games';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import WeeklyReview from './pages/WeeklyReview';
import { useUserStore } from './stores/userStore';

function App() {
  const initializeUser = useUserStore((state) => state.initialize);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:weekId/:dayId" element={<LessonDetail />} />
        <Route path="practice" element={<Practice />} />
        <Route path="games" element={<Games />} />
        <Route path="profile" element={<Profile />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="weekly-review" element={<WeeklyReview />} />
      </Route>
    </Routes>
  );
}

export default App;
