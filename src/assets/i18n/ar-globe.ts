import {EN_GLOBE, EN_GLOBE_DATA} from "./en-globe";




export const AR_GLOBE_DATA: typeof EN_GLOBE_DATA = {
    static: {

    },
    page_title: {
      home: 'الرئيسية',
      admin: 'المسؤول',
      login: 'تسجيل الدخول',
    },
  common: {
    search: 'البحث',
    ok: 'موافق',
    accept: 'موافق',
    cancel: 'الغاء',
    next: 'التالي',
    prev: 'السابق',
    back:'رجوع',
    finish:'إنهاء',
    skip: "تخطي",
    please_wait: "يرجى الانتظار",
    yes: "نعم",
    no: "لا",
    delete: "حذف",
    delete_ad:'حذف الاعلان؟',
    delete_image:'حذف الصورة؟',
    view_more: "مشاهدة المزيد",
    leave_page: 'مغادرة الصفحة؟',
    select_files: 'اختر الملفات',
    select_image: 'اختر الصورة',
    select_images:'اضافة الصور',
    select_feature_image:'الصورة الرئيسية',
    save: 'حفظ',
    save_changes:'حفظ التغييرات؟',
    edit: 'تعديل',
    not_set: 'لم يحدد',
    add_pictures: 'إضافة صور',
    add_feature_image: 'إضافة صورة خارجية',
    update_image: 'تعديل الصور',
    update_feature_image: 'تعديل الصورة الخارجية',
    add: 'إضافة',
    images: 'الصور',
    feature_image: 'الصورة الخارجية',
    new_ad: 'اضافة اعلان',
    ad: 'اعلان',
    submit: 'ارسال',
    min_price:'أدنى سعر',
    max_price:'أعلى سعر',
    reset_form:'إعادة تعيين',
    send:'إرسال',
    views:'مشاهدة',
    or:'أو'
  },
  FORMS: {
    MSG: {
      IS_REQUIRED_FIELD: `يجب تعبئة الحقل `,
      EMAIL_PATTERN_ERROR: "يرجى ادخال البريد الالكتروني",
      INVALID_EMAIL: "يرجى التحقق من البريد الالكتروني",
      INVALID_PASSWORD: "يرجى التحقق من كلمة المرور",
      INVALID_FNAME: "يرجى إدخال اسم أول صحيح",
      INVALID_LNAME: "يرجى إدخال اسم أخير صحيح",
      INVALID_DATA: "يوجد خطأ في البيانات المدخلة",
      PASSWORD_MATCH: 'كلمة المرور غير مطابقة',
      NUMBER_ONLY: "قيمة خاطئة",
      MAX_VALUE: "الحد الأقصى",
      MIN_VALUE: "الحد الأدنى",
      INVALID_NUMBER: "قيمة خاطئة",
      SIGNUP_SUCCESS: "تمت عملية التسجيل بنجاح",
      SEND_SUCCESS:'تم إرسال الرسالة بنجاح',
      SEND_FAIL:'فشل إرسال الرسالة',
      EMAIL_EXISTS: "البريد الالكتروني موجود مسبقا",
      ERROR_MSG: "يوجد خطأ غير معروف",
      EXIT_MSG: "هل تريد الخروج من التطبيق ؟",
      EXIT_HEAD: "رسالة تأكيد",
      check_email_password: 'يرجى التحقق من البريد الالكتروني او كلمة المرور',
      check_email:'يرجى التحقق من البريد الالكتروني'
    },
    FIELDS: {
      SUBMIT: "تسجيل",
      SIGN_IN: "تسجيل الدخول",
      SIGN_UP: "حساب جديد",
      FULL_NAME:'الاسم الكامل',
      FIRST_NAME: "الإسم الأول",
      LAST_NAME: "الإسم الأخير",
      GENDER: "الجنس",
      BIRTH_DATE: "تاريخ الولادة",
      MOBILE: "الهاتف",
      WHATS_APP: 'واتس أب',
      COUNTRY: "الدولة",
      CURRENCY:'العملة',
      NATIONALITY: "الجنسية",
      CITY: "المدينة",
      ADDRESS: "العنوان",
      EMAIL: "البريد الالكتروني",
      EMAIL_PHONE:'البريد الالكتروني/الهاتف',
      PASSWORD: "كلمة المرور",
      CONFIRM_PASSWORD: "تأكيد كلمة المرور",
      OLD_PASSWORD: "كلمة المرور السابقة",
      NEW_PASSWORD: "كلمة المرور الجديدة",
      NOTES: "ملاحظات",
      MESSAGE:'الرسالة',
      PROFILE_IMG: "الصورة الشخصية",
      FORGOT_PASSWORD: "نسيت كلمة المرور؟",
      HAVE_ACCOUNT: 'لديك حساب مسبقا؟',
      NO_ACCOUNT: {
        DONT: "لا تمتلك حساب؟",
        CLICK: 'اضغط هنا لانشاء حساب جديد.',
        NO:'لا يوجد حساب ؟'
      },
      CONFIRM_CODE: 'رمز التاكيد',
      MOBILE_NUMBER:'رقم الهاتف',
      NAME:'الاسم',
      COMPANY_NAME:'اسم الشركة',
      TAX_NO:'الرقم الضريبي'
    },
    STATIC: {
      GENDER: {
        MALE: "ذكر",
        FEMALE: "أنثى"
      },
    },
  },

  pages:{
    login: {
      steps:{
        mobile:'جوال',
        login_details:'معلومات التسجيل',
        personal:'المعلومات الشخصية والعمل'
      },
      labels:{
        self_employed:'حساب شركة',
        please_enter_code:'لطفاً أدخل الكود المرسل إلى رقم الهاتف',
        change_phone_num:'تغيير رقم الهاتف',
        send_sms_after:'إعادة إرسال الرمز بعد',
        set_your_password:'أدخل كلمة المرور',
        personal_info:'المعلومات الشخصية',
        Company_info:'معلومات الشركة',
        reSend_code:'إعادة إرسال الرمز'
      },
      msg:{
        completed_successfully:'تمت العملية بنجاح',
        check_your_email:'we will review your application soon, enjoy building your profile please check your e-mail to verify it',
      },
     title:'أهلا بكم في موقع توركسا',
      login:'تسجيل الدخول',
      register_New_Title:'تسجيل شركة جديدة',
      choose_type:'الرجاء اختيار نوع عملك!',
      company:'شركة',
      my_profile:'الملف الشخصي',
      business_type:'التصنيف',
      business_tel:'هاتف الشركة',
      business_web:'الموقع الالكتروني'
    }
  }
};

export const AR_GLOBE: typeof EN_GLOBE = {
  lang: 'ar',
  data: AR_GLOBE_DATA,
};
