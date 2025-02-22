Figma : 
<br>
https://www.figma.com/design/L2FfeA15UgjLH7wSJMyKBn/Bantu?node-id=22-2&t=QimZUn2BR9tJF17W-0


Output Ui search : 

Saat Search ada : 
![1](https://github.com/user-attachments/assets/95c0ade5-e052-455c-bef4-e1dcc9fea8de)

tidak ada : 
![2](https://github.com/user-attachments/assets/3dbd5b6d-fdcf-4c52-a31e-8b5dafae3c4a)


Doukumentasi API Jobs
Base URL
Copy
https://67b4bf90a9acbdb38ed03d7c.mockapi.io/api/v1
Endpoint
Copy
/jobs
Deskripsi
Endpoint ini menyediakan data pekerjaan (jobs) yang mencakup informasi seperti judul pekerjaan, perusahaan, lokasi, gaji, deskripsi, persyaratan, dan lainnya. Data ini dapat digunakan untuk menampilkan daftar pekerjaan, mencari pekerjaan berdasarkan kriteria tertentu, atau mengelola data pekerjaan.

Metode HTTP
GET: Mengambil daftar pekerjaan atau detail pekerjaan tertentu.

POST: Menambahkan pekerjaan baru.

PUT: Memperbarui data pekerjaan yang sudah ada.

DELETE: Menghapus pekerjaan.

Parameter
![image](https://github.com/user-attachments/assets/d5fa7b38-bcdd-41bd-a7e3-1185a3c920e5)


Responses
Struktur Data Jobs
<br>
![image](https://github.com/user-attachments/assets/679ec3ce-86cb-47c1-a24c-16f0b7909ff3)



1. Mendapatkan Semua Pekerjaan
   
Request:
<br>
![image](https://github.com/user-attachments/assets/0582b396-6213-4d1a-a43e-2993fcd88edd)

Response:
<br>
![image](https://github.com/user-attachments/assets/1a41ac42-e0c7-4081-a93e-df113f9f9183)

2. Mendapatkan Pekerjaan Berdasarkan ID
<br>
Copy
GET /jobs/1
<br>
![image](https://github.com/user-attachments/assets/6fa80e41-6ed8-4145-b0cf-96ac7983ecb0)


3. Menambahkan Pekerjaan Baru

<br>
![image](https://github.com/user-attachments/assets/85cd88a6-6b49-4a76-8cee-b06ca2b5c3f8)


4. Memperbarui Pekerjaan
   <br>
![image](https://github.com/user-attachments/assets/53aaf3f5-175d-4be5-8da3-dfce04b21dbc)

6. Menghapus Pekerjaan
Request:

Copy
DELETE /jobs/1
Response:

json
Copy
{}
Error Handling
Kode Status	Deskripsi
400	Bad Request - Permintaan tidak valid (contoh: data yang dikirim salah).
404	Not Found - Pekerjaan dengan ID tertentu tidak ditemukan.
500	Internal Server Error - Terjadi kesalahan pada server.
Catatan
API ini menggunakan MockAPI, sehingga data yang dikirim atau diubah tidak akan disimpan secara permanen.

Gunakan tools seperti Postman atau Insomnia untuk menguji endpoint ini.



Fitur Search & Filter (Bonus) :
Contoh Filter Contract Job
![image](https://github.com/user-attachments/assets/be10eaff-4ed2-4e98-84a9-a89e2af950d4)

