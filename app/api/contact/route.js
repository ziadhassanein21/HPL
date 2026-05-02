export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, projectType, details } = body;

    if (!name || !phone || !projectType || !details) {
      return Response.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Web3Forms — free email delivery (250/month)
    // Get your access key at https://web3forms.com (takes 30 seconds)
    const accessKey = process.env.WEB3FORMS_KEY;

    if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New HPL Project Inquiry — ${projectType}`,
          from_name: 'HPL Website',
          name,
          phone,
          project_type: projectType,
          message: details,
        }),
      });

      const result = await response.json();
      console.log('Web3Forms Result:', result);

      if (!result.success) {
        return Response.json(
          { success: false, message: result.message || 'Failed to send message.' },
          { status: 500 }
        );
      }
    } else {
      console.warn('WEB3FORMS_KEY is missing!');
      // Fallback: log to Vercel server logs when no Web3Forms key is set
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('Project Type:', projectType);
      console.log('Details:', details);
      console.log('Timestamp:', new Date().toISOString());
      console.log('===================================');
    }

    return Response.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
