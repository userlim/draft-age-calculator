'use client';

import { useEffect, useState } from 'react';

interface CountryInfo {
  [key: string]: {
    name: string;
    eligibleAge: number;
    maxAge: number | null;
    isMandatory: boolean;
    serviceLength: string;
    description: string;
    registrationRequired: boolean;
  };
}

const countryInfo: CountryInfo = {
  us: {
    name: 'United States',
    eligibleAge: 18,
    maxAge: 25,
    isMandatory: false,
    serviceLength: 'Voluntary or Emergency Draft',
    description: 'Males must register with Selective Service within 30 days of turning 18. Registration does not mean you will be drafted, but it is required by law.',
    registrationRequired: true,
  },
  korea: {
    name: 'South Korea',
    eligibleAge: 18,
    maxAge: 35,
    isMandatory: true,
    serviceLength: '18-21 months (males)',
    description: 'Mandatory military service for able-bodied males. Service typically begins between ages 18-28. Females can volunteer.',
    registrationRequired: true,
  },
  israel: {
    name: 'Israel',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: true,
    serviceLength: '32 months (males), 24 months (females)',
    description: 'Mandatory military service for both males and females. Service typically begins at age 18-19. Exemptions available for certain groups.',
    registrationRequired: true,
  },
  turkey: {
    name: 'Turkey',
    eligibleAge: 20,
    maxAge: null,
    isMandatory: true,
    serviceLength: '12 months (standard)',
    description: 'Mandatory military service for males. Service length depends on education and assignment. Females are generally exempt unless volunteering.',
    registrationRequired: true,
  },
  brazil: {
    name: 'Brazil',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: true,
    serviceLength: '12 months (males)',
    description: 'Mandatory military service for males. Service is typically one year. Females can volunteer.',
    registrationRequired: true,
  },
  germany: {
    name: 'Germany',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: false,
    serviceLength: 'Voluntary only',
    description: 'Germany abolished mandatory military service in 2011. Military service is now voluntary.',
    registrationRequired: false,
  },
  france: {
    name: 'France',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: false,
    serviceLength: 'Voluntary',
    description: 'France ended mandatory military service in 2001. Military service is now entirely voluntary.',
    registrationRequired: false,
  },
  uk: {
    name: 'United Kingdom',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: false,
    serviceLength: 'Voluntary',
    description: 'The UK does not have mandatory military service. Military recruitment is entirely voluntary.',
    registrationRequired: false,
  },
  canada: {
    name: 'Canada',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: false,
    serviceLength: 'Voluntary',
    description: 'Canada does not have mandatory military service. The military is entirely volunteer-based.',
    registrationRequired: false,
  },
  australia: {
    name: 'Australia',
    eligibleAge: 18,
    maxAge: null,
    isMandatory: false,
    serviceLength: 'Voluntary',
    description: 'Australia does not have mandatory military service. Military recruitment is voluntary.',
    registrationRequired: false,
  },
};

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  ko: { name: '한국어', flag: '🇰🇷' },
  ja: { name: '日本語', flag: '🇯🇵' },
  zh: { name: '中文', flag: '🇨🇳' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  pt: { name: 'Português', flag: '🇵🇹' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  ar: { name: 'العربية', flag: '🇸🇦' },
  hi: { name: 'हिन्दी', flag: '🇮🇳' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  pl: { name: 'Polski', flag: '🇵🇱' },
  tr: { name: 'Türkçe', flag: '🇹🇷' },
  vi: { name: 'Tiếng Việt', flag: '🇻🇳' },
  th: { name: 'ไทย', flag: '🇹🇭' },
  sv: { name: 'Svenska', flag: '🇸🇪' },
  da: { name: 'Dansk', flag: '🇩🇰' },
  no: { name: 'Norsk', flag: '🇳🇴' },
};

const translations = {
  en: {
    title: 'Draft Age Calculator',
    subtitle: 'Check your eligibility for military draft and selective service',
    dateOfBirth: 'Date of Birth',
    gender: 'Gender',
    country: 'Country',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    calculate: 'Calculate',
    results: 'Your Results',
    currentAge: 'Current Age',
    years: 'years',
    months: 'months',
    draftEligible: 'Draft Eligible',
    yes: 'Yes',
    no: 'No',
    selectiveServiceStatus: 'Selective Service Status',
    registration: 'Registration',
    requiresRegistration: 'Requires Registration',
    notRequired: 'Not Required',
    registrationDeadline: 'Registration Deadline',
    daysRemaining: 'Days Remaining',
    overdue: 'Overdue',
    mustRegisterWithin: 'Must register within 30 days of turning 18',
    serviceInfo: 'Service Information',
    serviceLength: 'Service Length',
    mandatory: 'Mandatory',
    voluntary: 'Voluntary',
    yearsUntilEligible: 'Years Until Eligible',
    yearsSinceEligible: 'Years Since Eligible',
    countrySpecificInfo: 'Country-Specific Information',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This calculator is for informational purposes only and does not constitute legal advice. Please consult official government sources for accurate information regarding military service requirements and regulations.',
    selectCountry: 'Select a country...',
    enterDateOfBirth: 'Enter your date of birth to begin',
    notSet: 'Not set',
  },
  ko: {
    title: '징병 나이 계산기',
    subtitle: '병역 징집 및 선택적 징병 자격 확인',
    dateOfBirth: '생년월일',
    gender: '성별',
    country: '국가',
    male: '남성',
    female: '여성',
    other: '기타',
    calculate: '계산',
    results: '귀하의 결과',
    currentAge: '현재 나이',
    years: '년',
    months: '개월',
    draftEligible: '병역 징집 대상자',
    yes: '예',
    no: '아니오',
    selectiveServiceStatus: '병무청 상태',
    registration: '등록',
    requiresRegistration: '등록 필요',
    notRequired: '불필요',
    registrationDeadline: '등록 마감',
    daysRemaining: '남은 일수',
    overdue: '기한 경과',
    mustRegisterWithin: '18세가 된 후 30일 이내에 등록해야 함',
    serviceInfo: '복무 정보',
    serviceLength: '복무 기간',
    mandatory: '필수',
    voluntary: '자발적',
    yearsUntilEligible: '자격 요건까지 남은 연수',
    yearsSinceEligible: '자격 요건 이후 경과 연수',
    countrySpecificInfo: '국가별 정보',
    disclaimer: '면책조항',
    disclaimerText: '이 계산기는 정보 제공 목적으로만 제공되며 법적 조언을 구성하지 않습니다. 병역 복무 요구 사항 및 규정에 대한 정확한 정보는 공식 정부 소스를 참고하시기 바랍니다.',
    selectCountry: '국가 선택...',
    enterDateOfBirth: '시작하려면 생년월일을 입력하세요',
    notSet: '설정되지 않음',
  },
  ja: {
    title: '徴兵年齢計算機',
    subtitle: '兵役徴集および選抜兵役の適格性を確認',
    dateOfBirth: '生年月日',
    gender: '性別',
    country: '国',
    male: '男性',
    female: '女性',
    other: 'その他',
    calculate: '計算',
    results: 'あなたの結果',
    currentAge: '現在の年齢',
    years: '歳',
    months: 'ヶ月',
    draftEligible: '兵役適格',
    yes: 'はい',
    no: 'いいえ',
    selectiveServiceStatus: '兵役登録状況',
    registration: '登録',
    requiresRegistration: '登録が必要',
    notRequired: '不要',
    registrationDeadline: '登録期限',
    daysRemaining: '残日数',
    overdue: '期限超過',
    mustRegisterWithin: '18歳になってから30日以内に登録する必要があります',
    serviceInfo: '兵役情報',
    serviceLength: '兵役期間',
    mandatory: '強制',
    voluntary: '志願',
    yearsUntilEligible: '適格までの年数',
    yearsSinceEligible: '適格からの経過年数',
    countrySpecificInfo: '国別情報',
    disclaimer: '免責事項',
    disclaimerText: 'この計算機は情報提供のみを目的としており、法的助言を構成するものではありません。兵役要件と規制に関する正確な情報については、公式政府情報源をご参照ください。',
    selectCountry: '国を選択...',
    enterDateOfBirth: '開始するには生年月日を入力してください',
    notSet: '未設定',
  },
  zh: {
    title: '征兵年龄计算器',
    subtitle: '检查您的兵役征集和征兵资格',
    dateOfBirth: '出生日期',
    gender: '性别',
    country: '国家',
    male: '男性',
    female: '女性',
    other: '其他',
    calculate: '计算',
    results: '您的结果',
    currentAge: '当前年龄',
    years: '岁',
    months: '个月',
    draftEligible: '符合征兵条件',
    yes: '是',
    no: '否',
    selectiveServiceStatus: '兵役登记状态',
    registration: '登记',
    requiresRegistration: '需要登记',
    notRequired: '无需登记',
    registrationDeadline: '登记期限',
    daysRemaining: '剩余天数',
    overdue: '逾期',
    mustRegisterWithin: '必须在18岁后30天内登记',
    serviceInfo: '兵役信息',
    serviceLength: '服役期限',
    mandatory: '强制',
    voluntary: '志愿',
    yearsUntilEligible: '距符合条件的年数',
    yearsSinceEligible: '符合条件后的年数',
    countrySpecificInfo: '国家特定信息',
    disclaimer: '免责声明',
    disclaimerText: '本计算器仅供参考之用，不构成法律建议。请参阅官方政府来源以获取有关军事服役要求和法规的准确信息。',
    selectCountry: '选择国家...',
    enterDateOfBirth: '输入出生日期开始',
    notSet: '未设置',
  },
  es: {
    title: 'Calculadora de Edad de Reclutamiento',
    subtitle: 'Verifique su elegibilidad para el servicio militar y reclutamiento selectivo',
    dateOfBirth: 'Fecha de Nacimiento',
    gender: 'Género',
    country: 'País',
    male: 'Masculino',
    female: 'Femenino',
    other: 'Otro',
    calculate: 'Calcular',
    results: 'Sus Resultados',
    currentAge: 'Edad Actual',
    years: 'años',
    months: 'meses',
    draftEligible: 'Elegible para Reclutamiento',
    yes: 'Sí',
    no: 'No',
    selectiveServiceStatus: 'Estado de Servicio Selectivo',
    registration: 'Registro',
    requiresRegistration: 'Se Requiere Registro',
    notRequired: 'No Requerido',
    registrationDeadline: 'Plazo de Registro',
    daysRemaining: 'Días Restantes',
    overdue: 'Vencido',
    mustRegisterWithin: 'Debe registrarse dentro de 30 días de cumplir 18 años',
    serviceInfo: 'Información de Servicio',
    serviceLength: 'Duración del Servicio',
    mandatory: 'Obligatorio',
    voluntary: 'Voluntario',
    yearsUntilEligible: 'Años Hasta Ser Elegible',
    yearsSinceEligible: 'Años Desde Ser Elegible',
    countrySpecificInfo: 'Información Específica del País',
    disclaimer: 'Descargo de Responsabilidad',
    disclaimerText: 'Esta calculadora es solo para propósitos informativos y no constituye asesoramiento legal. Consulte fuentes oficiales del gobierno para obtener información precisa sobre los requisitos del servicio militar y las regulaciones.',
    selectCountry: 'Seleccionar país...',
    enterDateOfBirth: 'Ingrese su fecha de nacimiento para comenzar',
    notSet: 'No configurado',
  },
  fr: {
    title: 'Calculatrice d\'Âge de Conscription',
    subtitle: 'Vérifiez votre admissibilité au service militaire et à la conscription sélective',
    dateOfBirth: 'Date de Naissance',
    gender: 'Genre',
    country: 'Pays',
    male: 'Homme',
    female: 'Femme',
    other: 'Autre',
    calculate: 'Calculer',
    results: 'Vos Résultats',
    currentAge: 'Âge Actuel',
    years: 'ans',
    months: 'mois',
    draftEligible: 'Admissible à la Conscription',
    yes: 'Oui',
    no: 'Non',
    selectiveServiceStatus: 'Statut de Service Sélectif',
    registration: 'Enregistrement',
    requiresRegistration: 'Enregistrement Requis',
    notRequired: 'Non Requis',
    registrationDeadline: 'Délai d\'Enregistrement',
    daysRemaining: 'Jours Restants',
    overdue: 'Arrivé à Échéance',
    mustRegisterWithin: 'Doit s\'enregistrer dans les 30 jours après ses 18 ans',
    serviceInfo: 'Informations de Service',
    serviceLength: 'Durée du Service',
    mandatory: 'Obligatoire',
    voluntary: 'Volontaire',
    yearsUntilEligible: 'Années Avant d\'Être Admissible',
    yearsSinceEligible: 'Années Depuis Être Admissible',
    countrySpecificInfo: 'Informations Spécifiques au Pays',
    disclaimer: 'Clause de Non-Responsabilité',
    disclaimerText: 'Cette calculatrice est fournie à titre informatif seulement et ne constitue pas un avis juridique. Veuillez consulter les sources gouvernementales officielles pour obtenir des informations précises concernant les exigences du service militaire et les réglementations.',
    selectCountry: 'Sélectionner un pays...',
    enterDateOfBirth: 'Entrez votre date de naissance pour commencer',
    notSet: 'Non défini',
  },
  de: {
    title: 'Wehrpflicht-Altersrechner',
    subtitle: 'Überprüfen Sie Ihre Berechtigung für Wehrdienst und Wehrpflicht',
    dateOfBirth: 'Geburtsdatum',
    gender: 'Geschlecht',
    country: 'Land',
    male: 'Männlich',
    female: 'Weiblich',
    other: 'Andere',
    calculate: 'Berechnen',
    results: 'Ihre Ergebnisse',
    currentAge: 'Aktuelles Alter',
    years: 'Jahre',
    months: 'Monate',
    draftEligible: 'Wehrdiensttauglich',
    yes: 'Ja',
    no: 'Nein',
    selectiveServiceStatus: 'Wehrdienststatus',
    registration: 'Anmeldung',
    requiresRegistration: 'Anmeldung Erforderlich',
    notRequired: 'Nicht Erforderlich',
    registrationDeadline: 'Anmeldungsfrist',
    daysRemaining: 'Verbleibende Tage',
    overdue: 'Überfällig',
    mustRegisterWithin: 'Muss sich innerhalb von 30 Tagen nach Vollendung des 18. Lebensjahres anmelden',
    serviceInfo: 'Serviceinformation',
    serviceLength: 'Servicedauer',
    mandatory: 'Obligatorisch',
    voluntary: 'Freiwillig',
    yearsUntilEligible: 'Jahre bis zur Berechtigung',
    yearsSinceEligible: 'Jahre seit Berechtigung',
    countrySpecificInfo: 'Landesspezifische Informationen',
    disclaimer: 'Haftungsausschluss',
    disclaimerText: 'Dieser Rechner dient nur zu Informationszwecken und stellt keine Rechtsberatung dar. Bitte konsultieren Sie offizielle Regierungsquellen für genaue Informationen zu Wehrdienstanforderungen und Vorschriften.',
    selectCountry: 'Wählen Sie ein Land...',
    enterDateOfBirth: 'Geben Sie Ihr Geburtsdatum ein, um zu beginnen',
    notSet: 'Nicht gesetzt',
  },
  pt: {
    title: 'Calculadora de Idade de Recrutamento',
    subtitle: 'Verifique sua elegibilidade para serviço militar e recrutamento seletivo',
    dateOfBirth: 'Data de Nascimento',
    gender: 'Gênero',
    country: 'País',
    male: 'Masculino',
    female: 'Feminino',
    other: 'Outro',
    calculate: 'Calcular',
    results: 'Seus Resultados',
    currentAge: 'Idade Atual',
    years: 'anos',
    months: 'meses',
    draftEligible: 'Elegível para Recrutamento',
    yes: 'Sim',
    no: 'Não',
    selectiveServiceStatus: 'Status de Serviço Seletivo',
    registration: 'Registro',
    requiresRegistration: 'Registro Necessário',
    notRequired: 'Não Necessário',
    registrationDeadline: 'Prazo de Registro',
    daysRemaining: 'Dias Restantes',
    overdue: 'Vencido',
    mustRegisterWithin: 'Deve se registrar dentro de 30 dias após completar 18 anos',
    serviceInfo: 'Informações de Serviço',
    serviceLength: 'Duração do Serviço',
    mandatory: 'Obrigatório',
    voluntary: 'Voluntário',
    yearsUntilEligible: 'Anos Até Ser Elegível',
    yearsSinceEligible: 'Anos Desde Ser Elegível',
    countrySpecificInfo: 'Informações Específicas do País',
    disclaimer: 'Isenção de Responsabilidade',
    disclaimerText: 'Esta calculadora é fornecida apenas para fins informativos e não constitui aconselhamento jurídico. Consulte fontes oficiais do governo para informações precisas sobre requisitos de serviço militar e regulamentações.',
    selectCountry: 'Selecione um país...',
    enterDateOfBirth: 'Digite sua data de nascimento para começar',
    notSet: 'Não definido',
  },
  ru: {
    title: 'Калькулятор возраста призыва',
    subtitle: 'Проверьте свою пригодность к военной службе и избирательному призыву',
    dateOfBirth: 'Дата рождения',
    gender: 'Пол',
    country: 'Страна',
    male: 'Мужской',
    female: 'Женский',
    other: 'Другое',
    calculate: 'Рассчитать',
    results: 'Ваши результаты',
    currentAge: 'Текущий возраст',
    years: 'лет',
    months: 'месяцев',
    draftEligible: 'Годен к призыву',
    yes: 'Да',
    no: 'Нет',
    selectiveServiceStatus: 'Статус военной регистрации',
    registration: 'Регистрация',
    requiresRegistration: 'Требуется регистрация',
    notRequired: 'Не требуется',
    registrationDeadline: 'Крайний срок регистрации',
    daysRemaining: 'Дней осталось',
    overdue: 'Просрочено',
    mustRegisterWithin: 'Должен зарегистрироваться в течение 30 дней после исполнения 18 лет',
    serviceInfo: 'Информация о службе',
    serviceLength: 'Длительность службы',
    mandatory: 'Обязательная',
    voluntary: 'Добровольная',
    yearsUntilEligible: 'Лет до пригодности',
    yearsSinceEligible: 'Лет с момента пригодности',
    countrySpecificInfo: 'Страноспецифическая информация',
    disclaimer: 'Отказ от ответственности',
    disclaimerText: 'Этот калькулятор предоставляется только в информационных целях и не является юридической консультацией. Пожалуйста, консультируйтесь с официальными государственными источниками для получения точной информации о требованиях к военной службе и нормативных актах.',
    selectCountry: 'Выберите страну...',
    enterDateOfBirth: 'Введите дату рождения для начала',
    notSet: 'Не установлено',
  },
  ar: {
    title: 'حاسبة سن التجنيد',
    subtitle: 'تحقق من أهليتك للخدمة العسكرية والتجنيد الانتقائي',
    dateOfBirth: 'تاريخ الميلاد',
    gender: 'الجنس',
    country: 'الدولة',
    male: 'ذكر',
    female: 'أنثى',
    other: 'آخر',
    calculate: 'حساب',
    results: 'نتائجك',
    currentAge: 'العمر الحالي',
    years: 'سنوات',
    months: 'أشهر',
    draftEligible: 'مؤهل للتجنيد',
    yes: 'نعم',
    no: 'لا',
    selectiveServiceStatus: 'حالة الخدمة الانتقائية',
    registration: 'التسجيل',
    requiresRegistration: 'يتطلب التسجيل',
    notRequired: 'غير مطلوب',
    registrationDeadline: 'آخر موعد للتسجيل',
    daysRemaining: 'الأيام المتبقية',
    overdue: 'متأخر',
    mustRegisterWithin: 'يجب التسجيل في غضون 30 يومًا من بلوغ سن 18 سنة',
    serviceInfo: 'معلومات الخدمة',
    serviceLength: 'مدة الخدمة',
    mandatory: 'إلزامي',
    voluntary: 'طوعي',
    yearsUntilEligible: 'سنوات حتى تصبح مؤهلاً',
    yearsSinceEligible: 'سنوات منذ أن أصبحت مؤهلاً',
    countrySpecificInfo: 'المعلومات الخاصة بالدولة',
    disclaimer: 'إخلاء المسؤولية',
    disclaimerText: 'يتم توفير هذه الحاسبة لأغراض إعلامية فقط ولا تشكل استشارة قانونية. يرجى استشارة المصادر الرسمية للحكومة للحصول على معلومات دقيقة حول متطلبات الخدمة العسكرية واللوائح.',
    selectCountry: 'اختر دولة...',
    enterDateOfBirth: 'أدخل تاريخ ميلادك للبدء',
    notSet: 'لم يتم التعيين',
  },
  hi: {
    title: 'ड्राफ्ट आयु कैलकुलेटर',
    subtitle: 'सैन्य सेवा और चयनात्मक सेवा के लिए अपनी पात्रता जांचें',
    dateOfBirth: 'जन्म तारीख',
    gender: 'लिंग',
    country: 'देश',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    calculate: 'गणना करें',
    results: 'आपके परिणाम',
    currentAge: 'वर्तमान आयु',
    years: 'साल',
    months: 'महीने',
    draftEligible: 'ड्राफ्ट के लिए पात्र',
    yes: 'हाँ',
    no: 'नहीं',
    selectiveServiceStatus: 'चयनात्मक सेवा स्थिति',
    registration: 'पंजीकरण',
    requiresRegistration: 'पंजीकरण आवश्यक',
    notRequired: 'आवश्यक नहीं',
    registrationDeadline: 'पंजीकरण समय सीमा',
    daysRemaining: 'शेष दिन',
    overdue: 'अतिदेय',
    mustRegisterWithin: '18 साल की उम्र के 30 दिन के भीतर पंजीकरण करना चाहिए',
    serviceInfo: 'सेवा की जानकारी',
    serviceLength: 'सेवा की अवधि',
    mandatory: 'अनिवार्य',
    voluntary: 'स्वैच्छिक',
    yearsUntilEligible: 'पात्र होने तक के वर्ष',
    yearsSinceEligible: 'पात्र होने के बाद के वर्ष',
    countrySpecificInfo: 'देश-विशिष्ट जानकारी',
    disclaimer: 'अस्वीकरण',
    disclaimerText: 'यह कैलकुलेटर केवल सूचनात्मक उद्देश्यों के लिए प्रदान किया जाता है और कानूनी सलाह का गठन नहीं करता है। सैन्य सेवा की आवश्यकताओं और विनियमों के बारे में सटीक जानकारी के लिए कृपया आधिकारिक सरकारी स्रोतों से परामर्श लें।',
    selectCountry: 'देश चुनें...',
    enterDateOfBirth: 'शुरू करने के लिए अपनी जन्म तारीख दर्ज करें',
    notSet: 'सेट नहीं',
  },
  it: {
    title: 'Calcolatrice Età di Reclutamento',
    subtitle: 'Verifica la tua idoneità per il servizio militare e il reclutamento selettivo',
    dateOfBirth: 'Data di Nascita',
    gender: 'Genere',
    country: 'Paese',
    male: 'Maschio',
    female: 'Femmina',
    other: 'Altro',
    calculate: 'Calcola',
    results: 'I Tuoi Risultati',
    currentAge: 'Età Attuale',
    years: 'anni',
    months: 'mesi',
    draftEligible: 'Idoneo al Reclutamento',
    yes: 'Sì',
    no: 'No',
    selectiveServiceStatus: 'Stato di Servizio Selettivo',
    registration: 'Registrazione',
    requiresRegistration: 'Registrazione Richiesta',
    notRequired: 'Non Richiesta',
    registrationDeadline: 'Scadenza di Registrazione',
    daysRemaining: 'Giorni Rimanenti',
    overdue: 'Scaduto',
    mustRegisterWithin: 'Deve registrarsi entro 30 giorni dal compimento di 18 anni',
    serviceInfo: 'Informazioni di Servizio',
    serviceLength: 'Durata del Servizio',
    mandatory: 'Obbligatorio',
    voluntary: 'Volontario',
    yearsUntilEligible: 'Anni fino all\'Idoneità',
    yearsSinceEligible: 'Anni dall\'Idoneità',
    countrySpecificInfo: 'Informazioni Specifiche per Paese',
    disclaimer: 'Dichiarazione di Non Responsabilità',
    disclaimerText: 'Questa calcolatrice è fornita solo a scopo informativo e non costituisce consulenza legale. Si prega di consultare fonti governative ufficiali per informazioni accurate sui requisiti del servizio militare e i regolamenti.',
    selectCountry: 'Seleziona un paese...',
    enterDateOfBirth: 'Inserisci la tua data di nascita per iniziare',
    notSet: 'Non impostato',
  },
  nl: {
    title: 'Dienstplicht Leeftijd Calculator',
    subtitle: 'Controleer uw geschiktheid voor militaire dienst en selectieve dienstplicht',
    dateOfBirth: 'Geboortedatum',
    gender: 'Geslacht',
    country: 'Land',
    male: 'Man',
    female: 'Vrouw',
    other: 'Ander',
    calculate: 'Berekenen',
    results: 'Uw Resultaten',
    currentAge: 'Huidige Leeftijd',
    years: 'jaar',
    months: 'maanden',
    draftEligible: 'Geschikt voor Dienstplicht',
    yes: 'Ja',
    no: 'Nee',
    selectiveServiceStatus: 'Status Selectieve Dienst',
    registration: 'Registratie',
    requiresRegistration: 'Registratie Vereist',
    notRequired: 'Niet Vereist',
    registrationDeadline: 'Registratie Deadline',
    daysRemaining: 'Resterende Dagen',
    overdue: 'Verlopen',
    mustRegisterWithin: 'Moet zich registreren binnen 30 dagen na 18e verjaardag',
    serviceInfo: 'Dienstinformatie',
    serviceLength: 'Dienstduur',
    mandatory: 'Verplicht',
    voluntary: 'Vrijwillig',
    yearsUntilEligible: 'Jaren tot Geschiktheid',
    yearsSinceEligible: 'Jaren sinds Geschiktheid',
    countrySpecificInfo: 'Landspecifieke Informatie',
    disclaimer: 'Vrijwaring',
    disclaimerText: 'Deze calculator wordt alleen voor informatiedoeleinden verstrekt en stelt geen juridisch advies voor. Raadpleeg officiële overheidsbronnenen voor nauwkeurige informatie over militaire dienstvereisten en regelgeving.',
    selectCountry: 'Selecteer een land...',
    enterDateOfBirth: 'Voer uw geboortedatum in om te beginnen',
    notSet: 'Niet ingesteld',
  },
  pl: {
    title: 'Kalkulator Wieku Poborowego',
    subtitle: 'Sprawdź swoją zdolność do pełnienia służby wojskowej i poboru',
    dateOfBirth: 'Data Urodzenia',
    gender: 'Płeć',
    country: 'Kraj',
    male: 'Mężczyzna',
    female: 'Kobieta',
    other: 'Inne',
    calculate: 'Oblicz',
    results: 'Twoje Wyniki',
    currentAge: 'Obecny Wiek',
    years: 'lat',
    months: 'miesięcy',
    draftEligible: 'Zdolny do Poboru',
    yes: 'Tak',
    no: 'Nie',
    selectiveServiceStatus: 'Status Poboru',
    registration: 'Rejestracja',
    requiresRegistration: 'Wymagana Rejestracja',
    notRequired: 'Nie Wymagana',
    registrationDeadline: 'Termin Rejestracji',
    daysRemaining: 'Dni Pozostałe',
    overdue: 'Przeterminowane',
    mustRegisterWithin: 'Musi zarejestrować się w ciągu 30 dni od ukończenia 18 lat',
    serviceInfo: 'Informacje o Służbie',
    serviceLength: 'Długość Służby',
    mandatory: 'Obowiązkowe',
    voluntary: 'Dobrowolne',
    yearsUntilEligible: 'Lata do Zdolności',
    yearsSinceEligible: 'Lata od Zdolności',
    countrySpecificInfo: 'Informacje Specyficzne Dla Kraju',
    disclaimer: 'Zrzeczenie się Odpowiedzialności',
    disclaimerText: 'Ten kalkulator jest dostarczany wyłącznie do celów informacyjnych i nie stanowi porady prawnej. Prosimy skonsultować się z oficjalnymi źródłami rządowymi, aby uzyskać dokładne informacje na temat wymogów służby wojskowej i przepisów.',
    selectCountry: 'Wybierz kraj...',
    enterDateOfBirth: 'Wprowadź swoją datę urodzenia, aby rozpocząć',
    notSet: 'Nie ustawiono',
  },
  tr: {
    title: 'Askerlik Yaşı Hesaplayıcısı',
    subtitle: 'Askerlik ve seçmeli asker alımı uygunluğunuzu kontrol edin',
    dateOfBirth: 'Doğum Tarihi',
    gender: 'Cinsiyet',
    country: 'Ülke',
    male: 'Erkek',
    female: 'Kadın',
    other: 'Diğer',
    calculate: 'Hesapla',
    results: 'Sonuçlarınız',
    currentAge: 'Mevcut Yaş',
    years: 'yaş',
    months: 'ay',
    draftEligible: 'Askerlik Çağında',
    yes: 'Evet',
    no: 'Hayır',
    selectiveServiceStatus: 'Askerlik Kayıt Durumu',
    registration: 'Kayıt',
    requiresRegistration: 'Kayıt Gerekli',
    notRequired: 'Gerekli Değil',
    registrationDeadline: 'Kayıt Süresi',
    daysRemaining: 'Kalan Günler',
    overdue: 'Gecikmiş',
    mustRegisterWithin: '18 yaşından sonra 30 gün içinde kayıt olmalıdır',
    serviceInfo: 'Askerlik Bilgisi',
    serviceLength: 'Hizmet Süresi',
    mandatory: 'Zorunlu',
    voluntary: 'Gönüllü',
    yearsUntilEligible: 'Uygunluğa Kadar Yıllar',
    yearsSinceEligible: 'Uygunluktan Sonra Yıllar',
    countrySpecificInfo: 'Ülkeye Özgü Bilgiler',
    disclaimer: 'Sorumluluk Reddi',
    disclaimerText: 'Bu hesaplayıcı yalnızca bilgilendirme amaçlı sağlanmakta olup, hukuki tavsiye niteliği taşımamaktadır. Askerlik gereklilikleri ve yönetmelikleri hakkında doğru bilgi için lütfen resmi hükümet kaynaklarına danışınız.',
    selectCountry: 'Ülke Seç...',
    enterDateOfBirth: 'Başlamak için doğum tarihinizi girin',
    notSet: 'Ayarlanmadı',
  },
  vi: {
    title: 'Máy Tính Tuổi Nhập Ngũ',
    subtitle: 'Kiểm tra tính linh hoạt của bạn đối với dịch vụ quân sự và nhập ngũ có chọn lọc',
    dateOfBirth: 'Ngày Sinh',
    gender: 'Giới Tính',
    country: 'Quốc Gia',
    male: 'Nam',
    female: 'Nữ',
    other: 'Khác',
    calculate: 'Tính Toán',
    results: 'Kết Quả Của Bạn',
    currentAge: 'Tuổi Hiện Tại',
    years: 'tuổi',
    months: 'tháng',
    draftEligible: 'Đủ Điều Kiện Nhập Ngũ',
    yes: 'Có',
    no: 'Không',
    selectiveServiceStatus: 'Trạng Thái Dịch Vụ Tuyển Chọn',
    registration: 'Đăng Ký',
    requiresRegistration: 'Cần Đăng Ký',
    notRequired: 'Không Cần',
    registrationDeadline: 'Thời Hạn Đăng Ký',
    daysRemaining: 'Ngày Còn Lại',
    overdue: 'Quá Hạn',
    mustRegisterWithin: 'Phải đăng ký trong vòng 30 ngày kể từ khi bạn 18 tuổi',
    serviceInfo: 'Thông Tin Dịch Vụ',
    serviceLength: 'Thời Gian Phục Vụ',
    mandatory: 'Bắt Buộc',
    voluntary: 'Tự Nguyện',
    yearsUntilEligible: 'Năm Cho Đến Khi Đủ Điều Kiện',
    yearsSinceEligible: 'Năm Kể Từ Khi Đủ Điều Kiện',
    countrySpecificInfo: 'Thông Tin Cụ Thể Theo Quốc Gia',
    disclaimer: 'Tuyên Bố Từ Chối Trách Nhiệm',
    disclaimerText: 'Máy tính này được cung cấp chỉ cho mục đích thông tin và không cấu thành lời khuyên pháp lý. Vui lòng tham khảo các nguồn chính phủ chính thức để biết thông tin chính xác về yêu cầu dịch vụ quân sự và quy định.',
    selectCountry: 'Chọn Quốc Gia...',
    enterDateOfBirth: 'Nhập ngày sinh của bạn để bắt đầu',
    notSet: 'Chưa Đặt',
  },
  th: {
    title: 'เครื่องคำนวณอายุเกณฑ์',
    subtitle: 'ตรวจสอบความสามารถของคุณสำหรับการรับราชการและการเกณฑ์ทหารแบบคัดเลือก',
    dateOfBirth: 'วันเกิด',
    gender: 'เพศ',
    country: 'ประเทศ',
    male: 'ชาย',
    female: 'หญิง',
    other: 'อื่น ๆ',
    calculate: 'คำนวณ',
    results: 'ผลลัพธ์ของคุณ',
    currentAge: 'อายุปัจจุบัน',
    years: 'ปี',
    months: 'เดือน',
    draftEligible: 'สามารถเกณฑ์ได้',
    yes: 'ใช่',
    no: 'ไม่ใช่',
    selectiveServiceStatus: 'สถานะการเกณฑ์',
    registration: 'ลงทะเบียน',
    requiresRegistration: 'ต้องลงทะเบียน',
    notRequired: 'ไม่จำเป็น',
    registrationDeadline: 'กำหนดเวลาการลงทะเบียน',
    daysRemaining: 'วันที่เหลือ',
    overdue: 'เลยกำหนด',
    mustRegisterWithin: 'ต้องลงทะเบียนภายใน 30 วันนับจากที่อายุ 18 ปี',
    serviceInfo: 'ข้อมูลการรับราชการ',
    serviceLength: 'ระยะเวลาการรับราชการ',
    mandatory: 'บังคับ',
    voluntary: 'สมัครใจ',
    yearsUntilEligible: 'ปีจนกว่าจะมีสิทธิ',
    yearsSinceEligible: 'ปีนับจากมีสิทธิ',
    countrySpecificInfo: 'ข้อมูลเฉพาะประเทศ',
    disclaimer: 'ข้อสอบถามความรับผิดชอบ',
    disclaimerText: 'เครื่องคำนวณนี้จัดเตรียมไว้เพื่อวัตถุประสงค์ในการให้ข้อมูลเท่านั้นและไม่ถือเป็นคำปรึกษาทางกฎหมาย โปรดปรึกษาแหล่งข้อมูลอย่างเป็นทางการของรัฐบาลสำหรับข้อมูลที่ถูกต้องเกี่ยวกับความต้องการในการรับราชการทหารและข้อบัญญัติ',
    selectCountry: 'เลือกประเทศ...',
    enterDateOfBirth: 'ใส่วันเกิดของคุณเพื่อเริ่มต้น',
    notSet: 'ไม่ได้ตั้งค่า',
  },
  sv: {
    title: 'Värnplikt Åldersräknare',
    subtitle: 'Kontrollera din berättigande till militär tjänst och selektiv värnplikt',
    dateOfBirth: 'Födelsedatum',
    gender: 'Kön',
    country: 'Land',
    male: 'Man',
    female: 'Kvinna',
    other: 'Annat',
    calculate: 'Beräkna',
    results: 'Dina Resultat',
    currentAge: 'Nuvarande Ålder',
    years: 'år',
    months: 'månader',
    draftEligible: 'Värnpliktig',
    yes: 'Ja',
    no: 'Nej',
    selectiveServiceStatus: 'Status för Värnpliktsregistrering',
    registration: 'Registrering',
    requiresRegistration: 'Registrering Krävs',
    notRequired: 'Inte Obligatorisk',
    registrationDeadline: 'Registreringstidsgräns',
    daysRemaining: 'Återstående Dagar',
    overdue: 'Förfallen',
    mustRegisterWithin: 'Måste registrera sig inom 30 dagar efter att fylla 18 år',
    serviceInfo: 'Tjänsteinformation',
    serviceLength: 'Tjänstlängd',
    mandatory: 'Obligatorisk',
    voluntary: 'Frivillig',
    yearsUntilEligible: 'År Till Berättigande',
    yearsSinceEligible: 'År Sedan Berättigande',
    countrySpecificInfo: 'Landsspecifik Information',
    disclaimer: 'Friskrivning',
    disclaimerText: 'Denna kalkylator tillhandahålls endast för informationsändamål och utgör inte juridisk rådgivning. Vänligen konsultera officiella statliga källor för korrekt information om militär tjänstekrav och förordningar.',
    selectCountry: 'Välj Land...',
    enterDateOfBirth: 'Ange ditt födelsedatum för att börja',
    notSet: 'Inte Inställt',
  },
  da: {
    title: 'Militæralders Kalkulator',
    subtitle: 'Tjek din berettigelse til militærtjeneste og selektiv værnepligt',
    dateOfBirth: 'Fødselsdato',
    gender: 'Køn',
    country: 'Land',
    male: 'Mand',
    female: 'Kvinde',
    other: 'Andet',
    calculate: 'Beregn',
    results: 'Dine Resultater',
    currentAge: 'Nuværende Alder',
    years: 'år',
    months: 'måneder',
    draftEligible: 'Værnepligtig',
    yes: 'Ja',
    no: 'Nej',
    selectiveServiceStatus: 'Status for Værnepligtsregistrering',
    registration: 'Registrering',
    requiresRegistration: 'Registrering Påkrævet',
    notRequired: 'Ikke Påkrævet',
    registrationDeadline: 'Registreringsdeadline',
    daysRemaining: 'Resterende Dage',
    overdue: 'Udløbet',
    mustRegisterWithin: 'Skal registreres inden for 30 dage efter 18-års fødselsdagen',
    serviceInfo: 'Serviceinformation',
    serviceLength: 'Servicelængde',
    mandatory: 'Obligatorisk',
    voluntary: 'Frivillig',
    yearsUntilEligible: 'År Til Berettigelse',
    yearsSinceEligible: 'År Siden Berettigelse',
    countrySpecificInfo: 'Landspecifik Information',
    disclaimer: 'Ansvarsfraskrivelse',
    disclaimerText: 'Denne kalkulator leveres kun til informationsformål og udgør ikke juridisk rådgivning. Konsulter venligst officielle regeringskilder for nøjagtig information om militærtjenestekrav og regler.',
    selectCountry: 'Vælg Land...',
    enterDateOfBirth: 'Indtast din fødselsdato for at begynde',
    notSet: 'Ikke Indstillet',
  },
  no: {
    title: 'Vernepliktsalder Kalkulator',
    subtitle: 'Sjekk din berettigelse til militærtjeneste og selektiv verneplikt',
    dateOfBirth: 'Fødselsdato',
    gender: 'Kjønn',
    country: 'Land',
    male: 'Mann',
    female: 'Kvinne',
    other: 'Annet',
    calculate: 'Beregn',
    results: 'Dine Resultater',
    currentAge: 'Nåværende Alder',
    years: 'år',
    months: 'måneder',
    draftEligible: 'Vernepliktig',
    yes: 'Ja',
    no: 'Nei',
    selectiveServiceStatus: 'Status for Vernepliktsregistrering',
    registration: 'Registrering',
    requiresRegistration: 'Registrering Påkrevd',
    notRequired: 'Ikke Påkrevd',
    registrationDeadline: 'Registreringsdeadline',
    daysRemaining: 'Gjenstående Dager',
    overdue: 'Forfallt',
    mustRegisterWithin: 'Må registreres innen 30 dager etter 18-årsdagen',
    serviceInfo: 'Tjenesteinformasjon',
    serviceLength: 'Tjenestens Lengde',
    mandatory: 'Obligatorisk',
    voluntary: 'Frivillig',
    yearsUntilEligible: 'År Til Berettigelse',
    yearsSinceEligible: 'År Siden Berettigelse',
    countrySpecificInfo: 'Landspesifikk Informasjon',
    disclaimer: 'Ansvarsfraskrivelse',
    disclaimerText: 'Denne kalkulatoren er gitt kun for informasjonsformål og utgjør ikke juridisk rådgivning. Vennligst konsulter offisielle kilder fra myndighetene for nøyaktig informasjon om militærtjenestekrav og forskrifter.',
    selectCountry: 'Velg Land...',
    enterDateOfBirth: 'Skriv inn fødselsdatoen din for å begynne',
    notSet: 'Ikke Innstilt',
  },
};

export default function Calculator() {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [country, setCountry] = useState<string>('us');
  const [language, setLanguage] = useState<string>('en');
  const [results, setResults] = useState<any | null>(null);

  const t = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    const savedState = localStorage.getItem('draftCalculatorState');
    if (savedState) {
      const state = JSON.parse(savedState);
      setDateOfBirth(state.dateOfBirth || '');
      setGender(state.gender || '');
      setCountry(state.country || 'us');
      setLanguage(state.language || 'en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'draftCalculatorState',
      JSON.stringify({ dateOfBirth, gender, country, language })
    );
  }, [dateOfBirth, gender, country, language]);

  const calculateAge = (birthDate: Date): { years: number; months: number } => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const calculateResults = () => {
    if (!dateOfBirth || !gender) return;

    const birthDate = new Date(dateOfBirth);
    const { years, months } = calculateAge(birthDate);
    const info = countryInfo[country];

    // Calculate registration deadline (US only)
    const birthDatePlus18 = new Date(birthDate);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    const registrationDeadline = new Date(birthDatePlus18);
    registrationDeadline.setDate(registrationDeadline.getDate() + 30);

    const today = new Date();
    const daysUntilDeadline = Math.floor(
      (registrationDeadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    const isEligible =
      years >= info.eligibleAge &&
      (info.maxAge === null || years <= info.maxAge) &&
      (country !== 'us' || gender === 'male');

    const yearsUntilEligible = Math.max(0, info.eligibleAge - years);
    const yearsSinceEligible = years >= info.eligibleAge ? years - info.eligibleAge : 0;

    const registrationRequired =
      country === 'us' && gender === 'male' && years >= 18 && years <= 25;

    setResults({
      years,
      months,
      isEligible,
      yearsUntilEligible,
      yearsSinceEligible,
      daysUntilDeadline,
      registrationRequired,
      registrationDeadline: registrationDeadline.toLocaleDateString(),
      info,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container-custom">
        {/* Language Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(languages).map(([code, { flag, name }]) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`px-3 py-2 rounded-lg font-medium transition-all ${
                language === code
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/[0.03] text-gray-300 border border-white/10 hover:border-primary-300'
              }`}
              title={name}
            >
              {flag}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">{t.subtitle}</p>
        </div>

        {/* Calculator Card */}
        <div className="card max-w-2xl mx-auto mb-8">
          <div className="space-y-6">
            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.dateOfBirth}
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.gender}
              </label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="select-field">
                <option value="">{t.selectCountry}</option>
                <option value="male">{t.male}</option>
                <option value="female">{t.female}</option>
                <option value="other">{t.other}</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t.country}
              </label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="select-field">
                {Object.entries(countryInfo).map(([code, info]) => (
                  <option key={code} value={code}>
                    {info.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Calculate Button */}
            <button onClick={calculateResults} className="button-primary w-full text-lg">
              {t.calculate}
            </button>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="card max-w-2xl mx-auto mb-8 fade-in">
            <h2 className="text-2xl font-bold mb-6 gradient-text">{t.results}</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Current Age */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <p className="text-sm text-gray-400 font-medium">{t.currentAge}</p>
                <p className="text-3xl font-bold text-blue-900">
                  {results.years}
                  <span className="text-lg ml-2">{t.years}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {results.months} {t.months}
                </p>
              </div>

              {/* Draft Eligible */}
              <div
                className={`p-4 rounded-lg ${
                  results.isEligible
                    ? 'bg-gradient-to-br from-green-50 to-green-100'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
              >
                <p className="text-sm text-gray-400 font-medium">{t.draftEligible}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      results.isEligible ? 'bg-green-600' : 'bg-gray-400'
                    }`}
                  ></div>
                  <p className="text-2xl font-bold">
                    {results.isEligible ? t.yes : t.no}
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Status (US Only) */}
            {country === 'us' && (
              <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 rounded mb-6">
                <p className="font-semibold text-gray-200 mb-2">
                  {t.selectiveServiceStatus}
                </p>
                <p className="text-sm text-gray-300">
                  {results.registrationRequired ? (
                    <>
                      <span className="font-semibold">{t.requiresRegistration}</span>
                      <br />
                      {t.mustRegisterWithin}
                      <br />
                      <span className="text-xs text-gray-400 mt-2 block">
                        {t.registrationDeadline}: {results.registrationDeadline}
                      </span>
                      {results.daysUntilDeadline > 0 && (
                        <span className="text-xs text-gray-400 block">
                          {results.daysUntilDeadline} {t.daysRemaining}
                        </span>
                      )}
                      {results.daysUntilDeadline <= 0 && (
                        <span className="text-xs text-red-600 block font-semibold">
                          {t.overdue}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="font-semibold">{t.notRequired}</span>
                  )}
                </p>
              </div>
            )}

            {/* Service Information */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded mb-6">
              <p className="font-semibold text-gray-200 mb-4">{t.serviceInfo}</p>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-medium">{t.serviceLength}</p>
                  <p>{results.info.serviceLength}</p>
                </div>
                <div>
                  <p className="font-medium">{t.mandatory}</p>
                  <p>
                    {results.info.isMandatory ? t.mandatory : t.voluntary}
                  </p>
                </div>
              </div>
            </div>

            {/* Years Until/Since Eligible */}
            {results.yearsUntilEligible > 0 && (
              <div className="bg-blue-500/10 p-4 rounded mb-6 text-center">
                <p className="text-sm text-gray-400 font-medium">
                  {t.yearsUntilEligible}
                </p>
                <p className="text-3xl font-bold text-blue-900">
                  {results.yearsUntilEligible}
                </p>
              </div>
            )}

            {results.yearsSinceEligible > 0 && (
              <div className="bg-green-500/10 p-4 rounded mb-6 text-center">
                <p className="text-sm text-gray-400 font-medium">
                  {t.yearsSinceEligible}
                </p>
                <p className="text-3xl font-bold text-green-900">
                  {results.yearsSinceEligible}
                </p>
              </div>
            )}

            {/* Country-Specific Info */}
            <div className="bg-indigo-500/10 p-4 rounded">
              <p className="font-semibold text-gray-200 mb-2">
                {t.countrySpecificInfo}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {results.info.description}
              </p>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-200 mb-2">{t.disclaimer}</h3>
          <p className="text-sm text-gray-400">{t.disclaimerText}</p>
        </div>
      </div>
    </div>
  );
}
