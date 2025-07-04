import { Injectable } from '@angular/core'; // นำเข้า Injectable จาก Angular core
import { HttpClient } from '@angular/common/http'; // นำเข้า HttpClient สำหรับทำ HTTP requests
import { Observable } from 'rxjs'; // นำเข้า Observable จาก RxJS

const BaseURL = 'http://localhost:3000/api'; // กำหนด Base URL สำหรับ API

@Injectable({
  providedIn: 'root' // ระบุว่า service นี้จะถูกให้บริการใน root module
})
export class ApiService {
  public user: any; // ตัวแปรสำหรับเก็บข้อมูลผู้ใช้

  constructor( // คอนสตรัคเตอร์ของ service
    private httpClient: HttpClient // เก็บ HttpClient สำหรับทำ HTTP requests
  ) { }

  // แต่ละฟังก์ชันในนี้จะไปในส่วนของการส่งค่าไปยัง API เพื่อนทำการดึงและเรียกข้อมูล

  // Requestcomponent
  // ดึง part no
  get_part_no(): Observable<any> { // ฟังก์ชันสำหรับดึงหมายเลขชิ้นส่วน
    return this.httpClient.get(`${BaseURL}/get_part_no`) // ส่ง HTTP GET request เพื่อดึงหมายเลขชิ้นส่วน
  }

  // ส่ง process
  post_process(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูล process
    return this.httpClient.post(`${BaseURL}/post_process`, data) // ส่ง HTTP POST request เพื่อส่งข้อมูล process
  }

  // ส่ง MCtype && revision
  post_machine_type(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลประเภทเครื่องจักรและการแก้ไข
    return this.httpClient.post(`${BaseURL}/post_machine_type`, data) // ส่ง HTTP POST request
  }

  // เรียก table item_no
  post_item_no(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูล item_no
    return this.httpClient.post(`${BaseURL}/post_item_no`, data) // ส่ง HTTP POST request
  }

  // Insert request
  post_request_to_cart(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลคำขอไปยังตะกร้า
    return this.httpClient.post(`${BaseURL}/post_request_to_cart`, data) // ส่ง HTTP POST request
  }
  get_list_table() : Observable<any> { // ฟังก์ชันสำหรับดึงหมายเลขชิ้นส่วน
    return this.httpClient.get(`${BaseURL}/get_list_table`) // ส่ง HTTP GET request เพื่อดึงหมายเลขชิ้นส่วน
  }

  // Cartcomponent
  // เรียก table cart
  post_request_for_merge_doc(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลสำหรับการรวมเอกสาร
    return this.httpClient.post(`${BaseURL}/post_request_for_merge_doc`, data); // ส่ง HTTP POST request
  }

  // ลบ item no
  delete_item(data: any): Observable<any> { // ฟังก์ชันสำหรับลบ item
    return this.httpClient.post(`${BaseURL}/delete_item`, data) // ส่ง HTTP POST request
  }

  // รวบรวม request แล้วสร้างเป็น Doc เดียว
  post_create_doc(data: any): Observable<any> { // ฟังก์ชันสำหรับสร้างเอกสารใหม่จากคำขอ
    return this.httpClient.post(`${BaseURL}/post_create_doc`, data) // ส่ง HTTP POST request
  }

  // List-requestcomponent
  // เรียก table list-request
  post_list_queue(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลในลิสต์คำขอ
    return this.httpClient.post(`${BaseURL}/post_list_queue`, data); // ส่ง HTTP POST request
  }

  // ลบ Doc
  delete_doc_no(data: any): Observable<any> { // ฟังก์ชันสำหรับลบเอกสาร
    return this.httpClient.post(`${BaseURL}/delete_doc_no`, data) // ส่ง HTTP POST request
  }
  change_to_in_progress(data: any): Observable<any> { // ฟังก์ชันสำหรับเปลื่ยน Waiting to In Progress
    return this.httpClient.post(`${BaseURL}/change_to_in_progress`, data) // ส่ง HTTP POST request
  }

  // Receivedcomponent
  // เรียก table receive
  Get_receive_list(data: any): Observable<any> { // ฟังก์ชันสำหรับดึงรายการที่รับ
    return this.httpClient.post(`${BaseURL}/Get_receive_list`, data); // ส่ง HTTP POST request
  }

  // Historycomponent
  // เรียก table history
  Get_history_list(data: any): Observable<any> { // ฟังก์ชันสำหรับดึงรายการประวัติ
    return this.httpClient.post(`${BaseURL}/Get_history_list`, data); // ส่ง HTTP POST request
  }

  // Detailcomponent
  // เรียก table Detail
  post_table_detail(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลรายละเอียด
    return this.httpClient.post(`${BaseURL}/post_table_detail`, data); // ส่ง HTTP POST request

  }

  // ส่งค่า Set_by ใน list request แล้วทำการเปลี่ยน Status, Local
  // จาก Status : In Progress, Local = 1
  // เป็น Status : Arranged, Local = 2
  post_set_by(data: any): Observable<any> { // ฟังก์ชันสำหรับตั้งค่า Set_by
    return this.httpClient.post(`${BaseURL}/post_set_by`, data); // ส่ง HTTP POST request
  }

  // ส่งค่า Set_by ใน list request แล้วทำการเปลี่ยน Status, Local
  // จาก Status : Arranged, Local = 2
  // เป็น Status : Finished, Local = 3
  post_receive(data: any): Observable<any> { // ฟังก์ชันสำหรับตั้งค่าเมื่อรับรายการ
    return this.httpClient.post(`${BaseURL}/post_receive`, data); // ส่ง HTTP POST request
  }

  post_dashboard_data(data: any): Observable<any> {
    return this.httpClient.post(`${BaseURL}/Post_dashboard_data`, data);
  }




  // Export เป็น Excel
  export_cut_off(data: any): Observable<any> { // ฟังก์ชันสำหรับส่งข้อมูลเพื่อส่งออกเป็น Excel
    return this.httpClient.post(`${BaseURL}/export_cut_off`, data); // ส่ง HTTP POST request
  }

  // return-cuttingtool

}
