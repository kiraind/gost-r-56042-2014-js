/* globals test, expect */

import makePaymentString from './makePaymentString'

test('generate correct payment string', () => {
  expect(
    makePaymentString({
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
    })
  ).toBe('ST00012|Name=ООО "Три кита"|PersonalAcc=40702810138250123017|BankName=ОАО "БАНК"|BIC=044525225|CorrespAcc=30101810400000000225|Sum=100000|Purpose=Оплата членского взноса|PayeeINN=6200098765|LastName=Иванов|FirstName=Иван|MiddleName=Иванович|PayerAddress=г.Рязань, ул.Ленина, д.10, кв.15')
})
