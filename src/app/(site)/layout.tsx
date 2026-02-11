import PhoneButton from '@/components/PhoneButton';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PhoneButton />
      <WhatsAppButton />
    </>
  );
}