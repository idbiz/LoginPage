export async function fetchRegister() {
    const getName = document.getElementById("username");
    const getEmail = document.getElementById("email-regis");
    const getPhoneNumber = document.getElementById("phonenumber");
    const getPassword = document.getElementById("password-regis");
  
    document.querySelector("#register-form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const datajson = {
        Name: getName.value,
        Email: getEmail.value,
        PhoneNumber: getPhoneNumber.value,
        Password: getPassword.value,
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

      fetch("https://asia-southeast2-awangga.cloudfunctions.net/idbiz/auth/register", requestOptions)
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