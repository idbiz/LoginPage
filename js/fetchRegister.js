export function initRegisterForm() {
    const registerForm = document.querySelector("#register-form");
  
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const getName = document.getElementById("username").value.trim();
      const getEmail = document.getElementById("email-regis").value.trim();
      const getPhoneNumber = document.getElementById("phonenumber").value.trim();
      const getPassword = document.getElementById("password-regis").value;
  
      // Validasi input
      if (!getName || !getEmail || !getPhoneNumber || !getPassword) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Semua bidang harus diisi!",
        });
        return;
      }
  
      if (!getPhoneNumber.startsWith("62")) {
        Swal.fire({
          icon: "info",
          title: "Format Nomor Telepon Salah",
          text: "Nomor telepon harus diawali dengan 62.",
        });
        return;
      }
  
      const datajson = {
        Name: getName,
        Email: getEmail,
        PhoneNumber: getPhoneNumber,
        Password: getPassword,
      };
  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(datajson),
      };
  
      try {
        const response = await fetch(
          "https://asia-southeast2-awangga.cloudfunctions.net/idbiz/auth/register",
          requestOptions
        );
  
        const result = await response.json();
  
        if (response.status === 200) {
          Swal.fire({
            title: "Pendaftaran Berhasil",
            text: "Anda berhasil mendaftar. Silakan login untuk melanjutkan.",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/LoginPage";
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal Mendaftar",
            text: result.message || "Nomor harus diawali dengan 62",
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan pada server!",
        });
      }
    });
  }
  