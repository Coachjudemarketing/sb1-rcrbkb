'use client';

import React from 'react';
import {
  Clock,
  Shield,
  Tool,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Expert Watch Repair',
    description: 'Professional repair services by certified watchmakers',
    Icon: Tool,
  },
  {
    title: 'Authentication Service',
    description: 'Verify the authenticity of your luxury timepiece',
    Icon: Shield,
  },
  {
    title: 'Maintenance',
    description: 'Regular servicing to keep your watch in perfect condition',
    Icon: Clock,
  },
  {
    title: 'Warranty',
    description: 'Extended warranty options for peace of mind',
    Icon: Award,
  },
];

export function Services() {
  return (
    <section className="container py-8">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="text-center">
            <CardHeader>
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit">
                <service.Icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}