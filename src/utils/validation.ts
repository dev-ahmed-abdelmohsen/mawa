/**
 * وظائف التحقق من صحة بيانات المستخدم
 */

/**
 * التحقق من صحة رقم الهاتف المصري
 * يجب أن يبدأ بـ 01 ويتبعه رقم من 0، 1، 2، 5 ثم 8 أرقام
 * @param phone رقم الهاتف المراد التحقق منه
 * @returns إذا كان رقم الهاتف صحيح أم لا
 */
export const isValidEgyptianPhone = (phone: string): boolean => {
  const egyptianPhoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  return egyptianPhoneRegex.test(phone);
};

/**
 * التحقق من صحة الاسم الرباعي
 * يجب أن يحتوي على 4 أسماء على الأقل مفصولة بمسافات
 * @param fullName الاسم الرباعي المراد التحقق منه
 * @returns إذا كان الاسم الرباعي صحيح أم لا
 */
export const isValidFullName = (fullName: string): boolean => {
  if (!fullName || fullName.trim() === '') return false;
  
  const nameParts = fullName.trim().split(/\s+/);
  return nameParts.length >= 4;
};

/**
 * التحقق من صحة كلمة المرور
 * يجب أن تكون كلمة المرور 8 أحرف على الأقل
 * @param password كلمة المرور المراد التحقق منها
 * @returns إذا كانت كلمة المرور صحيحة أم لا
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

/**
 * التحقق من تطابق كلمة المرور وتأكيدها
 * @param password كلمة المرور
 * @param confirmPassword تأكيد كلمة المرور
 * @returns إذا كانت كلمة المرور وتأكيدها متطابقين أم لا
 */
export const doPasswordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

/**
 * التحقق من صحة بيانات نموذج التسجيل
 * @param formData بيانات النموذج
 * @returns رسالة الخطأ إذا كان هناك خطأ، أو null إذا كانت البيانات صحيحة
 */
export const validateRegistrationForm = (formData: {
  fullName: string;
  phone: string;
  password: string;
  confirmPassword: string;
}): string | null => {
  if (!formData.fullName.trim()) {
    return "برجاء إدخال الاسم الرباعي";
  }

  if (!isValidFullName(formData.fullName)) {
    return "برجاء إدخال الاسم الرباعي بالكامل (الاسم الأول واسم الأب واسم الجد واسم العائلة)";
  }

  if (!formData.phone.trim()) {
    return "برجاء إدخال رقم الهاتف";
  }

  if (!isValidEgyptianPhone(formData.phone)) {
    return "رقم الهاتف غير صحيح. يجب أن يكون رقم هاتف مصري صالح";
  }

  if (!formData.password) {
    return "برجاء إدخال كلمة المرور";
  }

  if (!isValidPassword(formData.password)) {
    return "كلمة المرور يجب أن تكون على الأقل 8 أحرف";
  }

  if (!doPasswordsMatch(formData.password, formData.confirmPassword)) {
    return "كلمة المرور وتأكيد كلمة المرور غير متطابقين";
  }

  return null;
}; 