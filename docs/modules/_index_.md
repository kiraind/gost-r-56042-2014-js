**[gost-r-56042-2014](../README.md)**

> [Globals](../globals.md) / "index"

# Module: "index"

## Index

### Functions

* [preparePaymentString](_index_.md#preparepaymentstring)
* [toBuffer](_index_.md#tobuffer)
* [toCanvas](_index_.md#tocanvas)
* [toDataURL](_index_.md#todataurl)
* [toFile](_index_.md#tofile)
* [toFileStream](_index_.md#tofilestream)

## Functions

### preparePaymentString

▸ **preparePaymentString**(`details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md)): QRCodeSegment

*Defined in [index.ts:15](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) |

**Returns:** QRCodeSegment

___

### toBuffer

▸ **toBuffer**(`details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToBufferOptions): Promise\<Buffer>

*Defined in [index.ts:31](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L31)*

Генерирует Buffer с QR-кодом в формате png

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToBufferOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<Buffer>

___

### toCanvas

▸ **toCanvas**(`canvas`: HTMLCanvasElement, `details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeRenderersOptions): Promise\<any>

*Defined in [index.ts:44](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L44)*

Рисует QR-код на HTMLCanvasElement

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`canvas` | HTMLCanvasElement | - |  |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeRenderersOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>

___

### toDataURL

▸ **toDataURL**(`details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToDataURLOptions): Promise\<string>

*Defined in [index.ts:54](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L54)*

Генерирует DataURL с QR-кодом в формате png/jpeg/webp

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToDataURLOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<string>

___

### toFile

▸ **toFile**(`path`: string, `details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToFileOptions): Promise\<any>

*Defined in [index.ts:66](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L66)*

Записывает файл с QR-кодом в формате на основе расширения файла

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`path` | string | - |  |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToFileOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>

___

### toFileStream

▸ **toFileStream**(`stream`: stream.Writable, `details`: [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md), `options?`: QRCodeToFileStreamOptions): Promise\<any>

*Defined in [index.ts:78](https://github.com/kiraind/gost-r-56042-2014-js/blob/a2eb661/src/index.ts#L78)*

Записывает в WritableStream файл с QR-кодом в формате png

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`stream` | stream.Writable | - |  |
`details` | [PaymentDetails](../interfaces/_makepaymentstring_.paymentdetails.md) | - |  |
`options` | QRCodeToFileStreamOptions | {} | параметры генерации qr-кода  |

**Returns:** Promise\<any>
