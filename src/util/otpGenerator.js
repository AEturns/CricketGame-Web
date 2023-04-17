export const generateOTP = (length) => {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  const decryptedOTP = (OTP * 120) / 22
  return { otp: OTP, decryptedOTP };
};

export const generateMessage = (username, otp) => {
  return `Hi ${username}! Your One-Time Password is ${otp}.`
}

export const mobileGenerator = (mobile) => {
  return `94${mobile.substring(1)}`
}