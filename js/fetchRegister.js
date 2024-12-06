export async function fetchRegister() {
    const getEmail = document.getElementById("email-regis");
    const getName = document.getElementById("name");
    const getPassword = document.getElementById("password-regis");
    const getPhoneNumber = document.getElementById("phonenumber");
  
    document.querySelector("#register-form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const datajson = {
        Email: getEmail.value,
        Name: getName.value,
        Password: getPassword.value,
        PhoneNumber: getPhoneNumber.value,
      };
  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify(datajson);
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
  
      console.log(raw);
  
      fetch(backend.register, requestOptions)
        .then(async (response) => {
          const status = response.status;
          const result = await response.json();
  
          if (status === 200) {
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
              icon: "info",
              title: "Gagal Mendaftar",
              text: "Nomor harus diawali dengan 62",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    });
  }