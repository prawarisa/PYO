import { Injectable } from '@angular/core'; // นำเข้า Injectable จาก Angular core
import * as CryptoJS from 'crypto-js'; // นำเข้า CryptoJS สำหรับการเข้ารหัสและถอดรหัส

@Injectable({
  providedIn: 'root' // ระบุว่า service นี้จะถูกให้บริการใน root module
})
export class EncryptDecryptService {

  constructor() { } // คอนสตรัคเตอร์ของ service
}
