# 🍽️ QR Code Order System

Hệ thống gọi món trực tuyến thông qua mã QR Code, giúp tối ưu hóa quy trình phục vụ và nâng cao trải nghiệm khách hàng.

## 🌐 Demo Trực Tuyến

Bạn có thể trải nghiệm hệ thống trực tiếp tại đây:
👉 **[http://43.106.13.60:3000/vi](http://43.106.13.60:3000/vi)**

### 🔑 Tài khoản quản trị (Admin)
Để truy cập vào trang quản lý, vui lòng sử dụng thông tin đăng nhập sau:
- **Email:** `admin@order.com`
- **Mật khẩu:** `123123`

---

## 🚀 Tính Năng Chính

- **Dành cho Khách hàng:**
  - Quét mã QR tại bàn để xem thực đơn.
  - Thêm món vào giỏ hàng và đặt món trực tiếp.
  - Theo dõi trạng thái đơn hàng.
- **Dành cho Quản trị viên (Admin):**
  - Quản lý thực đơn (Thêm, sửa, xóa món ăn, danh mục).
  - Quản lý đơn hàng theo thời gian thực.
  - Quản lý bàn ăn và mã QR.
  - Thống kê doanh thu cơ bản.

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** [Next.js](https://nextjs.org/), React, Tailwind CSS (nếu có).
- **Backend:** Node.js (Next.js API Routes hoặc Server riêng).
- **Database:** [Prisma / MongoDB / MySQL / PostgreSQL] *(Vui lòng điền chính xác hệ CSDL bạn đang dùng).*
- **Xác thực:** NextAuth.js hoặc JWT.

---

## 💻 Hướng Dẫn Cài Đặt Dưới Máy Local

Để chạy dự án này trên máy tính của bạn, hãy làm theo các bước sau:

### 1. Yêu cầu hệ thống
- Đã cài đặt **Node.js** (phiên bản 18.x trở lên).
- Đã cài đặt Git.

### 2. Các bước cài đặt

**Bước 1: Clone dự án**
```bash
git clone https://github.com/ltmkz/qrcode-oder.git
cd qrcode-oder
