import React, { use, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';

// Interfaces for type safety
interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

interface Course {
  id: number;
  title: string;
  author: string;
  date: string;
}
export default function DashboardPage() {
  const navigate = useNavigate();
  const Header: React.FC = () => (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <nav className="px-3 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-200">Learning Dashboard</h1>
        <div className="space-x-4 mr-8">
          <a href="#" className="text-gray-200 hover:text-blue-600" onClick={() => navigate('/')}>Home</a>

          <a href="#" className="text-gray-200 hover:text-blue-600" onClick={() => navigate('/chat')}>Chat</a>
        </div>
      </nav>
    </header>
  );

  const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => (
    <div className='shadow-md border border-gray-600 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className={`bg-black p-6 rounded-lg shadow-md ${color}`}>
        <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
        <p className="text-3xl font-bold text-gray-200 mt-2">{value}</p>
      </div>
    </div>

  );

  const CoursesChart: React.FC = () => {
    useEffect(() => {
      const ctx = document.getElementById('coursesChart') as HTMLCanvasElement;
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Computer Science', 'Data Science', 'Business', 'Design', 'Engineering'],
          datasets: [{
            label: 'Courses Available',
            data: [25, 15, 10, 8, 12],
            backgroundColor: 'rgba(37, 99, 235, 0.6)',
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Courses'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
      return () => chart.destroy();
    }, []);

    return (
      <div className="bg-black p-6 rounded-lg shadow-md border border-gray-600 hover:scale-y-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Courses by Department</h3>
        <canvas id="coursesChart" className="w-full h-64"></canvas>
      </div>
    );
  };

  const CoursesTable: React.FC = () => {
    const courses: Course[] = [
      { id: 1, title: 'Intro to Python', author: 'John Doe', date: '2025-06-20' },
      { id: 2, title: 'Data Analysis Basics', author: 'Jane Smith', date: '2025-06-18' },
      { id: 3, title: 'UX Design Principles', author: 'Alice Johnson', date: '2025-06-15' },
      { id: 4, title: 'Machine Learning 101', author: 'Bob Wilson', date: '2025-06-12' },
    ];

    return (
      <div className="bg-black p-6 rounded-lg shadow-md border border-gray-600 hover:scale-y-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Newly Added Courses</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-3 text-gray-300 font-semibold">Course Title</th>
                <th className="p-3 text-gray-300 font-semibold">Author</th>
                <th className="p-3 text-gray-300 font-semibold">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id} className="border-b">
                  <td className="p-3 text-gray-200">{course.title}</td>
                  <td className="p-3 text-gray-200">{course.author}</td>
                  <td className="p-3 text-gray-200">{course.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-back min-h-screen overflow-scroll">
      <main className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Active Courses" value="120" color="border-l-4 border-blue-500" />
          <StatCard title="Active Users" value="1,245" color="border-l-4 border-green-500" />
          <StatCard title="New Enrollments" value="89" color="border-l-4 border-purple-500" />
          <StatCard title="Online Courses" value="80" color="border-l-4 border-yellow-500" />
          <StatCard title="On Demand Courses" value="29" color="border-l-4 border-orange-500" />
          <StatCard title="Overdue Courses" value="9" color="border-l-4 border-red-500" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CoursesChart />
          <CoursesTable />
        </div>
      </main>
    </div>
  )
}

