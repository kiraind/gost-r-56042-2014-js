[![Strict TypeScript Checked](https://badgen.net/badge/TS/Strict "Strict TypeScript Checked")](https://www.typescriptlang.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# ГОСТ Р 56042-2014 JavaScript

Генератор QR-кодов по [ГОСТ Р 56042-2014](http://docs.cntd.ru/document/1200110981) для оплаты банковским переводом от физлица юрлицу.

## Установка

```bash
npm i @kiraind/gost-r-56042-2014
```

## Пример использования:

```js
import * as PaymentCode from '@kiraind/gost-r-56042-2014'

const pngBuffer = await PaymentCode.toBuffer({
  Name: 'ООО "Три кита"',
  PersonalAcc: '40702810138250123017',
  CorrespAcc: '30101810400000000225',
  PayeeINN: '6200098765',
  
  BankName: 'ОАО "БАНК"',
  BIC: '044525225',

  LastName: 'Иванов',
  FirstName: 'Иван',
  MiddleName: 'Иванович',
  Purpose: 'Оплата членского взноса',
  PayerAddress: 'г.Рязань, ул.Ленина, д.10, кв.15',

  Sum: 1000_00
}, {
  scale: 20,
  errorCorrectionLevel: 'L'
})
```

## Доступные методы вывода QR-кода

### toBuffer

▸ **toBuffer**(`details`: [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToBufferOptions): Promise\<Buffer>

*Defined in [index.ts:31](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L31)*

Генерирует Buffer с QR-кодом в формате png

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`details` | [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToBufferOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<Buffer>

___

### toCanvas

▸ **toCanvas**(`canvas`: HTMLCanvasElement, `details`: [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeRenderersOptions): Promise\<any>

*Defined in [index.ts:44](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L44)*

Рисует QR-код на HTMLCanvasElement

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`canvas` | HTMLCanvasElement | - |  |
`details` | [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeRenderersOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>

___

### toDataURL

▸ **toDataURL**(`details`: [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToDataURLOptions): Promise\<string>

*Defined in [index.ts:54](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L54)*

Генерирует DataURL с QR-кодом в формате png/jpeg/webp

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`details` | [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToDataURLOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<string>

___

### toFile

▸ **toFile**(`path`: string, `details`: [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToFileOptions): Promise\<any>

*Defined in [index.ts:66](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L66)*

Записывает файл с QR-кодом в формате на основе расширения файла

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`path` | string | - |  |
`details` | [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToFileOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>

___

### toFileStream

▸ **toFileStream**(`stream`: stream.Writable, `details`: [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToFileStreamOptions): Promise\<any>

*Defined in [index.ts:78](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L78)*

Записывает в WritableStream файл с QR-кодом в формате png

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`stream` | stream.Writable | - |  |
`details` | [PaymentDetails](docs/interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToFileStreamOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>

## Кодируемые реквизиты

### Обязательные

| Параметр    | Тип    | Описание                                               |
|-------------|--------|--------------------------------------------------------|
| Name        | string | Наименование получателя платежа, макс. 160 знаков      |
| PersonalAcc | string | Расчетный счет получателя платежа                      |
| BankName    | string | Наименование банка получателя платежа, макс. 45 знаков |
| BIC         | string | БИК                                                    |
| CorrespAcc  | string | Номер кор./сч. банка получателя платежа                |

### Дополнительные

| Параметр        | Тип    | Описание                                                                                                                                                       |
|-----------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sum             | number | Сумма платежа, в копейках, макс. 18 знаков                                                                                                                     |
| Purpose         | string | Наименование платежа (назначение), макс. 210 знаков                                                                                                            |
| PayeeINN        | string | ИНН получателя платежа                                                                                                                                         |
| PayerINN        | string | ИНН плательщика                                                                                                                                                |
| DrawerStatus    | string | Статус составителя платежного документа, макс. 2 знака                                                                                                         |
| KPP             | string | КПП получателя платежа                                                                                                                                         |
| СВС             | string | КБК                                                                                                                                                            |
| OKTMO           | string | Общероссийский классификатор территорий муниципальных образований (ОКТМО)                                                                                      |
| PaytReason      | string | Основание налогового платежа, макс. 2 знака                                                                                                                    |
| TaxPeriod       | string | Налоговый период, макс. 10 знаков                                                                                                                              |
| DocNo           | string | Номер документа, макс. 15 знаков                                                                                                                               |
| DocDate         | string | Дата документа, макс. 10 знаков                                                                                                                                |
| TaxPaytKind     | string | Тип платежа, макс. 2 знака                                                                                                                                     |
| LastName        | string | Фамилия плательщика                                                                                                                                            |
| FirstName       | string | Имя плательщика                                                                                                                                                |
| MiddleName      | string | Отчество плательщика                                                                                                                                           |
| PayerAddress    | string | Адрес плательщика                                                                                                                                              |
| PersonalAccount | string | Лицевой счет бюджетного получателя                                                                                                                             |
| Contract        | string | Номер договора                                                                                                                                                 |
| PersAcc         | string | Номер лицевого счета плательщика в организации (в системе учета ПУ)                                                                                            |
| Phone           | string | Номер телефона                                                                                                                                                 |
| PaymTerm        | string | Срок платежа/дата выставления счета                                                                                                                            |
| PaymPeriod      | string | Период оплаты                                                                                                                                                  |
| Category        | string | Вид платежа                                                                                                                                                    |
| ServiceName     | string | Код услуги/название прибора учета                                                                                                                              |
| SpecFio         | string | ФИО преподавателя, специалиста, оказывающего услугу                                                                                                            |
| AddAmount       | number | Сумма страховки/дополнительной услуги/Сумма пени (в копейках)                                                                                                  |
| UIN             | string | Уникальный идентификатор начисления                                                                                                                            |
| TechCode        | number | Технический код, рекомендуемый для заполнения поставщиком услуг. Перечень значений кода представлен в [приложении Г](http://docs.cntd.ru/document/1200110981). |
