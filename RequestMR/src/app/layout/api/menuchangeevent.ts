export interface MenuChangeEvent { // ประกาศ interface ที่ชื่อว่า MenuChangeEvent
  key: string; // คีย์ที่ใช้ระบุเมนู ค่าประเภท string
  routeEvent?: boolean; // อาจจะมีหรือไม่มี ค่าประเภท boolean เพื่อระบุว่าเป็นเหตุการณ์การนำทางหรือไม่
}
