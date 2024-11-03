import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  3 Writing Assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  3 Speaking Assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Basic Study Resources
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-4xl font-bold mb-6">$19.99/mo</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Unlimited Writing Assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Unlimited Speaking Assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Advanced Study Resources
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Progress Tracking
                </li>
              </ul>
              <Button className="w-full">Get Premium</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-4xl font-bold mb-6">Contact Us</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Custom Assessment Volumes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Dedicated Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  API Access
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;