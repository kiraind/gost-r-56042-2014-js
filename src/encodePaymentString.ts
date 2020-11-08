import * as iconv from 'iconv-lite'

const win1251Encoding = 0x31
const utf8Encoding = 0x32
// const koi8rEncoding = 0x33

export default function encodePaymentString (paymentString: string) : Uint8ClampedArray {
  const win1251Buffer = iconv.encode(paymentString, 'win1251')

  // 0x3f — знак вопроса, обозначает неверно закодированный символ
  if (win1251Buffer.every(byte => byte !== 0x3f)) {
    // если закодировалось в win1251 без ошибок
    const byteArray = new Uint8ClampedArray(win1251Buffer)

    byteArray.set([win1251Encoding], 6) // установить маркер кодировки

    return byteArray
  } else {
    // иначе кодируем в utf8
    const byteArray = new Uint8ClampedArray(
      iconv.encode(paymentString, 'utf8')
    )

    byteArray.set([utf8Encoding], 6) // установить маркер кодировки

    return byteArray
  }
}
