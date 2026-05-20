import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, BarChart3, ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock login process
      console.log('Login successful', formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B1120] relative">
      <Link to="/" className="absolute top-6 left-6 text-textMuted hover:text-white transition-colors flex items-center gap-2">
        <ArrowLeft size={20} /> Back to home
      </Link>
      
      <div className="w-full max-w-md bg-card/50 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
            <BarChart3 size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1120]">Welcome back</h2>
          <p className="text-[#0B1120] mt-2">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            icon={Mail}
            type="email" 
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
          />
          
          <div className="space-y-2">
            <Input 
              icon={Lock}
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
            />
            <div className="flex justify-end">
              <a href="#" className="text-sm text-primary hover:text-orange-400">Forgot password?</a>
            </div>
          </div>

          <Button type="submit" className="w-full mt-2">
            Log in
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-[#0B1120]">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
