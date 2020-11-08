**[gost-r-56042-2014](README.md)**

> [Globals](globals.md)

[![Strict TypeScript Checked](https://badgen.net/badge/TS/Strict "Strict TypeScript Checked")](https://www.typescriptlang.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# ГОСТ Р 56042-2014 JavaScript

Генератор QR-кодов по [ГОСТ Р 56042-2014](http://docs.cntd.ru/document/1200110981) для оплаты банковским переводом от физлица юрлицу.

### Установка

```bash
npm i gost-r-56042-2014
```

### Пример использования:

```js
import * as PaymentCode from 'gost-r-56042-2014'

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

### Доступные функции
