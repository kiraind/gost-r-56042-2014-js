**[gost-r-56042-2014](../README.md)**

> [Globals](../globals.md) / ["makePaymentString"](../modules/_makepaymentstring_.md) / PaymentDetails

# Interface: PaymentDetails

## Hierarchy

* **PaymentDetails**

## Index

### Properties

* [AddAmount](_makepaymentstring_.paymentdetails.md#addamount)
* [BIC](_makepaymentstring_.paymentdetails.md#bic)
* [BankName](_makepaymentstring_.paymentdetails.md#bankname)
* [Category](_makepaymentstring_.paymentdetails.md#category)
* [Contract](_makepaymentstring_.paymentdetails.md#contract)
* [CorrespAcc](_makepaymentstring_.paymentdetails.md#correspacc)
* [DocDate](_makepaymentstring_.paymentdetails.md#docdate)
* [DocNo](_makepaymentstring_.paymentdetails.md#docno)
* [DrawerStatus](_makepaymentstring_.paymentdetails.md#drawerstatus)
* [FirstName](_makepaymentstring_.paymentdetails.md#firstname)
* [KPP](_makepaymentstring_.paymentdetails.md#kpp)
* [LastName](_makepaymentstring_.paymentdetails.md#lastname)
* [MiddleName](_makepaymentstring_.paymentdetails.md#middlename)
* [Name](_makepaymentstring_.paymentdetails.md#name)
* [OKTMO](_makepaymentstring_.paymentdetails.md#oktmo)
* [PayeeINN](_makepaymentstring_.paymentdetails.md#payeeinn)
* [PayerAddress](_makepaymentstring_.paymentdetails.md#payeraddress)
* [PayerINN](_makepaymentstring_.paymentdetails.md#payerinn)
* [PaymPeriod](_makepaymentstring_.paymentdetails.md#paymperiod)
* [PaymTerm](_makepaymentstring_.paymentdetails.md#paymterm)
* [PaytReason](_makepaymentstring_.paymentdetails.md#paytreason)
* [PersAcc](_makepaymentstring_.paymentdetails.md#persacc)
* [PersonalAcc](_makepaymentstring_.paymentdetails.md#personalacc)
* [PersonalAccount](_makepaymentstring_.paymentdetails.md#personalaccount)
* [Phone](_makepaymentstring_.paymentdetails.md#phone)
* [Purpose](_makepaymentstring_.paymentdetails.md#purpose)
* [ServiceName](_makepaymentstring_.paymentdetails.md#servicename)
* [SpecFio](_makepaymentstring_.paymentdetails.md#specfio)
* [Sum](_makepaymentstring_.paymentdetails.md#sum)
* [TaxPaytKind](_makepaymentstring_.paymentdetails.md#taxpaytkind)
* [TaxPeriod](_makepaymentstring_.paymentdetails.md#taxperiod)
* [TechCode](_makepaymentstring_.paymentdetails.md#techcode)
* [UIN](_makepaymentstring_.paymentdetails.md#uin)
* [СВС](_makepaymentstring_.paymentdetails.md#свс)

## Properties

### AddAmount

• `Optional` **AddAmount**: undefined \| number

*Defined in [makePaymentString.ts:168](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L168)*

Сумма страховки/дополнительной услуги/Сумма пени (в копейках)

___

### BIC

•  **BIC**: string

*Defined in [makePaymentString.ts:24](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L24)*

БИК

___

### BankName

•  **BankName**: string

*Defined in [makePaymentString.ts:19](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L19)*

Наименование банка получателя платежа, макс. 45 знаков

___

### Category

• `Optional` **Category**: undefined \| string

*Defined in [makePaymentString.ts:153](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L153)*

Вид платежа

___

### Contract

• `Optional` **Contract**: undefined \| string

*Defined in [makePaymentString.ts:128](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L128)*

Номер договора

___

### CorrespAcc

•  **CorrespAcc**: string

*Defined in [makePaymentString.ts:29](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L29)*

Номер кор./сч. банка получателя платежа

___

### DocDate

• `Optional` **DocDate**: undefined \| string

*Defined in [makePaymentString.ts:91](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L91)*

Дата документа, макс. 10 знаков

___

### DocNo

• `Optional` **DocNo**: undefined \| string

*Defined in [makePaymentString.ts:86](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L86)*

Номер документа, макс. 15 знаков

___

### DrawerStatus

• `Optional` **DrawerStatus**: undefined \| string

*Defined in [makePaymentString.ts:56](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L56)*

Статус составителя платежного документа, макс. 2 знака

___

### FirstName

• `Optional` **FirstName**: undefined \| string

*Defined in [makePaymentString.ts:108](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L108)*

Имя плательщика

___

### KPP

• `Optional` **KPP**: undefined \| string

*Defined in [makePaymentString.ts:61](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L61)*

КПП получателя платежа

___

### LastName

• `Optional` **LastName**: undefined \| string

*Defined in [makePaymentString.ts:103](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L103)*

Фамилия плательщика

___

### MiddleName

• `Optional` **MiddleName**: undefined \| string

*Defined in [makePaymentString.ts:113](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L113)*

Отчество плательщика

___

### Name

•  **Name**: string

*Defined in [makePaymentString.ts:9](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L9)*

Наименование получателя платежа, макс. 160 знаков

___

### OKTMO

• `Optional` **OKTMO**: undefined \| string

*Defined in [makePaymentString.ts:71](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L71)*

Общероссийский классификатор территорий муниципальных образований (ОКТМО)

___

### PayeeINN

• `Optional` **PayeeINN**: undefined \| string

*Defined in [makePaymentString.ts:46](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L46)*

ИНН получателя платежа

___

### PayerAddress

• `Optional` **PayerAddress**: undefined \| string

*Defined in [makePaymentString.ts:118](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L118)*

Адрес плательщика

___

### PayerINN

• `Optional` **PayerINN**: undefined \| string

*Defined in [makePaymentString.ts:51](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L51)*

ИНН плательщика

___

### PaymPeriod

• `Optional` **PaymPeriod**: undefined \| string

*Defined in [makePaymentString.ts:148](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L148)*

Период оплаты

___

### PaymTerm

• `Optional` **PaymTerm**: undefined \| string

*Defined in [makePaymentString.ts:143](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L143)*

Срок платежа/дата выставления счета

___

### PaytReason

• `Optional` **PaytReason**: undefined \| string

*Defined in [makePaymentString.ts:76](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L76)*

Основание налогового платежа, макс. 2 знака

___

### PersAcc

• `Optional` **PersAcc**: undefined \| string

*Defined in [makePaymentString.ts:133](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L133)*

Номер лицевого счета плательщика в организации (в системе учета ПУ)

___

### PersonalAcc

•  **PersonalAcc**: string

*Defined in [makePaymentString.ts:14](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L14)*

Расчетный счет получателя платежа

___

### PersonalAccount

• `Optional` **PersonalAccount**: undefined \| string

*Defined in [makePaymentString.ts:123](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L123)*

Лицевой счет бюджетного получателя

___

### Phone

• `Optional` **Phone**: undefined \| string

*Defined in [makePaymentString.ts:138](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L138)*

Номер телефона

___

### Purpose

• `Optional` **Purpose**: undefined \| string

*Defined in [makePaymentString.ts:41](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L41)*

Наименование платежа (назначение), макс. 210 знаков

___

### ServiceName

• `Optional` **ServiceName**: undefined \| string

*Defined in [makePaymentString.ts:158](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L158)*

Код услуги/название прибора учета

___

### SpecFio

• `Optional` **SpecFio**: undefined \| string

*Defined in [makePaymentString.ts:163](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L163)*

ФИО преподавателя, специалиста, оказывающего услугу

___

### Sum

• `Optional` **Sum**: undefined \| number

*Defined in [makePaymentString.ts:36](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L36)*

Сумма платежа, в копейках, макс. 18 знаков

___

### TaxPaytKind

• `Optional` **TaxPaytKind**: undefined \| string

*Defined in [makePaymentString.ts:96](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L96)*

Тип платежа, макс. 2 знака

___

### TaxPeriod

• `Optional` **TaxPeriod**: undefined \| string

*Defined in [makePaymentString.ts:81](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L81)*

Налоговый период, макс. 10 знаков

___

### TechCode

• `Optional` **TechCode**: undefined \| number

*Defined in [makePaymentString.ts:178](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L178)*

Технический код, рекомендуемый для заполнения поставщиком услуг. Может использоваться принимающей организацией для вызова соответствующей обрабатывающей ИТ-системы. Перечень значений кода представлен в приложении Г.

___

### UIN

• `Optional` **UIN**: undefined \| string

*Defined in [makePaymentString.ts:173](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L173)*

Уникальный идентификатор начисления

___

### СВС

• `Optional` **СВС**: undefined \| string

*Defined in [makePaymentString.ts:66](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/makePaymentString.ts#L66)*

КБК
