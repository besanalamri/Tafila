document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    var studentId = document.getElementById('student_id').value;
    var password = document.getElementById('password').value;

    // تحقق بسيط للمحاكاة (قم باستبداله بتكامل حقيقي مع قاعدة بيانات)
    if (studentId === '12345' && password === 'password') {
        window.location.href = 'home.html'; // الانتقال للصفحة الرئيسية بعد تسجيل الدخول بنجاح
    } else {
        displayError('رقم جامعي أو كلمة مرور غير صحيحة.');
    }
});

function displayError(message) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function showServiceDetails(serviceName) {
    alert(`عرض الخطوات وتفاصيل الخدمة: ${serviceName}.`);
    // هنا يمكنك فتح نافذة جديدة أو الانتقال إلى صفحة أخرى لعرض تفاصيل الخدمة
}
