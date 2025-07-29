import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

// GHL Webhook Configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "";

// Debug mode (set to false in production)
const DEBUG_MODE = false;

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  postcode?: string;
  service?: string;
  city?: string;
}

// Send to GHL Webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  // Skip if no webhook URL is configured
  if (!WEBHOOK_URL) {
    console.warn('GHL Webhook URL not configured');
    return false;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          city: data.city || data.postcode || '',
          message: data.message || 'Geen bericht opgegeven'
        }
      })
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status, response.statusText);
    }

    if (response.ok) {
      if (DEBUG_MODE) console.log('✅ Webhook submission successful');
      return true;
    } else {
      console.warn('❌ Webhook submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return false;
  }
};

// Send via EmailJS (fallback)
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
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

    if (DEBUG_MODE) {
      console.log('EmailJS result:', response.status, response.text);
    }

    if (response.status === 200) {
      if (DEBUG_MODE) console.log('✅ EmailJS submission successful');
      return true;
    } else {
      console.warn('❌ EmailJS submission failed');
      return false;
    }
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return false;
  }
};

// Main submission function with dual system
export const sendEmail = async (data: EmailData) => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute both submissions in parallel
  const [webhookSuccess, emailJSSuccess] = await Promise.all([
    sendToWebhook(data),
    sendViaEmailJS(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - Webhook:', webhookSuccess, 'EmailJS:', emailJSSuccess);
  }

  // Success if either method succeeds
  if (webhookSuccess || emailJSSuccess) {
    const methods = [];
    if (webhookSuccess) methods.push('GHL Webhook');
    if (emailJSSuccess) methods.push('EmailJS');
    
    if (DEBUG_MODE) {
      console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
    }
    
    return { success: true, response: { methods } };
  }

  // Both methods failed
  console.error('Failed to send contact form data through any available method');
  return { success: false, error: 'Failed to send form data' };
};

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};