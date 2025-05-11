# Dropship Backend - ROZAshopp

## Cara Menjalankan

1. Clone repo ini
2. Install dependencies:
```bash
npm install
```
3. Jalankan server:
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## Contoh Endpoint

- `POST /api/upload`  
  Upload produk: `{ "id": "123", "name": "Produk A", "price": 10000 }`

- `GET /api/products`  
  Ambil semua produk

- `POST /api/publish`  
  Simulasi publish produk ke Shopee