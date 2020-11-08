[![Strict TypeScript Checked](https://badgen.net/badge/TS/Strict "Strict TypeScript Checked")](https://www.typescriptlang.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# gost-r-56042-2014-js
Генератор QR-кодов для оплаты банковским переводом от физлица юрлицу

Пример использования:

```js
import * as PaymentCode from 'gost-r-56042-2014'

await PaymentCode.toFile('qr.png', {
  Name: 'ООО "Три кита"',
  PersonalAcc: '40702810138250123017',
  BankName: 'ОАО "БАНК"',
  BIC: '044525225',
  CorrespAcc: '30101810400000000225',

  PayeeINN: '6200098765',
  LastName: 'Иванов',
  FirstName: 'Иван',
  MiddleName: 'Иванович',
  Purpose: 'Оплата членского взноса',
  PayerAddress: 'г.Рязань, ул.Ленина, д.10, кв.15',
  Sum: 1000_00
}, {
  errorCorrectionLevel: 'L'
})
```