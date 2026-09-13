import type { Metadata } from 'next';
import BookCallView from '@/views/BookCall';

export const metadata: Metadata = {
  title: "Book a Discovery Call | Growth Service",
  description: "Schedule a 1-on-1 strategic growth consultation with our digital marketing and web development leaders. Free consultation and technical assessment.",
  alternates: {
    canonical: '/book-call',
  },
};

export default function BookCallPage() {
  return <BookCallView />;
}
