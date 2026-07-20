export type Dictionary = {
  nav: {
    home: string
    about: string
    business: string
    businessSubmenuLabel: string
    individuals: string
    individualsSubmenuLabel: string
    contact: string
    requestAdvice: string
    languageLabel: string
    openMenu: string
    viewAll: string
  }
  home: {
    heroTitlePrefix: string
    heroTitleHighlight: string
    heroSubtitle: string
    profileLabel: string
    profileTitle: string
    businessCardTitle: string
    businessCardDesc: string
    businessCardCta: string
    individualsCardTitle: string
    individualsCardDesc: string
    individualsCardCta: string
    features: { icon: string; title: string; text: string }[]
    aboutLabel: string
    aboutTitle: string
    aboutParagraph: string
    aboutCta: string
    statsLabel: string
    yearsLabel: string
    clientsLabel: string
    globalLabel: string
    globalText: string
    insurersLabel: string
    andMore: string
  }
  businessPage: {
    label: string
    title: string
    subtitle: string
    notFoundTitle: string
    notFoundText: string
    requestAdvice: string
    viewFullPage: string
  }
  individualsPage: {
    label: string
    title: string
    subtitle: string
    notFoundTitle: string
    notFoundText: string
    requestAdvice: string
    viewMore: string
  }
  detailPage: {
    coveragesIncluded: string
    needAdviceTitle: (title: string) => string
    needAdviceText: string
    requestAdvice: string
    requestQuote: string
  }
  aboutPage: {
    label: string
    title: string
    p1: string
    p2: string
    stat1Value: string
    stat1Text: string
    stat2Value: string
    stat2Text: string
    stat3Value: string
    stat3Text: string
  }
  contactPage: {
    label: string
    title: string
    subtitle: string
    successMessage: string
    errorMessage: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    clientTypeLabel: string
    clientTypePersona: string
    clientTypeEmpresa: string
    categoryLabel: string
    categoryPlaceholder: string
    messageLabel: string
    consentPrefix: string
    consentLinkLabel: string
    consentSuffix: string
    marketingText: string
    submitLabel: string
    submittingLabel: string
    phoneColumnLabel: string
    emailColumnLabel: string
    addressColumnLabel: string
    validation: {
      nombre: string
      email: string
      telefono: string
      mensaje: string
      consentimiento: string
    }
  }
  footer: {
    needAdviceTitle: string
    needAdviceText: string
    contactUsCta: string
    callUsLabel: string
    writeUsLabel: string
    visitUsLabel: string
    brokerLicenseText: string
    legalNotice: string
    privacyPolicy: string
    brandLine: string
    disclaimer: string
    internalNote: string
  }
}
