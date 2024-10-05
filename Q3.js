function processPayment(amount, cardNumber, expirationDate) {
    if (amount <= 0) {
      throw new Error("Invalid payment amount.");
    }
    if (!cardNumber || !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      throw new Error("Invalid credit card number.");
    }
    const currentDate = new Date();
    const [month, year] = expirationDate.split('/').map(Number);
    const expDate = new Date(`20${year}`, month - 1);
    if (!expirationDate || expDate < currentDate) {
      throw new Error("Invalid expiration date.");
    }
    console.log("Payment processed successfully!");
  }
  
  try {
    processPayment(50.25, "1234-5678-9012-3456", "12/25"); // Should log: "Payment processed successfully!"
    processPayment(-10, "invalidCardNumber", "05/22");
    // Should throw errors: "Invalid payment amount." and "Invalid credit card number."
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    processPayment(100.75, "9876-5432-1098-7654", "01/20"); // Should throw an error: "Invalid expiration date."
  } catch (error) {
    console.error(error.message);
  }
  
