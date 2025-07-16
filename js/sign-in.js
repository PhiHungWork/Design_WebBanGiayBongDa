// js/sign-in.js (Phiên bản hoàn thiện)
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    const notification = document.getElementById('notification');

    let hideNotificationTimer;
    let removeNotificationTimer;

    function showNotification(message, isError = false, duration = 3000) {
        clearTimeout(hideNotificationTimer);
        clearTimeout(removeNotificationTimer);

        notification.textContent = message;
        notification.style.backgroundColor = isError ? '#dc3545' : '#4CAF50';
        notification.style.display = 'block';
        notification.style.animation = 'slideIn 0.5s ease-out';

        hideNotificationTimer = setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease-out';
            removeNotificationTimer = setTimeout(() => {
                notification.style.display = 'none';
            }, 450); // Thời gian này hơi ngắn hơn animation để đảm bảo nó biến mất
        }, duration);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            const formId = tab.getAttribute('data-tab') + '-form';
            document.getElementById(formId).classList.add('active');
        });
    });
    
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    // --- CHỨC NĂNG ĐĂNG NHẬP ---
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const ADMIN_EMAIL = "admin@gmail.com";
        const ADMIN_PASSWORD = "123";
        const emailInput = signinForm.querySelector('input[type="email"]').value;
        const passwordInput = signinForm.querySelector('input[type="password"]').value;

        if (emailInput === ADMIN_EMAIL && passwordInput === ADMIN_PASSWORD) {
            showNotification('Đăng nhập admin thành công! Đang chuyển hướng...');
            setTimeout(() => { window.location.href = 'admin.html'; }, 1500);
            return;
        }
        
        const customers = JSON.parse(localStorage.getItem('customers')) || [];
        const foundUser = customers.find(user => user.email === emailInput && user.password === passwordInput);

        if (foundUser) {
            showNotification(`Chào mừng trở lại, ${foundUser.name}!`);
             setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        } else {
            showNotification('Sai email hoặc mật khẩu. Vui lòng thử lại!', true);
        }
    });

    // --- CHỨC NĂNG CỦA NÚT ĐĂNG KÝ ---
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Lấy dữ liệu từ các ô input
        const name = signupForm.querySelector('input[placeholder="Họ và tên"]').value;
        const email = signupForm.querySelector('input[placeholder="Email"]').value;
        const phone = signupForm.querySelector('input[placeholder="Số điện thoại"]').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // 2. Kiểm tra thông tin đầu vào
        if (!name || !email || !phone || !password || !confirmPassword) {
            showNotification('Vui lòng điền đầy đủ tất cả các trường!', true);
            return; // Dừng hàm nếu có trường trống
        }

        if (password !== confirmPassword) {
            showNotification('Mật khẩu xác nhận không khớp!', true);
            return; // Dừng hàm nếu mật khẩu không khớp
        }

        // 3. Kiểm tra email đã tồn tại chưa
        const customers = JSON.parse(localStorage.getItem('customers')) || [];
        const emailExists = customers.some(user => user.email === email);

        if (emailExists) {
            showNotification('Email này đã được sử dụng để đăng ký!', true);
            return; // Dừng hàm nếu email đã tồn tại
        }
        
        // 4. Nếu mọi thứ hợp lệ, tiến hành lưu người dùng
        const newCustomer = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            password: password // Lưu mật khẩu
        };
        
        customers.push(newCustomer);
        localStorage.setItem('customers', JSON.stringify(customers));

        // 5. Thông báo thành công và chuyển tab
        showNotification('Đăng ký thành công! Bây giờ bạn có thể đăng nhập.');
        signupForm.reset();
        document.querySelector('.auth-tab[data-tab="signin"]').click();
    });

    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Facebook';
            showNotification(`Chức năng đăng nhập với ${platform} chưa được hỗ trợ.`, true);
        });
    });
});