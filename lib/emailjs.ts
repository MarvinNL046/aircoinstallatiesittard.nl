import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  postcode?: string;
  service?: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        to_email: 'info@staycoolairco.nl',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message || 'Geen bericht opgegeven',
        postcode: data.postcode || 'Niet opgegeven',
        service: data.service || 'Algemene aanvraag',
      }
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};