const accessKey = "4e5f2514-dcf9-4d47-9ae4-00bd677c59a3";

async function test() {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New HPL Project Inquiry`,
        from_name: 'HPL Website',
        name: 'Test',
        phone: '123456789',
        project_type: 'lockers',
        message: 'This is a test message',
      }),
    });
    
    console.log("Status:", response.status);
    const text = await response.text();
    console.log("Response text:", text);
    
    // Now try to parse it
    const result = JSON.parse(text);
    console.log("Parsed result:", result);
  } catch (err) {
    console.error("Caught error:", err);
  }
}

test();
