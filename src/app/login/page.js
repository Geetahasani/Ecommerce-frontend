'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [circleComplete, setCircleComplete] = useState(false);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Set the image path directly
    setImageData('/images/image.png');

    // Start the circle animation
    const circleTimer = setTimeout(() => {
      setCircleComplete(true);
    }, 3000); // Circle takes 3 seconds to complete

    // Show image after circle completes
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 3200);

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 hero-bg">

      <div className="w-full max-w-6xl mx-auto">
        <div className="glass-container rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[600px] glow-purple">
          {/* Left Side - Login Form */}
          <div className="p-12 flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-300 mb-8">Sign in to continue to Shiv Traders</p>
              
              <div className="mt-8 space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors text-lg"
                    required
                  />
                  <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-300" />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>

                <div className="pt-4 text-center">
                  <button className="text-gray-300 hover:text-white transition-colors">
                    Don't have an account? <span className="text-purple-400">Sign up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Background */}
          <div className="relative bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-orange-400/20 overflow-hidden">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            
            {/* Continuous Animated Circle */}
            <div className="animated-circle"></div>
            
            {/* Pulse Ring around image area */}
            <div className="pulse-ring"></div>
            
            {/* Centered Store Image with continuous floating */}
            {showImage && (
              <div className="store-image">
                {imageData ? (
                  <img 
                    src={imageData}
                    alt="Shiv Traders Store"
                  />
                ) : (
                  <div className="text-center text-white">
                    <div className="text-4xl mb-3">🏪</div>
                    <div className="text-xl font-bold">SHIV TRADERS</div>
                    <div className="text-sm opacity-80 mt-1">Your Store Awaits!</div>
                  </div>
                )}
              </div>
            )}
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;