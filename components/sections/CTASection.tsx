'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function CTASection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Button
                disabled
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium flex items-center space-x-3 opacity-75 cursor-not-allowed"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-black text-xs font-bold">📱</div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">{t('cta.appStore')}</div>
                </div>
              </Button>
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {t('cta.comingSoon')}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <Button
                disabled
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium flex items-center space-x-3 opacity-75 cursor-not-allowed"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-black text-xs font-bold">🤖</div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">{t('cta.googlePlay')}</div>
                </div>
              </Button>
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {t('cta.comingSoon')}
              </div>
            </motion.div>
          </div>

          {/* Early Access CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-blue-200 text-sm mt-4">
              Be among the first to experience fraud-free ticketing
            </p>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Mobile First</h3>
              <p className="text-blue-200 text-sm">Designed for seamless mobile experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold mb-2">Zero Fraud</h3>
              <p className="text-blue-200 text-sm">100% secure, impossible to counterfeit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Easy Setup</h3>
              <p className="text-blue-200 text-sm">Get started in minutes, not hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}