# Api-Automation-Task
Tugas Pekanan 4: API Automation
Repository ini berisi tugas pekanan 4 tentang otomatisasi pengujian API menggunakan supertest, mocha, dan chai.


## Soal
Make your own API Automation using supertest, mocha and chai. Minimum contains 4 endpoint (CRUD flow) with assert positive and negative scenario (2 test cases): 

- addCategory: Menguji operasi CRUD untuk menambahkan kategori.
- getCategoryList: Menguji operasi CRUD untuk mendapatkan daftar kategori.
- updateCategory: Menguji operasi CRUD untuk memperbarui kategori.
- deleteCategory: Menguji operasi CRUD untuk menghapus kategori.

## Cara Menjalankan
Pengujian untuk masing-masing endpoint dengan menjalankan perintah berikut pada terminal:

Menjalankan pengujian untuk menambahkan kategori:
```
npm run test:add
```

Menjalankan pengujian untuk mendapatkan daftar kategori:
```
npm run test:get
```

Menjalankan pengujian untuk memperbarui kategori:
```
npm run test:update
```

Menjalankan pengujian untuk menghapus kategori:
```
npm run test:delete
```

Selain itu, jika akan menjalankan seluruh rangkaian pengujian dengan perintah :

```
npx mocha test/suites/testsuites.js
```

Semua hasil pengujian akan akan disimpan di direktori reports.

## Screenshoot & Video eksekusi 
Video execution bisa diakses di link berikut:
```
https://drive.google.com/file/d/1i4vmkAaSc7zqSYpvv59Jqi8cxuxwJWhB/view?usp=sharing
```

Screenshoot hasil eksekusi mochawesome addCategory :
![image](https://github.com/savirarohwinas/Api-Automation-Task/assets/72561896/00405d0d-1f55-40d2-a410-ae93415cd296)

Screenshoot hasil eksekusi mochawesome GetCategoryList :
![image](https://github.com/savirarohwinas/Api-Automation-Task/assets/72561896/75c8348b-d871-4a72-aa43-d7a3f9e48904)

Screenshoot hasil eksekusi mochawesome UpdateCategory :
![image](https://github.com/savirarohwinas/Api-Automation-Task/assets/72561896/e6d8bc99-9618-4c46-87f7-d5ea9b2f090d)

Screenshoot hasil eksekusi mochawesome DeleteCategory :
![image](https://github.com/savirarohwinas/Api-Automation-Task/assets/72561896/8ba089f3-04d9-414d-bfac-0bf41d976ee8)


## Author
Savira Rohwina Sakti


