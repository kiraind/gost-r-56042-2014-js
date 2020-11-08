const version = '0001' // Версия формата
const encoding = '2' // Код UTF-8

export interface PaymentDetails {
  // Обязательные реквизиты

  /**
   * Наименование получателя платежа, макс. 160 знаков
   */
  Name: string,

  /**
   * Расчетный счет получателя платежа
   */
  PersonalAcc: string,

  /**
   * Наименование банка получателя платежа, макс. 45 знаков
   */
  BankName: string,

  /**
   * БИК
   */
  BIC: string,

  /**
   * Номер кор./сч. банка получателя платежа
   */
  CorrespAcc: string,

  // Дополнительные реквизиты

  /**
   * Сумма платежа, в копейках, макс. 18 знаков
   */
  Sum?: number,

  /**
   * Наименование платежа (назначение), макс. 210 знаков
   */
  Purpose?: string,

  /**
   * ИНН получателя платежа
   */
  PayeeINN?: string,

  /**
   * ИНН плательщика
   */
  PayerINN?: string,

  /**
   * Статус составителя платежного документа, макс. 2 знака
   */
  DrawerStatus?: string,

  /**
   * КПП получателя платежа
   */
  KPP?: string,

  /**
   * КБК
   */
  СВС?: string,

  /**
   * Общероссийский классификатор территорий муниципальных образований (ОКТМО)
   */
  OKTMO?: string,

  /**
   * Основание налогового платежа, макс. 2 знака
   */
  PaytReason?: string,

  /**
   * Налоговый период, макс. 10 знаков
   */
  TaxPeriod?: string,

  /**
   * Номер документа, макс. 15 знаков
   */
  DocNo?: string,

  /**
   * Дата документа, макс. 10 знаков
   */
  DocDate?: string,

  /**
   * Тип платежа, макс. 2 знака
   */
  TaxPaytKind?: string,

  // Прочие дополнительные реквизиты

  /**
   * Фамилия плательщика
   */
  LastName?: string,

  /**
   * Имя плательщика
   */
  FirstName?: string,

  /**
   * Отчество плательщика
   */
  MiddleName?: string,

  /**
   * Адрес плательщика
   */
  PayerAddress?: string,

  /**
   * Лицевой счет бюджетного получателя
   */
  PersonalAccount?: string,

  /**
   * Номер договора
   */
  Contract?: string,

  /**
   * Номер лицевого счета плательщика в организации (в системе учета ПУ)
   */
  PersAcc?: string,

  /**
   * Номер телефона
   */
  Phone?: string,

  /**
   * Срок платежа/дата выставления счета
   */
  PaymTerm?: string,

  /**
   * Период оплаты
   */
  PaymPeriod?: string,

  /**
   * Вид платежа
   */
  Category?: string,

  /**
   * Код услуги/название прибора учета
   */
  ServiceName?: string,

  /**
   * ФИО преподавателя, специалиста, оказывающего услугу
   */
  SpecFio?: string,

  /**
   * Сумма страховки/дополнительной услуги/Сумма пени (в копейках)
   */
  AddAmount?: number,

  /**
   * Уникальный идентификатор начисления
   */
  UIN?: string,

  /**
   * Технический код, рекомендуемый для заполнения поставщиком услуг. Может использоваться принимающей организацией для вызова соответствующей обрабатывающей ИТ-системы. Перечень значений кода представлен в приложении Г.
   */
  TechCode?: string,
}

