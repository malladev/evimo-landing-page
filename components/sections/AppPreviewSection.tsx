'use client';

import React from 'react';
import { Smartphone, QrCode, Shield, Zap, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function AppPreviewSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience EVIMO in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our intuitive interface makes secure ticketing effortless for both organizers and attendees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex justify-center space-x-6">
              {/* Attendee App */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Smartphone className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-gray-900">EVIMO</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>

                      {/* Ticket Card */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-gray-900 text-sm">Summer Music Festival</h3>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                        </div>
                        <p className="text-gray-600 text-xs mb-3">July 15, 2024 • 7:00 PM</p>
                        
                        {/* QR Code */}
                        <div className="bg-gray-900 rounded-xl p-4 mb-3">
                          <div className="grid grid-cols-8 gap-1">
                            {Array.from({ length: 64 }).map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-sm ${
                                  Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Ticket #A1B2C3</span>
                          <div className="flex items-center space-x-1 text-green-600">
                            <Shield className="w-3 h-3" />
                            <span>Verified</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <QrCode className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <span className="text-xs text-gray-700">Show QR</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <Star className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                          <span className="text-xs text-gray-700">Rate Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Attendee App
                </div>
              </div>

              {/* Scanner App */}
              <div className="relative -ml-8 mt-12">
                <div className="w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Scanner Content */}
                    <div className="p-4 h-full bg-gray-900 relative">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <QrCode className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-bold text-white">EVIMO Scanner</span>
                        </div>
                      </div>

                      {/* Scanner Viewfinder */}
                      <div className="relative bg-black rounded-2xl h-64 mb-4 overflow-hidden">
                        <div className="absolute inset-4 border-2 border-green-400 rounded-xl">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-400 rounded-tl-lg"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-400 rounded-tr-lg"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-400 rounded-bl-lg"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-400 rounded-br-lg"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-green-400 animate-pulse"></div>
                      </div>

                      {/* Scan Result */}
                      <div className="bg-green-900/50 rounded-xl p-4 border border-green-400">
                        <div className="flex items-center space-x-3 mb-2">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                          <span className="text-green-400 font-semibold">Ticket Verified</span>
                        </div>
                        <div className="text-white text-sm">
                          <p>Summer Music Festival</p>
                          <p className="text-gray-300 text-xs">VIP Access • Gate A</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-white">247</div>
                          <div className="text-xs text-gray-400">Scanned Today</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-green-400">100%</div>
                          <div className="text-xs text-gray-400">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Scanner App
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-gray-900 dark:text-white">Encrypted</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-20 -right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-gray-900 dark:text-white">Instant Scan</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Designed for Security & Simplicity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our dual-app approach ensures maximum security while maintaining an intuitive user experience for both event attendees and organizers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attendee Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Clean, intuitive interface for viewing tickets, accessing QR codes, and managing event information. Works offline for reliable access.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Scanner Interface</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Professional scanning interface with real-time verification, instant feedback, and comprehensive analytics for event staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Security</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Every QR code is uniquely encrypted and can only be validated through our secure scanner app, making counterfeiting impossible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Optimized scanning algorithms ensure tickets are verified in under 0.5 seconds, even with poor network conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Ready to Experience EVIMO?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Join our beta program and be among the first to experience the future of secure event ticketing.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Request Beta Access
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}