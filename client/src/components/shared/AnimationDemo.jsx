import React from 'react';
import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedList, 
  AnimatedListItem,
  AnimatedImage,
  ParallaxSection,
  AnimatedLoader
} from './AnimatedComponents';
import { 
  ScrollAnimated, 
  StaggeredList, 
  StaggeredItem, 
  AnimatedCounter, 
  AnimatedProgressBar 
} from './ScrollAnimation';
import { SmoothLink, ScrollToTop } from './SmoothScroll';

export default function AnimationDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <ParallaxSection className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
        <AnimatedSection className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Animation Demo</h1>
          <p className="text-xl mb-8">Showcasing smooth scrolling and animations</p>
          <SmoothLink 
            to="features" 
            className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Explore Features
          </SmoothLink>
        </AnimatedSection>
      </ParallaxSection>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimated className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Features</h2>
            <p className="text-xl text-muted">Discover what makes our platform special</p>
          </ScrollAnimated>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredItem>
              <AnimatedCard className="bg-surface p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smooth Scrolling</h3>
                  <p className="text-muted">Seamless navigation with beautiful transitions</p>
                </div>
              </AnimatedCard>
            </StaggeredItem>

            <StaggeredItem>
              <AnimatedCard className="bg-surface p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Animations</h3>
                  <p className="text-muted">Engaging animations that enhance user experience</p>
                </div>
              </AnimatedCard>
            </StaggeredItem>

            <StaggeredItem>
              <AnimatedCard className="bg-surface p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-muted">Optimized for smooth performance on all devices</p>
                </div>
              </AnimatedCard>
            </StaggeredItem>
          </StaggeredList>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimated className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Our Numbers</h2>
            <p className="text-xl text-muted">Impressive statistics that speak for themselves</p>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollAnimated className="text-center">
              <AnimatedCounter 
                end={1000} 
                className="text-4xl font-bold text-primary-500 block mb-2"
                suffix="+"
              />
              <p className="text-muted">Happy Students</p>
            </ScrollAnimated>

            <ScrollAnimated className="text-center">
              <AnimatedCounter 
                end={50} 
                className="text-4xl font-bold text-secondary-500 block mb-2"
                suffix="+"
              />
              <p className="text-muted">Expert Instructors</p>
            </ScrollAnimated>

            <ScrollAnimated className="text-center">
              <AnimatedCounter 
                end={200} 
                className="text-4xl font-bold text-accent-500 block mb-2"
                suffix="+"
              />
              <p className="text-muted">Courses Available</p>
            </ScrollAnimated>

            <ScrollAnimated className="text-center">
              <AnimatedCounter 
                end={95} 
                className="text-4xl font-bold text-success block mb-2"
                suffix="%"
              />
              <p className="text-muted">Success Rate</p>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimated className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Progress Tracking</h2>
            <p className="text-xl text-muted">Visual progress indicators for better engagement</p>
          </ScrollAnimated>

          <div className="space-y-8">
            <ScrollAnimated>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Web Development</span>
                  <span className="text-muted">85%</span>
                </div>
                <AnimatedProgressBar 
                  progress={85} 
                  className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"
                />
              </div>
            </ScrollAnimated>

            <ScrollAnimated>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Data Science</span>
                  <span className="text-muted">72%</span>
                </div>
                <AnimatedProgressBar 
                  progress={72} 
                  className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"
                />
              </div>
            </ScrollAnimated>

            <ScrollAnimated>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Design</span>
                  <span className="text-muted">93%</span>
                </div>
                <AnimatedProgressBar 
                  progress={93} 
                  className="w-full h-3 bg-gray-200 rounded-full overflow-hidden"
                />
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimated className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Course Gallery</h2>
            <p className="text-xl text-muted">Beautiful course thumbnails with hover effects</p>
          </ScrollAnimated>

          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <AnimatedListItem key={item}>
                <AnimatedImage
                  src={`https://picsum.photos/400/250?random=${item}`}
                  alt={`Course ${item}`}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimated className="text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of learners and start your journey today</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <AnimatedButton className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg">
                Get Started
              </AnimatedButton>
              <AnimatedButton className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500">
                Learn More
              </AnimatedButton>
            </div>
          </ScrollAnimated>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop className="fixed bottom-8 right-8 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
        ↑
      </ScrollToTop>
    </div>
  );
} 