export default function makePaymentString (details: PaymentDetails) : string {
  let paymentString = 'ST'

  paymentString += version
  paymentString += encoding

  // Обязательные реквизиты

  // Name
  if (details.Name.length <= 160) {
    paymentString += `|Name=${details.Name}`
  } else {
    throw new RangeError('Слишком длинное значение Name')
  }

  // PersonalAcc
  if (details.PersonalAcc.length <= 20) {
    paymentString += `|PersonalAcc=${details.PersonalAcc}`
  } else {
    throw new RangeError('Слишком длинное значение PersonalAcc')
  }

  // BankName
  if (details.BankName.length <= 45) {
    paymentString += `|BankName=${details.BankName}`
  } else {
    throw new RangeError('Слишком длинное значение BankName')
  }

  // BIC
  if (details.BIC.length <= 9) {
    paymentString += `|BIC=${details.BIC}`
  } else {
    throw new RangeError('Слишком длинное значение BIC')
  }

  // CorrespAcc
  if (details.CorrespAcc.length <= 20) {
    paymentString += `|CorrespAcc=${details.CorrespAcc}`
  } else {
    throw new RangeError('Слишком длинное значение CorrespAcc')
  }

  // Дополнительные реквизиты

  // Sum
  if (details.Sum) {
    if (details.Sum.toString().length <= 18) {
      paymentString += `|Sum=${details.Sum.toString()}`
    } else {
      throw new RangeError('Слишком длинное значение Sum')
    }
  }

  // Purpose
  if (details.Purpose) {
    if (details.Purpose.length <= 210) {
      paymentString += `|Purpose=${details.Purpose}`
    } else {
      throw new RangeError('Слишком длинное значение Purpose')
    }
  }

  // PayeeINN
  if (details.PayeeINN) {
    if (details.PayeeINN.length <= 12) {
      paymentString += `|PayeeINN=${details.PayeeINN}`
    } else {
      throw new RangeError('Слишком длинное значение PayeeINN')
    }
  }

  // PayerINN
  if (details.PayerINN) {
    if (details.PayerINN.length <= 12) {
      paymentString += `|PayerINN=${details.PayerINN}`
    } else {
      throw new RangeError('Слишком длинное значение PayerINN')
    }
  }

  // DrawerStatus
  if (details.DrawerStatus) {
    if (details.DrawerStatus.length <= 2) {
      paymentString += `|DrawerStatus=${details.DrawerStatus}`
    } else {
      throw new RangeError('Слишком длинное значение DrawerStatus')
    }
  }

  // KPP
  if (details.KPP) {
    if (details.KPP.length <= 9) {
      paymentString += `|KPP=${details.KPP}`
    } else {
      throw new RangeError('Слишком длинное значение KPP')
    }
  }

  // СВС
  if (details.СВС) {
    if (details.СВС.length <= 20) {
      paymentString += `|СВС=${details.СВС}`
    } else {
      throw new RangeError('Слишком длинное значение СВС')
    }
  }

  // OKTMO
  if (details.OKTMO) {
    if (details.OKTMO.length <= 11) {
      paymentString += `|OKTMO=${details.OKTMO}`
    } else {
      throw new RangeError('Слишком длинное значение OKTMO')
    }
  }

  // PaytReason
  if (details.PaytReason) {
    if (details.PaytReason.length <= 2) {
      paymentString += `|PaytReason=${details.PaytReason}`
    } else {
      throw new RangeError('Слишком длинное значение PaytReason')
    }
  }

  // TaxPeriod
  if (details.TaxPeriod) {
    if (details.TaxPeriod.length <= 10) {
      paymentString += `|TaxPeriod=${details.TaxPeriod}`
    } else {
      throw new RangeError('Слишком длинное значение TaxPeriod')
    }
  }

  // DocNo
  if (details.DocNo) {
    if (details.DocNo.length <= 15) {
      paymentString += `|DocNo=${details.DocNo}`
    } else {
      throw new RangeError('Слишком длинное значение DocNo')
    }
  }

  // DocDate
  if (details.DocDate) {
    if (details.DocDate.length <= 10) {
      paymentString += `|DocDate=${details.DocDate}`
    } else {
      throw new RangeError('Слишком длинное значение DocDate')
    }
  }

  // TaxPaytKind
  if (details.TaxPaytKind) {
    if (details.TaxPaytKind.length <= 2) {
      paymentString += `|TaxPaytKind=${details.TaxPaytKind}`
    } else {
      throw new RangeError('Слишком длинное значение TaxPaytKind')
    }
  }

  // Прочие дополнительные реквизиты

  // LastName
  if (details.LastName) {
    paymentString += `|LastName=${details.LastName}`
  }

  // FirstName
  if (details.FirstName) {
    paymentString += `|FirstName=${details.FirstName}`
  }

  // MiddleName
  if (details.MiddleName) {
    paymentString += `|MiddleName=${details.MiddleName}`
  }

  // PayerAddress
  if (details.PayerAddress) {
    paymentString += `|PayerAddress=${details.PayerAddress}`
  }

  // PersonalAccount
  if (details.PersonalAccount) {
    paymentString += `|PersonalAccount=${details.PersonalAccount}`
  }

  // Contract
  if (details.Contract) {
    paymentString += `|Contract=${details.Contract}`
  }

  // PersAcc
  if (details.PersAcc) {
    paymentString += `|PersAcc=${details.PersAcc}`
  }

  // Phone
  if (details.Phone) {
    paymentString += `|Phone=${details.Phone}`
  }

  // PaymTerm
  if (details.PaymTerm) {
    paymentString += `|PaymTerm=${details.PaymTerm}`
  }

  // PaymPeriod
  if (details.PaymPeriod) {
    paymentString += `|PaymPeriod=${details.PaymPeriod}`
  }

  // Category
  if (details.Category) {
    paymentString += `|Category=${details.Category}`
  }

  // ServiceName
  if (details.ServiceName) {
    paymentString += `|ServiceName=${details.ServiceName}`
  }

  // SpecFio
  if (details.SpecFio) {
    paymentString += `|SpecFio=${details.SpecFio}`
  }

  // AddAmount
  if (details.AddAmount) {
    paymentString += `|AddAmount=${details.AddAmount.toString()}`
  }

  // UIN
  if (details.UIN) {
    paymentString += `|UIN=${details.UIN}`
  }

  // TechCode
  if (details.TechCode) {
    paymentString += `|TechCode=${details.TechCode}`
  }

  return paymentString
}
