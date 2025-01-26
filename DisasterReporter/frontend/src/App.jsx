import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { AdminRoute, AuthorityRoute, UserRoute, ProtectedReportRoute } from './components/ProtectedRoutes';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Insights from "./pages/Insights";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"; // Example admin page
import AuthorityDashboard from "./pages/AuthorityDashboard"; // Example authority page
import UserProfile from "./pages/UserProfile"; // Import the UserProfile component
import Unauthorized from "./pages/Unauthorized"; // Unauthorized access page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register"; // Import the Register component
import CreateReport from "./pages/CreateReport"; // Import the CreateReport component

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Admin Routes */}
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>

            {/* Authority Routes */}
            <Route element={<AuthorityRoute />}>
              <Route path="/authority/dashboard" element={<AuthorityDashboard />} />
            </Route>

            {/* User Routes */}
            <Route element={<UserRoute />}>
              <Route path="/user/profile" element={<UserProfile />} />
            </Route>

            {/* Error Routes */}
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected Report Route */}
            <Route element={<ProtectedReportRoute />}>
              <Route path="/report" element={<CreateReport />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
