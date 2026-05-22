import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Mail, Lock, User, BarChart3, ArrowLeft } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Full name is required';
    }
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
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Signup successful', data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/dashboard');
        } else {
          setErrors({ submit: data.error || 'Signup failed' });
        }
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ submit: 'Failed to connect to backend server' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B1120] relative">
      <Link to="/" className="absolute top-6 left-6 text-textMuted hover:text-white transition-colors flex items-center gap-2">
        <ArrowLeft size={20} /> Back to home
      </Link>
      
      <div className="w-full max-w-md bg-card/50 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm mt-12 md:mt-0">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
            <BarChart3 size={24} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
          <p className="text-[#0B1120] mt-2">Start managing your finances today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.submit && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center">
              {errors.submit}
            </div>
          )}

          <Input 
            icon={User}
            type="text" 
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            disabled={isLoading}
          />
          
          <Input 
            icon={Mail}
            type="email" 
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={isLoading}
          />
          
          <Input 
            icon={Lock}
            type="password" 
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
            disabled={isLoading}
          />

          <Input 
            icon={Lock}
            type="password" 
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            error={errors.confirmPassword}
            disabled={isLoading}
          />

          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign up'}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-[#0B1120]">
          Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
