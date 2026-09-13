import type { Metadata } from 'next';
import ContactView from '@/views/Contact';

export const metadata: Metadata = {
  title: "Contact Us | Growth Service",
  description: "Get in touch with Growth Service. Verified offices in Jaipur, Vrindavan, and Nepal. Reach out via phone, email, or WhatsApp for rapid project consultations.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactView />;
}
