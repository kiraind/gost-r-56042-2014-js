import * as stream from 'stream'
import * as QRCode from 'qrcode'
import {
  QRCodeToBufferOptions,
  QRCodeRenderersOptions,
  QRCodeToDataURLOptions,
  QRCodeToFileOptions,
  QRCodeToFileStreamOptions
} from 'qrcode'

import makePaymentString, { PaymentDetails } from './makePaymentString'

/**
 * Генерирует Buffer с QR-кодом в формате png
 * @param {PaymentDetails} details
 * @param {QRCodeToBufferOptions} options параметры генерации qr-кода
 */
export async function toBuffer (details: PaymentDetails, options: QRCodeToBufferOptions = {}) {
  const paymentString = makePaymentString(details)

  return await QRCode.toBuffer(paymentString, options)
}

// Ублажение линтера
/* global HTMLCanvasElement */
/**
 * Рисует QR-код на HTMLCanvasElement
 * @param {} canvas
 * @param {PaymentDetails} details
 * @param {QRCodeRenderersOptions} options параметры генерации qr-кода
 */
export async function toCanvas (canvas: HTMLCanvasElement, details: PaymentDetails, options: QRCodeRenderersOptions = {}) {
  const paymentString = makePaymentString(details)

  return await QRCode.toCanvas(canvas, paymentString, options)
}

/**
 * Генерирует DataURL с QR-кодом в формате png/jpeg/webp
 * @param {PaymentDetails} details
 * @param {QRCodeToDataURLOptions} options параметры генерации qr-кода
 */
export async function toDataURL (details: PaymentDetails, options: QRCodeToDataURLOptions = {}) {
  const paymentString = makePaymentString(details)

  return await QRCode.toDataURL(paymentString, options)
}

/**
 * Записывает файл с QR-кодом в формате на основе расширения файла
 * @param {string} path
 * @param {PaymentDetails} details
 * @param {QRCodeToFileOptions} options параметры генерации qr-кода
 */
export async function toFile (path: string, details: PaymentDetails, options: QRCodeToFileOptions = {}) {
  const paymentString = makePaymentString(details)

  return await QRCode.toFile(path, paymentString, options)
}

/**
 * Записывает в WritableStream файл с QR-кодом в формате png
 * @param {stream.Writable} stream
 * @param {PaymentDetails} details
 * @param {QRCodeToFileStreamOptions} options параметры генерации qr-кода
 */
export async function toFileStream (stream: stream.Writable, details: PaymentDetails, options: QRCodeToFileStreamOptions = {}) {
  const paymentString = makePaymentString(details)

  return await QRCode.toFileStream(stream, paymentString, options)
}
