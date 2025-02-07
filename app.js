const { BrowserRouter: Router, Route, Routes, Navigate } = ReactRouterDOM;
const { useState } = React;

// Login Page Component
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ farmId: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Varaha Earth</h1>
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Farm ID</label>
              <input
                value={formData.farmId}
                onChange={(e) => setFormData({...formData, farmId: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg"
                type="text"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg"
                type="password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-green-600 hover:underline">Forgot Password?</a>
            </div>
          </form>

          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">New User</a>
            <a href="#" className="hover:underline">Need Help?</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    address: '',
    area: '',
    issues: '',
    surveyorInfo: '',
    tillage: 'zero',
    ptr: false,
    dsr: false,
    residueInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold">Welcome, Sarthak Pant</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Farmer Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Aadhaar Upload</label>
                <input
                  type="file"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Field Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Area Registered</label>
                <input
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Any Issues?</label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Field Record Photo</label>
                <input
                  type="file"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Survey Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Surveyor Info</label>
                <input
                  name="surveyorInfo"
                  value={formData.surveyorInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Tillage</label>
                <select
                  name="tillage"
                  value={formData.tillage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="zero">Zero Till</option>
                  <option value="with">With Till</option>
                </select>
              </div>

              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="ptr"
                    checked={formData.ptr}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  PTR
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="dsr"
                    checked={formData.dsr}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  DSR
                </label>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Residue Info</label>
                <textarea
                  name="residueInfo"
                  value={formData.residueInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-4">
          <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded">
            Need Help?
          </button>
          <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded">
            Call Us
          </button>
        </div>
      </nav>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
