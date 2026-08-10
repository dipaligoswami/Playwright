export const testData = {
  adminEmail: process.env.ADMIN_EMAIL ?? 'dipali.goswami@nrichlearning.com',
  teacherEmail: process.env.TEACHER_EMAIL ?? 'dipagoswami00@gmail.com',
  studentEmail: process.env.STUDENT_EMAIL ?? 'dipali.goswami@findandconsult.com',
  adminMobile: process.env.ADMIN_MOBILE ?? '8076395255',
  studentMobile: process.env.STUDENT_MOBILE ?? '8906669043',
  validOtp: process.env.VALID_OTP ?? '0000',
  invalidOtp: process.env.INVALID_OTP ?? '1254',
  lmsBaseUrl: process.env.LMS_BASE_URL ?? 'https://lms.simplelms.in',
} as const;

export type TestData = typeof testData;
