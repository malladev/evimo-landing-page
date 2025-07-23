'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Event Director, MusicFest International',
      avatar: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'EVIMO completely transformed our event security. We had zero fraud incidents at our 50,000-person festival, and the real-time analytics helped us manage crowd flow perfectly.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      title: 'Conference Organizer, Tech Summit',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The integration was seamless, and our attendees loved the digital experience. The encrypted QR codes gave us the security we needed for our high-profile speakers.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      title: 'Sports Event Manager, Stadium Events',
      avatar: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'EVIMO saved us thousands in potential revenue loss. The fraud prevention is bulletproof, and the scanning process is incredibly fast even with massive crowds.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      title: 'Theater Owner, Grand Opera House',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Our patrons appreciate the security and ease of use. The dashboard gives us complete control over our events, and the customer support is exceptional.',
      rating: 5,
    },
    {
      name: 'Lisa Park',
      title: 'Corporate Events, Fortune 500',
      avatar: 'https://images.pexels.com/photos/3794741/pexels-photo-3794741.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'For our exclusive corporate events, security is paramount. EVIMO provides the level of protection and professionalism our clients expect.',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      title: 'Festival Producer, Desert Beats',
      avatar: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The multi-day festival features work perfectly. Attendees can easily access different stages and areas, while we maintain complete security throughout.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-6 h-6 text-blue-200 dark:text-blue-800" />
                <p className="text-gray-600 dark:text-gray-300 italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join thousands of event organizers who trust EVIMO with their security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">MusicFest</div>
            <div className="text-2xl font-bold text-gray-400">TechSummit</div>
            <div className="text-2xl font-bold text-gray-400">StadiumEvents</div>
            <div className="text-2xl font-bold text-gray-400">GrandOpera</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}