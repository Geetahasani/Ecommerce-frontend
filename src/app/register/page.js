'use client';
import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Phone } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [circleComplete, setCircleComplete] = useState(false);

  const [imageData, setImageData] = useState('/images/image.png');

  useEffect(() => {
    // Start the circle animation
    const circleTimer = setTimeout(() => {
      setCircleComplete(true);
    }, 3000); // Same timing as login

    // Show image after circle completes
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 3200); // Same timing as login

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 hero-bg">
      <div className="w-full max-w-6xl mx-auto">
        <div className="glass-container rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[700px] glow-purple">
          {/* Left Side - Signup Form */}
          <div className="p-12 flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-white mb-2">Join Shiv Traders</h1>
              <p className="text-gray-300 mb-8">Create your account to get started</p>
              
              <div className="mt-8 space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <User className="absolute right-4 top-4 h-5 w-5 text-gray-300" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-300" />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Phone"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <Phone className="absolute right-4 top-4 h-5 w-5 text-gray-300" />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Lock className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Lock className="h-5 w-5" />
                  </button>
                </div>

                <button
                  onClick={handleSignup}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>

                <div className="pt-4 text-center">
                  <button className="text-gray-300 hover:text-white transition-colors">
                    Already have an account? <span className="text-purple-400">Sign in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Background */}
          <div className="relative bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-orange-400/20 overflow-hidden">
            <div className="floating-orb signup-orb-1"></div>
            <div className="floating-orb signup-orb-2"></div>
            <div className="floating-orb signup-orb-3"></div>
            <div className="floating-orb signup-orb-4"></div>
            
            {/* Shared Animated Circle */}
            <div className="animated-circle"></div>
            
            {/* Pulse Ring around image area */}
            <div className="pulse-ring"></div>
            
            {/* Centered Store Image with continuous floating */}
            {showImage && (
              <div className="store-image">
                <img 
                  src={imageData}
                  alt="Shiv Traders Store"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-28 h-28 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute top-3/4 right-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;